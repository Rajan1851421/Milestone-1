


const HandleCredit = () => {
    let checkBalance = document.getElementById('currentBalance').value;
    let credit = document.getElementById('credit').value;
    document.getElementById('creditBal').innerText=credit


    if (checkBalance >= 1000) {
        let currentBalance = document.getElementById('currentBalance').value
        let CopyCureentBalance = document.getElementById('currentBalance')
        let credit = document.getElementById('credit').value;
        currentBalance = Number(currentBalance) + Number(credit);
        CopyCureentBalance.value=`${currentBalance}`

    }
    else{
        let currentBalance = document.getElementById('currentBalance').value
        let CopyCureentBalance = document.getElementById('currentBalance')
        let credit = document.getElementById('credit').value;
        currentBalance = Number(currentBalance) + Number(credit);
        CopyCureentBalance.value=`${currentBalance}`
    }



}

const HandleDebit = () => {
    
    
    let checkBalance = document.getElementById('currentBalance').value;
    let debit = document.getElementById('debit').value;
    document.getElementById('debitBal').innerText=debit
    



    if (checkBalance <= 1000) {
        let currentBalance = document.getElementById('currentBalance').value
        let CopyCureentBalance = document.getElementById('currentBalance')

        let debit=document.getElementById('debit').value
        currentBalance = Number(currentBalance) - Number(debit);
        CopyCureentBalance.value=`${currentBalance}`
        

    } else {
        let currentBalance = document.getElementById('currentBalance').value
        let CopyCureentBalance = document.getElementById('currentBalance')

        let debit=document.getElementById('debit').value
        currentBalance = Number(currentBalance) - Number(debit);

        CopyCureentBalance.value=`${currentBalance}`
        
       


    }

    


}