function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// handle blue button click by setting function name
const blueButton = document.getElementById('mske-blue-button');
       // just set the name of the full name
       blueButton.onClick = makeBlue;
       
       function makeBlue() {
           document.body.style.backgroundColor = 'blue';
       }
       console.log(blueButton);