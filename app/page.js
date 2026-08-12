import { supabase } from "../lib/supabase"

export default async function Home() {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")


  return (
    <main
      style={{
        padding:"50px",
        maxWidth:"1200px",
        margin:"auto",
        fontFamily:"Arial, sans-serif"
      }}
    >

      <h1
        style={{
          fontSize:"42px",
          fontWeight:"800"
        }}
      >
        ⚡ Electrical Shop
      </h1>


      <p
        style={{
          color:"#666",
          fontSize:"18px",
          marginBottom:"40px"
        }}
      >
        Quality Electrical Products
      </p>


      {error && (
        <p style={{color:"red"}}>
          {error.message}
        </p>
      )}



      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
          gap:"30px"
        }}
      >


      {products?.map((product)=>(


        <div
          key={product.id}
          style={{
            background:"#fff",
            borderRadius:"20px",
            overflow:"hidden",
            border:"1px solid #eee",
            boxShadow:
            "0 15px 40px rgba(0,0,0,0.08)"
          }}
        >


          <div
            style={{
              height:"300px",
              background:"#fafafa",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >

            <img
              src={product.image}
              alt={product.name}
              style={{
                width:"85%",
                height:"85%",
                objectFit:"contain"
              }}
            />

          </div>



          <div
            style={{
              padding:"25px"
            }}
          >

            <h2
              style={{
                fontSize:"24px",
                margin:"0 0 15px"
              }}
            >
              {product.name}
            </h2>


            <p
              style={{
                color:"#555"
              }}
            >
              Brand: {product.brand}
            </p>



            <h3
              style={{
                color:"#e11d48",
                fontSize:"28px"
              }}
            >
              {product.price} MMK
            </h3>



            <button
              style={{
                width:"100%",
                background:"#111",
                color:"#fff",
                border:"none",
                padding:"15px",
                borderRadius:"12px",
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
