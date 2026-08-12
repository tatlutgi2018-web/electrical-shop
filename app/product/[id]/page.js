import { supabase } from "../../../lib/supabase"


export default async function ProductPage({ params }) {

  const { id } = params


  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single()


  if(error || !product){
    return (
      <main
        style={{
          padding:"40px",
          fontFamily:"Arial"
        }}
      >
        <h1>
          Product not found
        </h1>
      </main>
    )
  }


  return (

    <main
      style={{
        padding:"40px",
        maxWidth:"900px",
        margin:"auto",
        fontFamily:"Arial"
      }}
    >

      <div
        style={{
          border:"1px solid #eee",
          borderRadius:"20px",
          overflow:"hidden",
          padding:"30px",
          boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
        }}
      >


        <img
          src={product.image}
          alt={product.name}
          style={{
            width:"100%",
            height:"400px",
            objectFit:"contain"
          }}
        />


        <h1>
          {product.name}
        </h1>


        <h3>
          Brand: {product.brand}
        </h3>


        <h2
          style={{
            color:"#e11d48"
          }}
        >
          {product.price} MMK
        </h2>


        <button
          style={{
            width:"100%",
            padding:"15px",
            background:"#111",
            color:"white",
            border:"none",
            borderRadius:"10px",
            fontSize:"18px"
          }}
        >
          Order Now
        </button>


      </div>


    </main>

  )
}
