console.log(1);
inputComment.addEventListener("focus",()=>{
   btnCancel.style.visibility = "visible";
   btnSend.style.visibility = "visible";
})
btnCancel.addEventListener("click",()=>{
    btnCancel.style.visibility = "hidden";
   btnSend.style.visibility = "hidden";
})
 

//su kien gui binh luan
btnSend.addEventListener("click",()=>{
    let commentText = inputComment.value;
    console.log(window.location.href);
    console.log(commentText);
    fetch(window.location.href,{
        method:"POST",
        body:JSON.stringify({comment:commentText}),
        headers:{ "Content-type": "application/json; charset=UTF-8"}
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data);
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