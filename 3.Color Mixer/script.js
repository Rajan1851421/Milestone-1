

function colorMixer() {
    let col1 = document.getElementById('col1').value
    let col2 = document.getElementById('col2').value
    let res=document.getElementById('result')
    //let color1 = prompt("Enter the first color: ");
    //let color2 = prompt("Enter the second color: ");
    let resultingColor;

    switch (col1) {
        case "red":
            switch (col2) {
                case "blue":
                    resultingColor = "purple";
                    break;
                case "yellow":
                    resultingColor = "orange";
                    break;
                default:
                    resultingColor = "Invalid color combination";
                    break;
            }
            break;
        case "blue":
            switch (col2) {
                case "red":
                    resultingColor = "purple";
                    break;
                case "yellow":
                    resultingColor = "green";
                    break;
                default:
                    resultingColor = "Invalid color combination";
                    break;
            }
            break;
        case "yellow":
            switch (col2) {
                case "red":
                    resultingColor = "orange";
                    break;
                case "blue":
                    resultingColor = "green";
                    break;
                default:
                    resultingColor = "Invalid color combination";
                    break;
            }
            break;
        default:
            resultingColor = "Invalid color combination";
            break;
    }

    console.log(`Resulting color: ${resultingColor}`);
    res.innerText=resultingColor



}

