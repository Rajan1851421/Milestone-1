
const toggleText=()=>{
    const heading = document.getElementById('heading');
    if (heading.innerHTML === 'Hello') {
      heading.innerHTML = 'PW Skills';
      
    } else {
      heading.innerHTML = 'Hello';
      heading.innerText.style.color='red'
    }
}

