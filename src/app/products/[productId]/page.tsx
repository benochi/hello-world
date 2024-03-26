export default function ProductDetails({ 
  params,
}: { 
  params: { productId: string };
})  {
  return (
    <>
      <h1>Product Details dynamic for product ID: {params.productId}</h1>
    </>
  )
}