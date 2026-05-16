import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/graphic-design')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/work/graphic-design"!</div>
}
