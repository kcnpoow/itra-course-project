import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/personal/$inventoryId/discussion',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/$inventoryId/discussion"!</div>
}
