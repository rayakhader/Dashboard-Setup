import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "react-i18next"

function Dashboard() {
  const {t} = useTranslation()
  return (
    <main className="p-6 space-y-6 bg-muted/50">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{t("SIDEBAR.Dashboard")}</h1>
          <p className="text-sm text-muted-foreground">{t("CONTENT.Welcome")}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">{t("CONTENT.Export")}</Button>
          <Button>{t("CONTENT.NewReport")}</Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white shadow p-4">
          <h2 className="text-lg font-semibold mb-2">{t("CONTENT.Stats")}</h2>
          <p className="text-sm text-muted-foreground">{t("CONTENT.StatsDescription")}</p>
        </div>
        <div className="rounded-xl bg-white shadow p-4">
          <h2 className="text-lg font-semibold mb-2">{t("CONTENT.RecentActivity")}</h2>
          <p className="text-sm text-muted-foreground">{t("CONTENT.RecentActivityDescription")}</p>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
