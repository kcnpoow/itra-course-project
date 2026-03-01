import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/personal/$inventoryId/general-settings',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/$inventoryId/general-settings"!</div>
}
