import { VFC, memo } from 'react';


export const TagList: VFC = () => {
  console.log('rendered TagList')
  return (
    <div>
    </div>
  )
}

export const TagListMemo = memo(TagList);
