
let link = document.querySelector(".info--user img").src
document.querySelector(".avatar img").src = link;

// su kien created

btnCreated.addEventListener("click",()=>{
    document.querySelector(".created").style.display = "block"
    document.querySelector(".saved").style.display = "none"
});
btnSaved.addEventListener("click",()=>{
    document.querySelector(".saved").style.display = "block"
    document.querySelector(".created").style.display = "none"
});


btnSetting.addEventListener("click",()=>{
    window.location.href = "/user/edit-profile"
})