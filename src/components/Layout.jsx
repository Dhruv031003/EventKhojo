import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layout
