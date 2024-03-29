import Link from "next/link"
// one dot (.) is same level, (..) is level above interception
export default function InterceptedF2() {
  return (
  <>
    <h1>(.) This is the intercepted F2 page</h1>
    <div>
      <Link href="/f1">F1 Link</Link>
    </div>
  </>
  )
}