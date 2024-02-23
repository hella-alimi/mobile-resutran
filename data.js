 let menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        image1: "images/pizzaimage.jpg",
       
    },
    {
        name: "Hamburger",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        price: 5,
        image1: "images/OIP (1).jpg",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        price: 12,
        image1: "images/juceimage.jpg",
        id: 2
    },

    

    {
        name: "Cake",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        price: 12,
        image1: "images/cake image.jpg",
        id: 3
    }

    
]





for(let i = 0; i < menuArray.length; i++){
   
let shows = document.getElementById('contianer').innerHTML +=  `
    <div class="breakfast">
    <img class="img1" src="${menuArray[i].image1}" alt="" >
       <h3 class="menutitle" id="header3">${menuArray[i].name} <br><span class="mat" id ="mat">${menuArray[i].ingredients}</span><br> <span class="price" id="price" style="font-weight: 400;">${menuArray[i].price}$</span></h3>
       <div id="btnorder">
       <button id="btn">+</button>
      </div>
       </div>

       `
    

}


// for(let i1 = 0; i1 < menuArray.length; i1++){


// let btnplus =document.getElementById('btn')
// let order=document.getElementById('order')
// btnplus.addEventListener('click',function(){
//     order.innerHTML +=`
//     <div class="ordercontent" id="ordercontent">
//     <h3 class="orderh1" id="orderh1" >${menuArray[i1].name}<sub class="ordertext">Remove</sub><br> </h3>
//     <span class="orderprice" style="font-weight: 400;">${menuArray[i1].price}$</span>
//     </div>
    
//     ` 


// })

// }
// function showDiv() {
//     document.getElementById('order').style.display = "block";
//  }

// function showdiv(){

//     for(let i1 = 0; i1 < menuArray.length; i1++){
   
//    let show3= document.getElementById('order').innerHTML =`
//     <h1 >you order</h1>
//     <div class="ordercontent" id="ordercontent">
//     <h1 class="orderh1" >${menuArray[i1].name}<sub class="ordertext">Remove</sub><br> </h1>
//     <span class="orderprice" style="font-weight: 400;">${menuArray[i1].price}$</span>
//     </div>
//     <div class="ordercontent">
//                     <h1 class="orderh1">Total</h1>
//                     <span class="orderprice" style="font-weight: 400;"></span>
//                     </div>
//     `
   
   

//     }


// } 

const modal = document.getElementById('modal')
const orderbtn = document.getElementById('btnor')
const consentForm = document.getElementById('consent-form')
const con = document.getElementById('massage')
// const paybtn = document.getElementsByNameId('modelbtn')
const order =document.getElementById('order')
const btnorder = document.getElementById('btn')


// btnorder.addEventListener('click', function(){
   
//    console.log('do your best');
// })


btnor.addEventListener('click', function(){
    modal.style.display = 'inline'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
        con.style.display="inline"
       con.innerHTML =`
                <h2>Thanks <span class="modal-display-name">${fullName}</span>, your order is on it is way! </h2>
       `
       order.style.display = 'none'
       modal.style.display='none'

}) 

 
  


