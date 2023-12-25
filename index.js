function loveCalculator(){
const yourName=document.getElementById('yourName').value.trim();
const partnerName=document.getElementById('partnerName').value.trim();

if(yourName==='' || partnerName==='')
{
    alert(`Please enter valid Name`);
    return;
}
const lovepercentage=calculatepercentage();
const result=document.getElementById('result');
result.innerHTML=
`<h4>Result for ${yourName} and ${partnerName}:</h4>;
<p>Your percentage is ${lovepercentage}%</p>`;
}

function calculatepercentage(){
    return Math.floor(Math.random()*101);
}

