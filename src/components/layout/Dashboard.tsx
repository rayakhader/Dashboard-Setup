import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"

function Dashboard() {
  return (
     <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4">
          <Content />
        </main>
      </div>
    </div>
  )
}

export default Dashboard