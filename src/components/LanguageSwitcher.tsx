import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const toggleLang = (lang: string) => {
        i18n.changeLanguage(lang)
        document.dir = lang === "ar" ? "rtl" : "ltr"
        localStorage.setItem('lang',lang)
    }
    return (
        <div className="flex gap-1">
            <Button
                variant={i18n.language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLang("en")}
            >
                EN
            </Button>
            <Button
                variant={i18n.language === "ar" ? "default" : "outline"}
                size="sm"
                onClick={() => toggleLang("ar")}
            >
                AR
            </Button>
        </div>
    )
}

export default LanguageSwitcher