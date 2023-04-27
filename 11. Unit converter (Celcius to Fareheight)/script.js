const UnitConverter =()=>{
    let cel=document.getElementById('celsius').value
    //let cel=3
    let result=(cel*9/5)+32
    console.log(`${result}F`)
    document.getElementById('fahrenheit').value=result;

}