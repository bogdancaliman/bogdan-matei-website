import './App.css'
import { Button } from '@/components/ui/button'

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline text-purple-500 ">    Hello world!  </h1>
    <div className="flex items-center justify-center h-screen">
      <div className='w-60 bg-amber-200'>

      <Button className="w-full px-4 py-2">Click me</Button>
      </div>
    </div>
    </>
  )
}

export default App
