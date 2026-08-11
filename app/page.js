import { supabase } from "@/lib/supabase"

export default async function Home() {

  const { data: products } = await supabase
    .from("products")
    .select("*")

  return (
    <main>
      <h1>Electrical Shop</h1>

      <p>Our Products</p>

      <div>
        {products?.map((product) => (
          <div key={product.id}>

            <h2>{product.name}</h2>

            <p>Brand: {product.brand}</p>

            <p>Price: {product.price} MMK</p>

          </div>
        ))}
      </div>

    </main>
  )
}
