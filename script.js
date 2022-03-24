//This function is used to present the information what was selected and to calculate the amount
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var yearFuture =parseInt(document.getElementById('years').value)+new Date().getFullYear();
    document.getElementById('result').innerHTML='If you deposit <mark>'+principal+',</mark>\<br\>at an interest rate of <mark>'+rate+'</mark>%\<br\>You will receive an amount of <mark>'+interest+'</mark>,\<br\>in the year '+yearFuture;
}
//Get rate function
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Alert function to test if the amount field is empty or <=0
function alertAmount()
{
    var amount = document.getElementById("principal").value;
    if (amount == "")
      {
        alert("Please select a value!");
        document.getElementById("principal").focus();
      } 
    else if(amount <=0)
     { alert("Please select a pozitive value!");
     document.getElementById("principal").focus();
     }  
    return;

}