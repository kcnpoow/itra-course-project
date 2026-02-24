import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/personal/shared')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/shared"!</div>
}
