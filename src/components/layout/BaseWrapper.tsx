import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

function BaseWrapper() {
  return (
     <div className="flex h-scree">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default BaseWrapper