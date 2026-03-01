import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/personal/$inventoryId/inventory-numbers',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/$inventoryId/inventory-numbers"!</div>
}
