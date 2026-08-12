import { supabase } from "../../../lib/supabase"


export default async function ProductPage({params}) {


const {data: product} = await supabase
.from("products")
.select("*")
.eq("id", params.id)
.single()



if(!product){

return(
<div>
Product not found
</div>
)

}



return(

<main
style={{
padding:"40px",
fontFamily:"Arial"
}}
>


<img

src={product.image}

style={{
width:"400px",
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
marginTop:"20px"
}}
>
View Product
</a>

<p>

{product.description}

</p>



<button
style={{
background:"#111",
color:"white",
padding:"15px",
borderRadius:"10px",
width:"300px"
}}
>

Order Now

</button>


</main>


)

}
