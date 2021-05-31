import { VFC } from 'react';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

export const MainTag: VFC = () => {
  console.log('rendered MainTag')

  return (
    <>
      <p className="mb-10 text-xl font-bold">Tags</p>

      <div className="grid grid-cols-2 gap-40">
        
      </div>

      <ChevronDoubleLeftIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p>Task page</p>
    </>
  )
}
