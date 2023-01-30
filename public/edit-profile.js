

document.querySelector(".avatar img" ).src =document.querySelector(".information-avatar img").src

btnChange.addEventListener("click",()=>{
    document.querySelector(".input-avartar").style.display = "block"
    document.querySelector("body").style.overflow = "hidden"
    document.addEventListener("mouseup",(e)=>{
        if(!document.querySelector(".select-file").contains(e.target)){
            document.querySelector(".input-avartar").style.display = "none"
            document.querySelector("body").style.overflow = "visible"
        }
        })
})

//  su kien fecth anh anvatar
uploadFile.addEventListener("input",()=>{
    let file = uploadFile.files[0]
    let formData = new FormData();
        formData.append('avatar', file);
       fetch("/user/edit-profile",{
        method:"POST",
        body:formData, 
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data);
        document.querySelector(".information-avatar img").src = `/${data.url}`
        document.querySelector(".input-avartar").style.display = "none"
        document.querySelector("body").style.overflow = "visible"
    })
})


