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
background:"white",
borderRadius:"18px",
border:"1px solid #eee",
overflow:"hidden",
boxShadow:"0 8px 25px rgba(0,0,0,0.08)"
}}
>


<div
style={{
height:"260px",
background:"#f7f7f7",
display:"flex",
alignItems:"center",
justifyContent:"center"
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



<div
style={{
padding:"20px"
}}
>

<h2
style={{
fontSize:"22px",
marginBottom:"10px"
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
fontSize:"25px"
}}
>
{product.price} MMK
</h3>


<button
style={{
width:"100%",
padding:"13px",
background:"#111",
color:"white",
border:"none",
borderRadius:"10px"
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
