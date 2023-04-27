const RandomNumber =()=>{
    let ShowNumber=document.getElementById('ShowNumber')
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
    ShowNumber.innerText=randomNumber

}
const Resetnumber =()=>{
    let ShowNumber=document.getElementById('ShowNumber')
    let number=0
    ShowNumber.innerText=number

}