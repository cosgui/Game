var started = false;
function ConstantConvert(){
  if (started == false){
    //var Silver = document.getElementById('silver').value
  // if(Silver >= 1000){
  //   Silver = Silver - 1000;
  //}
    setInterval(function() { 
     var Bronze = document.getElementById('bronze').value
      if(Bronze >= 1000){
       Bronze = Bronze - 1000;
       document.getElementById('bronze').value = Bronze;
       var Silver = document.getElementById('silver').value
       Silver++;
       document.getElementById('silver').value = Silver;
      }
    }, 100);
    started = true;
    return started;
  }
}

function BuyAutoMineBronze(){
  if(document.getElementById('silver').value >= 100){
    cost = 100
    total = document.getElementById('silver').value - cost
    document.getElementById('silver').value = total
    AutoMineBronze()
    minerCount = document.getElementById('AutoMinerCount').value
    minerCount++;
    document.getElementById('AutoMinerCount').value = minerCount
  }
  else
  {
    document.getElementById('output').value = "Not enough money";
  }
}
function AutoMineBronze(toggled){
  setInterval(function() { 
    var value = parseInt(document.getElementById('bronze').value, 10);
    value++;
    document.getElementById('bronze').value = value;
   }, 1000);
}

var SilverUnlocked = false;
function CheckBalance()
{
  var value = parseInt(document.getElementById('bronze').value, 10);
  if (value > 1000 && SilverUnlocked == false)
  {
    document.getElementById('silver').style.visibility = "visible";
    document.getElementById('silvertext').style.visibility = "visible";
    document.getElementById('MineSilver').style.visibility = "visible";
    document.getElementById('output').value = "Silver Unlocked";
    SilverUnlocked = true;
  }
  if (value >= 1000)
  {
    var fullnum = Math.round(value/1000)
    var trailnum = value%1000
    document.getElementById('bronze').value = trailnum;
    SilverIncrement()
  }
}
function BronzeIncrement()
{
  var value = parseInt(document.getElementById('bronze').value, 10);
  if (document.getElementById('bigMine').style.visibility == "hidden")
  {
    if (value == 9)
    {
      value = 0
      document.getElementById('bigMine').style.visibility = "visible";
      document.getElementById('output').value = "Big Mine Unlocked";
      
    }
  }
  if (document.getElementById('silver').style.visibility == "hidden")
  {
    if (document.getElementById('bronze').value == 1000)
    {
      value = 0
      document.getElementById('MineSilver').style.visibility = "visible";
      SilverUnlocked = true
    }
  }
  value++;
  document.getElementById('bronze').value = value;
  CheckBalance();
  ConstantConvert();
}

function BigMine()
{
  if (document.getElementById('bronze').value > 3000)
  {
    document.getElementById('bigMine').value = "Broken :(";
  }
  else
  {
    var value = document.getElementById('bronze').value;
    var cost = value * 0.5
    document.getElementById('bronze').value = value - cost;
    var clicks;
    var stopClicks = 10;
    for (clicks = 0; clicks < stopClicks; clicks++)
    {
      document.getElementById('bronze').value = Math.round(value * 2)
    }
  }
  CheckBalance();
}
function SilverIncrement()
{
  var value = parseInt(document.getElementById('silver').value, 10);
  if (document.getElementById('bigMineSilver').style.visibility == "hidden")
  {
    if (value == 9)
    {
      value = 0
      document.getElementById('bigMineSilver').style.visibility = "visible";
      document.getElementById('output').value = "Big Mine Unlocked";
    }
  }
  value++;
  document.getElementById('silver').value = value;
  CheckBalance();
}
function BigMineSilver()
{
  if (document.getElementById('silver').value > 850)
  {
    document.getElementById('AutoMineBronze').style.visibility = "visible";
    document.getElementById('AutoMinerCount').style.visibility = "visible";
  }
  else
  {
    var value = document.getElementById('silver').value;
    var cost = value * 0.5
    document.getElementById('silver').value = value - cost;
    var clicks;
    var stopClicks = 10;
    for (clicks = 0; clicks < stopClicks; clicks++)
    {
      document.getElementById('silver').value = Math.round(value * 2)
    }
  }
  CheckBalance();
}
