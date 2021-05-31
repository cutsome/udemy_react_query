import React, { useContext, useState, createContext } from 'react';
import { Task } from '../types/types';

//
// tasks: サーバーからfetch
// dark:  ローカルステート
//
interface StateContextType {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

//
// コンテキスト(グローバルステート)
//
const StateContext = createContext({} as StateContextType)

export const StateProvider: React.FC = ({children}) => {
  //
  // グローバル化するステート
  //
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)

  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}

//
// useStateContext(): { tasks, setTasks, dark, setDark }
//
export const useStateContext = (): StateContextType => useContext(StateContext)
