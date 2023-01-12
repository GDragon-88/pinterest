
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