
let listado = document.querySelector(".listado");


      
    
    
    
      
      async function callfetch (){
    try {
      const res = await fetch("http://127.0.0.1:3003/products/list")
      const data = await res.json();
      data.forEach(product => {
        listado.innerHTML +=
        <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
               
            </div>
            <div class="col-md-6">
                <div class="product-container">
                    <h1 class="product-title">{product.name}</h1>
                    <img src={`http://127.0.0.1:3003/images/products/${product.image}`} alt="imagen de Producto" class="product-image"/>
                    <p class="product-description">{product.description}</p>
                    <h2 class="product-price">{product.price}</h2>
                    <p class="availability">Disponibilidad: En Stock</p>
                    <button class="btn btn-primary add-to-cart">Agregar al Carrito</button>
                </div>
            </div>
        </div>
        <a href="index.html" class="btn">home</a>
    </div>           
      });
    } catch (e){
        console.log(e);
    }
}

let data = callFetch();
console.log(listado);
