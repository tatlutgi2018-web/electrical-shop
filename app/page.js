import { supabase } from "@/lib/supabase"

export default async function Home() {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")

  return (
    <main style={{
      padding:"40px",
      fontFamily:"Arial"
    }}>

      <h1>
        ⚡ Electrical Shop
      </h1>

      <p>
        Quality Electrical Products
      </p>


      {error && (
        <p>{error.message}</p>
      )}


      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>


      {products?.map((product)=>(

        <div
          key={product.id}
          style={{
            border:"1px solid #ddd",
            borderRadius:"15px",
            padding:"20px",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h2>
            {product.name}
          </h2>


          <p>
            Brand: {product.brand}
          </p>


          <h3>
            {product.price} MMK
          </h3>


          <button
            style={{
              background:"#111",
              color:"white",
              padding:"10px 20px",
              borderRadius:"8px",
              border:"none"
            }}
          >
            View Product
          </button>


        </div>

      ))}


      </div>


    </main>
  )
}
