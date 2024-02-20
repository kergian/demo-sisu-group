import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@/layout'

/**
 * App layout
 */
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export { AppLayout }
