import './App.css'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout/Layout'

function App() {

  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-xl mb-4">Welcome to the site</h2>
        <Button className="px-4 py-2">Click me</Button>
      </div>
    </Layout>
  )
}

export default App
