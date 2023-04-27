
function calculate(){
    let itemPrice1=document.getElementById("itemPrice1").value;
    let itemQuantity1=document.getElementById("itemQuantity1").value;
    let itemTotalPrice1=document.getElementById("itemTotalAmt1");
    let subtotal1=itemPrice1*itemQuantity1  
    itemTotalPrice1.innerText=subtotal1

    let itemPrice2=document.getElementById("itemPrice2").value;
    let itemQuantity2=document.getElementById("itemQuantity2").value;
    let itemTotalPrice2=document.getElementById("itemTotalAmt2");
    let subtotal2=itemPrice2*itemQuantity2  
    itemTotalPrice2.innerText=subtotal2

    
    let itemPrice3=document.getElementById("itemPrice3").value;
    let itemQuantity3=document.getElementById("itemQuantity3").value;
    let itemTotalPrice3=document.getElementById("itemTotalAmt3");
    let subtotal3=itemPrice3*itemQuantity3  
    itemTotalPrice3.innerText=subtotal3

    let itemPrice4=document.getElementById("itemPrice4").value;
    let itemQuantity4=document.getElementById("itemQuantity4").value;
    let itemTotalPrice4=document.getElementById("itemTotalAmt4");
    let subtotal4=itemPrice4*itemQuantity4  
    itemTotalPrice4.innerText=subtotal4

    
    let itemPrice5=document.getElementById("itemPrice5").value;
    let itemQuantity5=document.getElementById("itemQuantity5").value;
    let itemTotalPrice5=document.getElementById("itemTotalAmt5");
    let subtotal5=itemPrice5*itemQuantity5  
    itemTotalPrice5.innerText=subtotal5
    
    let itemPrice6=document.getElementById("itemPrice6").value;
    let itemQuantity6=document.getElementById("itemQuantity6").value;
    let itemTotalPrice6=document.getElementById("itemTotalAmt6");
    let subtotal6=itemPrice6*itemQuantity6  
    itemTotalPrice6.innerText=subtotal6

    let itemPrice7=document.getElementById("itemPrice7").value;
    let itemQuantity7=document.getElementById("itemQuantity7").value;
    let itemTotalPrice7=document.getElementById("itemTotalAmt7");
    let subtotal7=itemPrice7*itemQuantity7  
    itemTotalPrice7.innerText=subtotal7


    let itemPrice8=document.getElementById("itemPrice8").value;
    let itemQuantity8=document.getElementById("itemQuantity8").value;
    let itemTotalPrice8=document.getElementById("itemTotalAmt8");
    let subtotal8=itemPrice8*itemQuantity8  
    itemTotalPrice8.innerText=subtotal8


    let itemPrice9=document.getElementById("itemPrice9").value;
    let itemQuantity9=document.getElementById("itemQuantity9").value;
    let itemTotalPrice9=document.getElementById("itemTotalAmt9");
    let subtotal9=itemPrice9*itemQuantity9  
    itemTotalPrice9.innerText=subtotal9

    let itemPrice10=document.getElementById("itemPrice10").value;
    let itemQuantity10=document.getElementById("itemQuantity10").value;
    let itemTotalPrice10=document.getElementById("itemTotalAmt10");
    let subtotal10=itemPrice10*itemQuantity10  
    itemTotalPrice10.innerText=subtotal10


    let totalAmount=document.getElementById('totalAmount');
     let DiscountBill=document.getElementById('DiscountBill');
     
   
let allTotalAmt=subtotal1+subtotal2+subtotal3+subtotal3+subtotal4+subtotal5+subtotal6+subtotal7+subtotal8+subtotal9+subtotal10
totalAmount.innerText=`Rs.${allTotalAmt}`;
let Bdiscount=document.getElementById('Discount').value
 Bdiscount=Bdiscount/100;
 console.log(Bdiscount)
 console.log("D:",DiscountBill.innerText)
 let discountedPrice = allTotalAmt * (1 - Bdiscount);
 let saveAmt=allTotalAmt-discountedPrice
 DiscountBill.innerText=`Rs.${discountedPrice} \n Save(Rs.${saveAmt} )`
console.log(discountedPrice)
  

}

function DevideBill() {
  console.log('clicked DevideBill')
  let allTotalAmt=document.getElementById('totalAmount')
  console.log(allTotalAmt.innerText)
  let NOfPeople=document.getElementById('valueDevider').value
  console.log(NOfPeople)
  let ShareBill=document.getElementById('ShareBill')
  
  let AfterDevideAmount=DiscountBill.innerText/NOfPeople
  ShareBill.innerText=`${AfterDevideAmount} /Each`
  console.log(AfterDevideAmount)

  

}