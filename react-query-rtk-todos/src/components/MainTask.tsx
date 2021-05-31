import { VFC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { TaskListMemo } from './TaskList';
import { TaskEditMemo } from './TaskEdit';

export const MainTask: VFC = () => {
  const history = useHistory();
  const [text, setText] = useState<string>('');

  console.log('renderd MainTask')

  return (
    <>
      <input
        type="text"
        className="mb-3 px-3 py-2 border border-gray-300"
        placeholder="dummy text ?"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>

      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div>

      <ChevronDoubleRightIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => history.push('/tags')}
      />
      <p>Tag page</p>
    </>
  )
}
