"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){

  const router = useRouter()
  
  const handleClick = () => {
    console.log("placing your order!")
    router.push("/") //can also use router.replace, and router.back() with no arguments to navigate back. router.forward as well. 

  }
  
  
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  )
}