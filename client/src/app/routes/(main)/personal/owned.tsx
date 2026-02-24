import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/personal/owned')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/personal/owned"!</div>
}
