function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var yearFuture =now.getYear() + parseInt(years);

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Alert function
function alertAmount()
{
    var amount = document.getElementById("principal").value;
    if (amount == null)
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