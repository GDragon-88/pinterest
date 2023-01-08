
let create = document.querySelector('.dropbtn');
create.addEventListener("click",()=>{
   
    if(document.querySelector(".dropdown-content").style.display == "none"){
        document.querySelector(".dropdown-content").style.display = "block"
    }else{
        document.querySelector(".dropdown-content").style.display = "none"
    }
})
// su kien click nut home
let home = document.querySelector(".home button")
home.addEventListener("click",()=>{
    window.location.href = "http://localhost:3000/home"
});
// su kien click create 
btnCreate.addEventListener("click",()=>{
    main.style.visibility = "visible"
    document.querySelector("body").style.overflow = "hidden"
})
// su kien an main
back.addEventListener("click" ,()=>{
    main.style.visibility = "hidden"
    document.querySelector("body").style.overflow = "visible";
})

// su kien upfile anh 
upFile.addEventListener("input",()=>{
    let file = upFile.files[0]
    var img = new FormData()
        img.append('loadImage', file, file.name)
    fetch("http://localhost:3000/upload",{
        method:"POST",
        body:img,
        // headers:{'Content-Type':'multipart/form-data'}
        
    }).then(async(res)=>{
        console.log(await res.json());
    })

      


})