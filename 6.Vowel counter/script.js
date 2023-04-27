function countVowels(){
    let show=document.getElementById('showResult')
    let name = document.getElementById('fullName').value
    const vowels = "aeiouAEIOU";
     let count=0
     for(let i=0; i<name.length; i++){
        if (vowels.indexOf(name[i]) !== -1) {
            count++;
        }
        show.innerText=count
     }
         
     

}



// const numVowels = countVowels();
// console.log(`${numVowels} vowels.`);




// function countVowels(a) {
//     console.log("clicked")

//     const vowels = "aeiouAEIOU";
//     let count = 0

//     for (let i = 0; i < a.length; i++) {
//         if (vowels.indexOf(a[i]) !== -1) {
//             count++;
//         }

//     }
//     return count;
// }
// const numVowels = countVowels(a);
// console.log(`${numVowels} vowels.`);







  //const name = "Rajan";



