import './App.css'
// import { Button } from '@/components/ui/button'
import Layout from '@/components/layout/Layout'
// import { useState } from 'react'
import { Outlet } from "react-router";


function App() {
// const [count, setCount] = useState(0)
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
