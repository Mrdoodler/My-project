const hoodieProducts = [

    {
        id:1,
        type:'men',
        category:'hoodies',
        name : 'Hooded Red SweatShirt',
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, sint. Lorem ipsum dolor sit amet.`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-8-Mast--Harbour-Men-Sweatshirts-361510662720014-3.webp'
    },
    {
        id:2,
        type:'men',
        category:'hoodies',
        name : 'Hooded Red SweatShirt',
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, sint. Lorem ipsum dolor sit amet.`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-6-c8f59ce288501607161669576-3.webp'
    },
    {
        id:3,
        type:'men',
        category:'hoodies',
        name : 'Hooded Red SweatShirt',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt ullam dolorem eos, vitae voluptas amet assumenda perferendis excepturi?`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-11-be9c-0d6a864c4c151650284847730WROGNMenMustardYellowSlimFitSolidHoodedSweat.webp'
    },
    {
        id:4,
     type:'men',
        category:'hoodies',
        name : 'Grey Weirdly Awesome Fleece Sweat Shirt',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt ullam dolorem eos, vitae voluptas amet assumenda perferendis excepturi?`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-2-MenGreyWeirdly_AwesomeFleeceHoodedSweatshirtw.webp'
    },
    {
        id:5,
        type:'men',
        category:'hoodies',
        name : 'Relaxed Fit Hoodies',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt ullam dolorem eos, vitae voluptas amet assumenda perferendis excepturi?`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-4-RelaxedFitHoodie1.webp'
    },
    {
        id:6,
        type:'men',
        category:'hoodies',
        name : 'HRX Hrithik Roshan Brand Hoodie',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt ullam dolorem eos, vitae voluptas amet assumenda perferendis excepturi?`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-5HRX-by-Hrithik-Roshan-Men-Teal--Black-Colourblocked-Hooded-Sweatshirt-35815096.webp'
    },
    {
        id:7,
        type:'men',
        category:'hoodies',
        name : 'Roadster Men SweatShirt',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt ullam dolorem eos, vitae voluptas amet assumenda perferendis excepturi?`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-7--Roadster-Men-Sweatshirts-8881599556886717-5.webp'
    },
    {
        id:8,
        type:'men',
        category:'hoodies',
        name : 'Charcoal Printed SweathShirt',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur deserunt ullam dolorem eos, vitae voluptas amet assumenda perferendis excepturi?`,
        price:  Math.floor(Math.random() * 200) + 300,
        path : '../imgs/men/hoodies/men-hoodies-9-WROGN-Men-Charcoal-Printed-Hooded-Sweatshir.webp'
    },
   
]


const hoodies= document.querySelectorAll('#hoodies .single-product')
const shirts= document.querySelectorAll('#shirts .single-product')
const pants= document.querySelectorAll('#pants .single-product')



   

    for(i=0;i<hoodieProducts.length;i++){

        // ! check if category is hoodies
        if(hoodieProducts[i].category==='hoodies'){

            const html = `
            <div class="card w-100 overflow-hidden" id='hoodies-${hoodieProducts[i].id}'>
        <img src="${hoodieProducts[i].path}" class="card-img-top" alt="...">
        <div class="card-body border border overflow-y-auto">
            <h3 class="item-price">$${hoodieProducts[i].price}</h3>
          <h5 class="card-title">${hoodieProducts[i].name}</h5>
          <p class="card-text">${hoodieProducts[i].text}</p>
           <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
           </div>
           </div>
        `
        

        hoodies[i].innerHTML = html     
    }

  
}










    
    


