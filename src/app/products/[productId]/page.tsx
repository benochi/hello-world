import { Metadata } from "next"

type Props = {
  params: {
    productId: string;
  }
}

//can be async or sync. 
// async
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(()=> {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}


// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`
//   }
// }

export default function ProductDetails({ params} : Props)  {
  return (
    <>
      <h1>Product Details dynamic for product ID: {params.productId}</h1>
    </>
  )
}