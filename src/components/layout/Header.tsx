import { Button } from "@/components/ui/button"
import { Bell, ChevronDown, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslation } from "react-i18next"

function Header() {
  const {t} = useTranslation()

  return (
    <header className="w-full px-4 py-2 bg-white border-b flex items-center justify-between shadow-sm">
      <h1 className="text-lg font-semibold">{t("SIDEBAR.Dashboard")}</h1>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" bg-white">
            <DropdownMenuLabel>{t("DROPDOWN.My Account")}</DropdownMenuLabel>
            <DropdownMenuItem>{t("DROPDOWN.Profile")}</DropdownMenuItem>
            <DropdownMenuItem>{t("DROPDOWN.Settings")}</DropdownMenuItem>
            <DropdownMenuItem>{t("DROPDOWN.Logout")}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
