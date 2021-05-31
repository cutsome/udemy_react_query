import axios from 'axios';
import { useAppDispatch } from '../app/hooks';
import { resetEditedTask } from '../slices/todoSlice';
import { useQueryClient, useMutation } from 'react-query';
import { Task, EditTask } from '../types/types';

//
// const { mutateFunction } = useMutateTask();
//
export const useMutateTask = () => {
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();

	//
	// タスク作成
	//
	const createTaskMutation = useMutation(
		//
		// create
		//
		(task: Omit<EditTask, 'id'>) => 
			axios.post<Task>(`${process.env.REACT_APP_REST_URL}/api/tasks/`, task),
		//
		// create後
		//
		{
			onSuccess: (res) => {
				const previousTasks = queryClient.getQueryData<Task[]>('tasks');
				if (previousTasks) {
					queryClient.setQueryData<Task[]>('tasks', [...previousTasks, res.data])
				}
				dispatch(resetEditedTask());
			}
		}
	)

	//
	// タスク更新
	//
	const updateTaskMutation = useMutation(
		(task: EditTask) =>
			axios.put<Task>(`${process.env.REACT_APP_REST_URL}/api/tasks/${task.id}/`, task),
		{
			onSuccess: (res, variables) => {
				const previousTasks = queryClient.getQueryData<Task[]>('tasks')
				if (previousTasks) {
					queryClient.setQueryData<Task[]>(
						'tasks',
						previousTasks.map((task) => 
							task.id === variables.id ? res.data : task 
						)
					)
				}
				dispatch(resetEditedTask())
			}
		}
	)

	//
	// タスク削除
	//
	const deleteTaskMutation = useMutation(
		(id: number) => axios.delete(`${process.env.REACT_APP_REST_URL}/api/tasks/${id}/`),
		{
			onSuccess: (res, variables) => {
				const previousTasks = queryClient.getQueryData<Task[]>('tasks');
				if (previousTasks) {
					queryClient.setQueryData<Task[]>(
						'tasks',
						previousTasks.filter((task) => task.id !== variables)
					)
				}
				dispatch(resetEditedTask())
			}
		}
	)

	return { deleteTaskMutation, createTaskMutation, updateTaskMutation };
}
