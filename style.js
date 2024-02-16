const toggleElements=document.querySelectorAll("button.themebtn")



// buttons 
const [SevenBtn,eightBtn,nineBtn,deleteBtn,fourBtn,fiveBtn,sixBtn,addBtn,oneBtn,twoBtn,threeBtn,subtractBtn,periodBtn,zeroBtn,dividebtn,multiplyBtn,resetBtn,equalBTn]=document.querySelectorAll("button.btn")
console.log(periodBtn.innerHTML)

// applying  styles
zeroBtn.style=" font-weight: 700;background-color: hsl(30, 25%, 89%)"
oneBtn.style=" font-weight: 700; background-color: hsl(30, 25%, 89%)"
twoBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
threeBtn.style=" font-weight: 700; background-color: hsl(30, 25%, 89%)"
fourBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
fiveBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
sixBtn.style=" font-weight: 700; background-color: hsl(30, 25%, 89%)"
SevenBtn.style=" font-weight: 700; background-color: hsl(30, 25%, 89%)"
eightBtn.style=" font-weight: 700; background-color: hsl(30, 25%, 89%)"
nineBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
addBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
subtractBtn.style=" font-weight: 700; background-color: hsl(30, 25%, 89%)"
multiplyBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
dividebtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
periodBtn.style="  font-weight: 700;background-color: hsl(30, 25%, 89%)"
// delete buttons
deleteBtn.style="  font-weight: 700;background-color: hsl(225, 21%, 49%);"
resetBtn.style=" font-weight: 700; background-color: background-color: background-color: hsl(225, 21%, 49%)"
equalBTn.style=" font-weight: 700; background-color:hsl(6, 63%, 50%);"


   
//  hover states for the del . equal, reset buttons
 resetBtn.addEventListener("mouseover",()=>{
     resetBtn.style=" background-color: hsl(225, 21%, 49%)"
    
  
 })
 deleteBtn.addEventListener("mouseover",()=>{
    deleteBtn.style=" background-color: hsl(225, 21%, 49%)"
   
 
})
eightBtn.addEventListener("mouseover",()=>{
    eightBtn.style=" background-color: hsl(225, 21%, 49%)"
   
 
})
//  











//   theme toggles 
 const[theme1Toggle,theme2Toggle,theme3Toggle]=toggleElements

   theme1Toggle.addEventListener("click",()=>{
    // toggle styling
    theme1Toggle.style="background-color: rgb(9, 82, 82);"
    theme2Toggle.style="background-color: black;"
    theme3Toggle.style="background-color: black;"
   
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
