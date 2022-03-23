import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Header />
        <div className="container mt-5">
          <Outlet/>
        </div>
    </>
  )
}

export default Layout