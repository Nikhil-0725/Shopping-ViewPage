var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}


const containerLeft = document.createElement("div")
containerLeft.className="left"
const containerRight = document.createElement("div")
containerRight.className="right"

/* Adding image to left container */

const previewImg = document.createElement("img")
previewImg.className="previewImg"
previewImg.src=productData.preview

containerLeft.append(previewImg)
document.body.append(containerLeft)


/* filling right container */


const heading=document.createElement("h1")
heading.className="heading"
heading.append(productData.name)
containerRight.append(heading)

const heading2=document.createElement("h2")
heading2.className="heading2"
heading2.append(productData.brand)
containerRight.append(heading2)

const value=document.createElement("h3")
value.className="value"
const Rs=document.createElement("span")
Rs.className="Rs"
Rs.append(productData.price)
value.append("Price: Rs ")
value.append(Rs)
containerRight.append(value)

const desc=document.createElement("h2")
desc.className="desc"
desc.append("Description")
containerRight.append(desc)

const para=document.createElement("p")
para.className="para"
para.append(productData.description)
containerRight.append(para)

const prev=document.createElement("h2")
prev.className="prev"
prev.append("Product Preview")
containerRight.append(prev)

const smallImg=document.createElement("div")
smallImg.className="smallImg"


for(let i=0; i<5; i++){
  if(productData.isAccessory === false){
    const imgSmall=document.createElement("img")
    imgSmall.className="imgSmall"
    imgSmall.src=productData.photos[i]
    smallImg.append(imgSmall)
    
    if(i==0){
      imgSmall.classList.add("active")
    }

    /* macking click event active */

    imgSmall.addEventListener("click",()=>{
      document.querySelector(".active").classList.remove("active")
      imgSmall.classList.add("active")
      previewImg.setAttribute("src",imgSmall.src)
    })
  }
}
containerRight.append(smallImg)


const btn=document.createElement("div")
btn.className="btn"
const cartBtn=document.createElement("button")
cartBtn.classList="cartBtn"

cartBtn.append("Add to Cart")
btn.append(cartBtn)
containerRight.append(btn)


document.body.append(containerRight)