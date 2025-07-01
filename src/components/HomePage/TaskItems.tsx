import React from 'react'

type TaskItemsProp = {
    details: string;
    dueDate: Date;
}

export const TaskItems = ({details, dueDate}: TaskItemsProp) => {
  return (
    <div className='w-[100%] h-[50px] bg-white'>
        <h1>{details}</h1>
        <h1>{dueDate}</h1>
    </div>
  )
}
