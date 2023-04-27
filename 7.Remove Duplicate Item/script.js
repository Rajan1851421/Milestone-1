function addToCart0() {
    let result = document.getElementById('showRes')
    let item1 = document.getElementById('FItem').value
    let item2 = document.getElementById('SItem').value
    let item3 = document.getElementById('TItem').value
    let item4 = document.getElementById('FrItem').value
    let item5 = document.getElementById('FifItem').value
    let cart = Array.from([item1, item2, item3, item4, item5]);
    console.log(cart)

    const uniqueItems = [];
    cart.forEach(item => {
        if (!uniqueItems.includes(item)) {
            uniqueItems.push(item);
        }
    });
    result.innerText = `Your Selected Item is := ${uniqueItems}`
    console.log(uniqueItems)
    // return uniqueItems;
}




    function addToCart() {
        let ClShirt = document.getElementById('ClShirt').value
        let shirt = document.getElementById('shirt')
        document.getElementById('showResult').innerHTML = `Selectes Item ${ClShirt} and Quantity is ${shirt.value}`



        console.log(`${ClShirt} Quantity is ${shirt.value} `)

    }

    function addToCart1() {
        let ClPant = document.getElementById('ClPant').value
        let shirt = document.getElementById('pant')
        document.getElementById('showResult1').innerHTML = `Selected Item  ${ClPant} and Quantity is  ${pant.value}`


        console.log(`${ClPant} Quantity is ${shirt.value} `)

    }
    function addToCart2() {
        let ClLower = document.getElementById('ClLower').value
        let lower = document.getElementById('lower')
        document.getElementById('showResult2').innerHTML = `Selected Item  ${ClLower} and Quantity is ${lower.value}`


        console.log(`${ClLower} Quantity is ${lower.value} `)

    }
    console.log(`${ClLower} Quantity is ${lower.value} `)






