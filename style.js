const buttons=document.querySelectorAll("button.themebtn")
const keyButtons=document.querySelectorAll("button.btns")
const blueButtons=document.querySelectorAll(".del-btn,.reset-btn")
const equalButton=document.querySelector("button.equal-btn")

equalButton.style="background-color:hsl(6, 63%, 50%)"
// colors

window.addEventListener("mouseover", function() {
    // code to be executed when the mouseover event occurs
    keyButtons.forEach(btn=>{
        btn.style=" background-color: hsl(30, 25%, 89%)"
        
    })
  });


blueButtons.forEach(btn=>{
    btn.style=" background-color: hsl(225, 21%, 49%);"
})









//   toggle evnet listeners
 const[btn1,btn2,btn3]=buttons

   btn1.addEventListener("click",()=>{
    btn1.style="background-color: rgb(9, 82, 82);"
    btn2.style="background-color: black;"
    btn3.style="background-color: black;"
   
    })

    btn2.addEventListener("click",()=>{
        btn1.style="background-color: black;"
        btn2.style="background-color: rgb(9, 82, 82);"
        btn3.style="background-color: black;"
    })

    btn3.addEventListener("click",()=>{
        btn1.style="background-color: black;"
        btn2.style="background-color: black;"
        btn3.style="background-color: rgb(196, 71, 13);"
    })
