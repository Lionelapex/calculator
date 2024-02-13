const buttons=document.querySelectorAll("button.themebtn")

buttons.forEach(button=>{
    const[btn1,btn2,btn3]=buttons

   btn1.addEventListener("click",()=>{
    btn1.style="background-color: rgb(196, 71, 13);"
    btn2.style="background-color: black;"
    btn3.style="background-color: black;"
   
    })

    btn2.addEventListener("click",()=>{
        btn1.style="background-color: black;"
        btn2.style="background-color: rgb(196, 71, 13);"
        btn3.style="background-color: black;"
    })

    btn3.addEventListener("click",()=>{
        btn1.style="background-color: black;"
        btn2.style="background-color: black;"
        btn3.style="background-color: rgb(196, 71, 13);"
    })
})