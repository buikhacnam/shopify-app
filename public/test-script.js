let shop = Shopify.shop;

function makeApp(data) {
  let div = document.createElement("div");
  div.setAttribute("id", "mainDiv");
  div.style.textAlign = "center";
  div.style.marginTop = "10px";
  div.style.marginBottom = "10px";
  document.getElementById("shopify-section-header").appendChild(div);
  
  let heading = document.createElement("h4");
  let title = document.createTextNode("Hàng Đang Hot!!!:");
  heading.appendChild(title);
  document.getElementById("mainDiv").appendChild(heading);
  
  return data.map(item => {
    let a = document.createElement("a");
    let node = document.createTextNode(item.title);
    a.appendChild(node);
    a.title = item.title;
    a.href = `/products/${item.handle}`;
    a.style.marginRight = "30px";
    document.getElementById("mainDiv").appendChild(a);
  }); 
}

fetch(
    `https://cors-anywhere.herokuapp.com/https://183037e6cb6a.ngrok.io/api/products?shop=${shop}`
  )
    .then((res) => res.json())
    .then((data) => {
      makeApp(data.data);
      //console.log(data.data);
      
    })
    .catch((error) => console.log(error));
  
  
  