import Link from "next/link"

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