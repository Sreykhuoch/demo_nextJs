

//get product base on fake api 

  export async function getProductService(){
    const res = await fetch("https://fakestoreapiserver.reactbd.com/products")

    const data = await res.json();
    return data;
  }