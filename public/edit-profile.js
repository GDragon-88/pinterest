



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
    console.log(1);
    const socket = io("http://localhost:3000/user/edit-profile");
    let file = uploadFile.files[0]
    let formData = new FormData();
        formData.append('avatar', file);
       console.log(file);
       socket.emit("Client-sent-data", {data:"day la io"})
       fetch("/user/edit-profile",{
        method:"POST",
        body:formData, 
    })
})
