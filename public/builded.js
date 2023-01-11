
checkbox.addEventListener("click",()=>{
    if(checkbox.checked==true){
        document.querySelector(".container label").style. backgroundColor = "black"
    }else{
        document.querySelector(".container label").style. backgroundColor = "#BDB9A6"
    }

})

// su kien  publish san pham 
btnPublish.addEventListener("click",()=>{
   let dataBlog ={
    titleBlog : title.value,
    fieldBlog : field.value,
    alowNotComment :checkbox.checked,
    descriptionBlog :description.value,
    url:path.src
   }
    console.log(dataBlog);
    fetch("http://localhost:3000/creat-blog",{
        method:"POST",
        body:JSON.stringify(dataBlog),
        headers:{'Content-Type': 'application/json'}
    }).then((res)=>{
       return res.json()
    }).then((data)=>{
        console.log(data);
        if (data.mess =="successs!!"){
            window.location.href ="http://localhost:3000/home"
        }
    })
})