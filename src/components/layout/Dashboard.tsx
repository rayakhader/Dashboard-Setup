import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"
import { useEffect } from "react"
import i18n from "@/i18n"

function Dashboard() {
  useEffect(()=>{
    const lang = localStorage.getItem('lang')
    if(lang){
      i18n.changeLanguage(lang)
      document.dir = lang ==='ar'? 'rtl':'ltr'
    }
  },[])
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