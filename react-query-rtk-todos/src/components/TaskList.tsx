import { VFC, memo } from 'react';
import { useQueryTasks } from '../hooks/useQueryTasks';
import { TaskItem } from './TaskItem';

export const TaskList: VFC = () => {
  const { status, data } = useQueryTasks();

  console.log('rendered TaskList');

  if (status === 'loading') return <div>{'Loading...'}</div>;
  if (status === 'error') return <div>{'Error'}</div>;


  return (
    <div>
      {data?.map((task) => (
        <ul>
          <TaskItem task={task} />
        </ul>
      ))}
    </div>
  )
}

export const TaskListMemo = memo(TaskList)
