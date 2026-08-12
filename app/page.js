import { supabase } from "../lib/supabase"

export default async function Home() {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")


  return (

    <main
      style={{
        padding:"40px",
        fontFamily:"Arial, sans-serif",
        maxWidth:"1200px",
        margin:"auto"
      }}
    >


      <h1
        style={{
          fontSize:"42px",
          marginBottom:"10px",
          fontWeight:"700"
        }}
      >
        ⚡ Electrical Shop
      </h1>


      <p
        style={{
          fontSize:"18px",
          color:"#555"
        }}
      >
        Quality Electrical Products
      </p>



      {error && (
        <p
          style={{
            color:"red"
          }}
        >
          {error.message}
        </p>
      )}




      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:"30px",
          marginTop:"40px"
        }}
      >



      {products?.map((product)=>(


        <div
          key={product.id}
          style={{
            border:"1px solid #eee",
            borderRadius:"20px",
            overflow:"hidden",
            background:"#fff",
            boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
          }}
        >



          {/* PRODUCT IMAGE */}

         <div
style={{
 height:"260px",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 background:"#fafafa",
 padding:"15px"
}}
>

            <img
              src={product.image}
              alt={product.name}
            style={{
 width:"75%",
 height:"75%",
 objectFit:"contain"
}}
            />

          </div>




          {/* PRODUCT INFO */}

          <div
            style={{
              padding:"25px"
            }}
          >


            <h2
              style={{
                fontSize:"24px",
                marginBottom:"12px"
              }}
            >
              {product.name}
            </h2>



            <p
              style={{
                color:"#555",
                fontSize:"16px"
              }}
            >
              Brand: {product.brand}
            </p>




            <h3
              style={{
                color:"#e11d48",
                fontSize:"26px",
                marginTop:"15px",
                marginBottom:"20px"
              }}
            >
              {product.price} MMK
            </h3>




            <button
              style={{
                background:"#111",
                color:"white",
                padding:"14px",
                borderRadius:"12px",
                border:"none",
                width:"100%",
                fontSize:"16px",
                cursor:"pointer"
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
