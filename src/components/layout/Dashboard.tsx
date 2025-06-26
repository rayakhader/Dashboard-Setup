import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"

function Dashboard() {
  return (
     <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default Dashboard