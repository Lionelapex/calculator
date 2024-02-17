const toggleElements=document.querySelectorAll("button.themebtn")


// all elements for that will change for the toggle
const mainBackground=document.querySelector("main") 
const themeSEction=document.querySelector("div.theme-section")
const screenBackground=document.querySelector("div.screen")
const keypadBackground=document.querySelector("div.keypad-background")
const toggleContainer=document.querySelector("div.toggle-container")
const tittle=document.querySelector("h1.tittle")

const themeName=document.querySelector("span.themeName")


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
resetBtn.style=" font-weight: 700;  background-color: hsl(225, 21%, 49%)"
equalBTn.style=" font-weight: 700; background-color:hsl(6, 63%, 50%);"


   
//  hover states for the del . equal, reset buttons




//   theme toggles 
 const[theme1Toggle,theme2Toggle,theme3Toggle]=toggleElements

   theme1Toggle.addEventListener("click",()=>{
    // toggle styling
    theme1Toggle.style="background-color:  hsl(223, 31%, 20%);"
    theme2Toggle.style="background-color: black;"
    theme3Toggle.style="background-color: black;"

     //  changing elements event 
     mainBackground.style="  background-color: hsl(222, 26%, 31%);"
     themeSEction.style=" background-color: hsl(222, 26%, 31%);"
     title.style="color:white;"
     themeName.style="color:white"
     screenBackground.style="background-color: hsl(224, 36%, 15%); color:white;"
     keypadBackground.style=" background-color:  hsl(223, 31%, 20%);"
     toggleContainer.style="background-color:black; border:none; border-radius: 3rem;"

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
resetBtn.style=" font-weight: 700;  background-color: hsl(225, 21%, 49%)"
equalBTn.style=" font-weight: 700; background-color:hsl(6, 63%, 50%);"


   
    })

    //  theme 2
    theme2Toggle.addEventListener("click",()=>{
        //toggle styling
        theme1Toggle.style="background-color:hsl(0, 5%, 81%)"
        theme2Toggle.style="background-color: hsl(25, 98%, 40%)"
        theme3Toggle.style="background-color:hsl(0, 5%, 81%)"

        //  changing elements event 
        mainBackground.style="background-color:hsl(0, 0%, 90%) "
        themeSEction.style="background-color:hsl(0, 0%, 90%) "
        title.style="color:black;"
        themeName.style="color:black"
        screenBackground.style="background-color: hsl(0, 0%, 93%); color:black;"
        keypadBackground.style="background-color:hsl(0, 5%, 81%)"
        toggleContainer.style="background-color:hsl(0, 5%, 81%); border:none; border-radius: 3rem;"
//  buttons
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
deleteBtn.style="  font-weight: 700;background-color: hsl(185, 42%, 37%);"
resetBtn.style=" font-weight: 700;  background-color: hsl(185, 42%, 37%); color:white"
equalBTn.style=" font-weight: 700; background-color:hsl(25, 98%, 40%); color:white"


   
        
    })
    // theme 3

    theme3Toggle.addEventListener("click",()=>{
        theme1Toggle.style="background-color: black;"
        theme2Toggle.style="background-color: black;"
        theme3Toggle.style="background-color: hsl(268, 71%, 12%)"
    })
