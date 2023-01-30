const socket = io()


let url = document.querySelector(".input img").src
document.querySelector(".avatar img").src = url

inputComment.addEventListener("focus",()=>{
   btnCancel.style.visibility = "visible";
   btnSend.style.visibility = "visible";
})
btnCancel.addEventListener("click",()=>{
    btnCancel.style.visibility = "hidden";
   btnSend.style.visibility = "hidden";
})
 
socket.on("broadcast" ,(mess)=>{
    console.log(mess);
    let div = document.createElement("div")
    let name = document.querySelector(".input img").id
    console.log(name);
    div.classList.add("text-comment")
    div.innerHTML=`<div class="user-comment">
    <img src="${url}" alt="">
    <span class="user">${name}</span>
    <span id="<%= value[i].commentID%>" class="text--comment" >${mess}</span>
</div>
<div class="response">
    <small>1d</small> 
    <small>response</small> 
    <small><i class="fa-regular fa-heart" ></i> 0</small> 
    <small><i class="fa-solid fa-ellipsis"></i></small>
</div>`
    document.querySelector(".comment").appendChild(div)
}) 
//su kien gui binh luan
btnSend.addEventListener("click",()=>{
    let commentText = inputComment.value;
    socket.emit('broadcast', commentText);
    fetch(window.location.href,{
        method:"POST",
        body:JSON.stringify({comment:commentText}),
        headers:{ "Content-type": "application/json; charset=UTF-8"}
    }).then(res=>res.json())
    .then((data)=>{
        inputComment.value = ""
    }) 
})

// su ken click trai tim 
let comment = document.getElementsByClassName("comment");
comment[0].addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("fa-heart")){
        e.target.classList.remove('fa-regular');
        e.target.classList.add("fa-solid");
        e.target.style.color = "pink"
    }
})

// click nut save
btnSave.addEventListener("click",()=>{
    let href = window.location.href
    let blogId = href.substring(34)
    fetch(`/blog/collection/${blogId}`,{
        method:"POST"
    })

})