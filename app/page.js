import { supabase } from "../lib/supabase"


export default async function Home() {


  const {
    data: products,
    error
  } = await supabase
    .from("products")
    .select("*")



  return (

    <main
      style={{
        padding:"40px",
        fontFamily:"Arial",
        maxWidth:"1200px",
        margin:"auto",
        background:"#fafafa",
        minHeight:"100vh"
      }}
    >


      <h1
        style={{
          fontSize:"42px",
          marginBottom:"10px"
        }}
      >
        ⚡ Electrical Shop
      </h1>


      <p>
        Quality Electrical Products
      </p>



      {
        error && (

          <p
          style={{
            color:"red"
          }}
          >
            {error.message}
          </p>

        )
      }



      <div

        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
          gap:"30px",
          marginTop:"40px"
        }}

      >



      {
        products?.map((product)=>(


          <div

          key={product.id}

          style={{

            background:"white",
            borderRadius:"20px",
            overflow:"hidden",
            boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
            border:"1px solid #eee"

          }}

          >



          <div

          style={{

            height:"300px",
            background:"#f5f5f5",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"

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




          <div

          style={{

            padding:"20px"

          }}

          >


          <h2>

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


<a
href={`/product/${product.id}`}
style={{
  display:"block",
  background:"#111",
  color:"white",
  padding:"12px",
  borderRadius:"10px",
  textAlign:"center",
  textDecoration:"none",
  width:"100%"
}}
>
View Product
</a>

          View Product


          </button>



          </div>



          </div>



        ))
      }



      </div>



    </main>

  )
}
