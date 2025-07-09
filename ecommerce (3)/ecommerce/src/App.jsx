import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routing from './pages/Routing'

const App = () => {
  return (
    <div>
      <RouterProvider router={Routing}></RouterProvider>
    </div>
  )
}

export default App
