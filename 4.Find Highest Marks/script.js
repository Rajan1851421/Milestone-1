
function findhighNum() {
    let setResult=document.getElementById('highNum')

    let n1=document.getElementById('fristN').value
    let n2=document.getElementById('scondN').value
    let n3=document.getElementById('thisrdN').value
    let n4=document.getElementById('fourthN').value
    let n5=document.getElementById('FifthN').value


    let array = Array.from([n1, n2, n3,n4,n5]);
    let max=0
    for(let i=0;i<array.length;i++) {
        max = array[i] > max ? array[i] : max;
    }
    console.log(max);  
    setResult.innerText=max
   

    if (max >80) {
        setResult.style.color = "green";
      } else if (max > 60) {
        setResult.style.color = "yellow";
      } else {
        setResult.style.color = "red";
      }
      
     
    

  

}
