import { useQuery } from 'react-query';
import axios from 'axios';
import { Task } from '../types/types';

export const useQueryTasks = () => {
	const fetchTask = async () => {
		const { data } = await axios.get<Task[]>(
			`${process.env.REACT_APP_REST_URL}/api/tasks/`
		)
		return data
	}

	return useQuery<Task[] | null>({
		queryKey: 'tasks',
		queryFn: fetchTask,
		staleTime: 0,
	})
}
