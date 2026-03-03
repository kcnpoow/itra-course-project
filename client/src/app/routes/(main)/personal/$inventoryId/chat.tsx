import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(main)/personal/$inventoryId/chat',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/$inventoryId/discussion"!</div>
}
