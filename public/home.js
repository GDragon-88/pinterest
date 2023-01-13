
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
    window.location.href = "/home"
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
        setTimeout(()=>{
            document.querySelectorAll(".post--item p")[index].style.visibility= "hidden"
            document.querySelectorAll(".fa-arrow-up-from-bracket")[index].style.visibility= "hidden"
            document.querySelectorAll(".fa-ellipsis")[index].style.visibility= "hidden"
            document.querySelectorAll(".post--item button")[index].style.visibility= "hidden"
        },1500)
     }
 })

postItem.addEventListener("click",(e)=>{
   
    if(e.target.classList.contains("image")){
        let index = e.target.dataset.index;
        let postID = document.getElementsByClassName("post--item")
        let blogId = postID[index].id
        window.location.href = `/blog/detail/${blogId}`
    }
    
})
// su kien save 
postItem.addEventListener("click",(e)=>{
    if(e.target.classList.contains("save")){
        let index = e.target.dataset.save;
        let id = document.querySelectorAll(".post--item")[index].id
        fetch(`blog/collection/${id}`,{
            method:"POST"
        })
    }
})

// su kien click avart
let avarta = document.querySelector(".avatar")
avarta.addEventListener("click",()=>{
    let mail = avarta.id.split('@')[0]
    window.location.href =`user/infor/${mail}`
}) 
 

