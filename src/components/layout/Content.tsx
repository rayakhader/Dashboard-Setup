import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function Content() {
  return (
    <main className="p-6 space-y-6 bg-muted/50">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>New Report</Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Stats</h2>
          <p className="text-sm text-muted-foreground">Overview of your latest metrics.</p>
        </div>
        <div className="rounded-xl bg-white shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <p className="text-sm text-muted-foreground">Here's what users have been doing.</p>
        </div>
      </div>
    </main>
  )
}

export default Content
