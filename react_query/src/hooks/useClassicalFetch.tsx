import { useState, useEffect } from 'react'
import { useStateContext } from '../context/StateProvider';
import axios from 'axios';

//
// データを取得するカスタムフック
//
export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext();

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  //
  // 初回リロード時、データ取得
  //
  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)

      try {
        const res = await axios.get('http://localhost:8000/api/tasks/')
        setTasks(res.data)
      } catch (error) {
        setError(true)
      }

      setLoading(false)
    }
    fetchData()
  }, [setTasks])

  return { tasks, isLoading, isError };
}
