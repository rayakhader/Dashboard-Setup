import { Home, Settings, Users, MessageCircle, Menu } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const navItems = [
  { label: 'Dashboard', icon: Home, href: '/' },
  { label: 'Users', icon: Users, href: '/users' },
  { label: 'Messages', icon: MessageCircle, href: '/messages' },
  { label: 'Settings', icon: Settings, href: '/settings' },
]

function Sidebar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const SidebarContent = (
    <div className="h-full bg-white border-r border-gray-200 shadow-sm w-64">
      <div className="px-4 py-5 text-xl font-bold">{t("SIDEBAR.My Dashboard")}</div>
      <Separator />
      <ScrollArea className="h-[calc(100vh-80px)] p-2">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              asChild
            >
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-start gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition rtl:flex-row-reverse"
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{t(`SIDEBAR.${item.label}`)}</span>
              </a>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )

  return (
    <>
      <div className="md:hidden px-4 py-2 border-b  bg-white shadow-sm">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            {SidebarContent}
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">{SidebarContent}</div>
    </>
  )
}

export default Sidebar
