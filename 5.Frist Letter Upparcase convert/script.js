


function capitalizeName() {
    let name1 =document.getElementById('fname').value;
    let name2 =document.getElementById('Lname').value;
    


    let fname= name1.charAt(0).toLowerCase() === name1.charAt(0) ? name1.charAt(0).toUpperCase() + name1.slice(1) : name1;
    let Lname= name2.charAt(0).toLowerCase() === name2.charAt(0) ? name2.charAt(0).toUpperCase() + name2.slice(1) : name2;
 console.log(fname)
 console.log(Lname)
 document.getElementById("showName").innerText = `${fname} ${Lname}`;


 
  
  }
 

  




