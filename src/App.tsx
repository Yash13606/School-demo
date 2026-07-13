import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { useAuth } from './stores/auth'
import { ToastStack } from './components/ui/ToastStack'

export default function App() {
  const hydrate = useAuth((s) => s.hydrate)

  useEffect(() => {
    hydrate()
  }, [hydrate])

  return (
    <>
      <RouterProvider router={router} />
      <ToastStack />
    </>
  )
}
