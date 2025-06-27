import './App.css'
// import { Button } from '@/components/ui/button'
import Layout from '@/components/layout/Layout'
// import { useState } from 'react'
import { Outlet } from "react-router";


function App() {
// const [count, setCount] = useState(0)
  return (
    <Layout>
      {/* <div className="text-center">
        <h2 className="text-xl mb-4">Welcome to the site</h2>
        <Button className="px-4 py-2" onClick={()=>setCount(count+1)}>Click me</Button>
        <div>Count: {count}</div>
      </div> */}
      <Outlet />
    </Layout>
  )
}

export default App
