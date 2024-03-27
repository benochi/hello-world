import { Metadata } from "next"

export const metadata: Metadata = {
  //title: { absolute: "Blog" } Will override the template value in layout at app/layout.tsx
  title: "Blog metadata"
}

export default function Blog(){
  return<h1>Blog 1!</h1>
}