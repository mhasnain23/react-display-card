import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fetchData, setFetchData] = useState([])
  useEffect(() => {
    async function fetchData() {
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
      let res = await a.json()
      setFetchData(res)
    }

    fetchData()
  }, [])


  return (
    <div>
      <div className="navContainer rounded-xl mx-auto px-32 w-[95vw] h-32 flex items-center justify-between text-white bg-cyan-500">
        <h2 className='font-bold text-3xl'>CodeWithHasnain</h2>
        <ul className='flex items-center gap-20 text-[1vw] font-bold'>
          <li>Home</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="cardContainer w-full gap-5 px-10 py-5 mt-5">
        <div className="card grid grid-cols-4 gap-20">
          {fetchData.map((items) => {
            return <div className='bg-[#383838] text-[#dcdcdc] flex flex-col gap-3 rounded-lg p-4' key={items.id} ><h1>User Id: {items.userId}</h1> <h2>Id: {items.id}</h2> <h4 className=''>Title: {items.title}</h4> <p className=''>Description: {items.body}</p></div>
          })}
        </div>
      </div>
    </div >
  )
}

export default App
