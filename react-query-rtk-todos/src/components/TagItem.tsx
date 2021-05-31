import { VFC, memo } from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';

export const TagItem: VFC = () => {
  console.log('rendered TagItem')

  return (
    <li className="my-3">
      <span className="font-bold"></span>
      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
        />

        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
        />
      </div>
    </li>
  )
}

export const TagItemMemo = memo(TagItem);
