import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/personal/$inventoryId/access-settings',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/$inventoryId/access-settings"!</div>
}
