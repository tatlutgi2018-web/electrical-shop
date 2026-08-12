import { supabase } from "../lib/supabase"

export default async function Home() {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")


  return (

    <main
style={{
 padding:"40px",
 fontFamily:"Arial",
 maxWidth:"1200px",
 margin:"auto"
}}
>

      <h1
        style={{
          fontSize:"40px",
          marginBottom:"10px"
        }}
      >
        ⚡ Electrical Shop
      </h1>


      <p>
        Quality Electrical Products
      </p>


      {error && (
        <p>
          {error.message}
        </p>
      )}



     <div
style={{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
  gap:"25px",
  marginTop:"30px"
}}
>



      {products?.map((product)=>(


        <div
key={product.id}
style={{
 border:"1px solid #eee",
 borderRadius:"20px",
 overflow:"hidden",
 background:"white",
 boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
}}
>


          <div
            style={{
              padding:"20px"
            }}
          >

<div
style={{
 height:"280px",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 background:"#f8f8f8"
}}
>
<img
src={product.image}
alt={product.name}
style={{
 width:"100%",
 height:"100%",
 objectFit:"contain",
 padding:"20px"
}}
/>
</div>



</div>


            <h2
              style={{
                marginTop:"20px"
              }}
            >
              {product.name}
            </h2>



            <p>
              Brand: {product.brand}
            </p>



            <h3
              style={{
                color:"#e11d48",
                fontSize:"24px"
              }}
            >
              {product.price} MMK
            </h3>



            <button
              style={{
                background:"#111",
                color:"white",
                padding:"12px 25px",
                borderRadius:"10px",
                border:"none",
                cursor:"pointer",
                width:"100%",
                fontSize:"16px"
              }}
            >
              View Product
            </button>


          </div>


        </div>


      ))}


      </div>


    </main>

  )
}
