import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/video-editing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/work/video-editing"!</div>
}
