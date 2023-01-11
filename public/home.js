
// bat su kien click nut create
let create = document.querySelector('.dropbtn');
create.addEventListener("click",()=>{
    if(document.querySelector(".dropdown-content").style.display == "none"){
        document.querySelector(".dropdown-content").style.display = "block"
    }else if(document.querySelector(".dropdown-content").style.display == ""){
        document.querySelector(".dropdown-content").style.display = "block"
    }   
    else{
        document.querySelector(".dropdown-content").style.display = "none"
    }
})
// su kien click nut home
let home = document.querySelector(".home button")
home.addEventListener("click",()=>{
    window.location.href = "http://localhost:3000/home"
});


// su kien nut hove vao an h hien ra nut save
let postItem = document.querySelector(".column--wrapper")
postItem.addEventListener("mouseover" ,(e)=>{
    if(e.target.classList.contains("image")){
        let index = e.target.dataset.index;
        document.querySelectorAll(".post--item p")[index].style.visibility= "visible"
        document.querySelectorAll(".fa-arrow-up-from-bracket")[index].style.visibility= "visible"
        document.querySelectorAll(".fa-ellipsis")[index].style.visibility= "visible"
        document.querySelectorAll(".post--item button")[index].style.visibility= "visible"
    }

})
postItem.addEventListener("mouseout" ,(e)=>{
    if(e.target.classList.contains("image")){
         let index = e.target.dataset.index;
         document.querySelectorAll(".post--item p")[index].style.visibility= "hidden"
        document.querySelectorAll(".fa-arrow-up-from-bracket")[index].style.visibility= "hidden"
        document.querySelectorAll(".fa-ellipsis")[index].style.visibility= "hidden"
        document.querySelectorAll(".post--item button")[index].style.visibility= "hidden"
     }
 
 })
 

