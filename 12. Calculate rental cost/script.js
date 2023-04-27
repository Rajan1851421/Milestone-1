const handleCalculate=()=>{
    let sleeperClass=document.getElementById('class').value
    console.log(sleeperClass)
    let days=document.getElementById('day').value
    console.log(days)
    let calculateAmount=sleeperClass*days
    console.log(calculateAmount)
    let FinalAmount=document.getElementById('amount')
    FinalAmount.innerText=`Payble Amount Is : ${calculateAmount} , Booked For : ${days} days `
    

}
const HandleRate=()=>{
alert(' Economy=4,000/Day\n MidSize=10,000/Day\n Luxury=20,000/Day ')
}