let dateObj = new Date();

const myTimer = function (date) 
{
    var date = document.getElementById("date");
    date.innerHTML = dateObj.toLocaleDateString();
}
  
myTimer();
setInterval(myTimer, 1000);