function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60kyQ5ovrJa":
        Script1();
        break;
      case "6HFP6Q0n4u3":
        Script2();
        break;
      case "699M5dhuqx7":
        Script3();
        break;
      case "6q1zEURAvsK":
        Script4();
        break;
      case "6l9H5d8pBsi":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6SWAbKHmWWI');
const duration = 750;
const easing = 'ease-out';
const id = '5y44FwXF9Ir';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6SWAbKHmWWI');
const duration = 750;
const easing = 'ease-out';
const id = '6araIpCp0Ui';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('69MIJsUJCL9');
const duration = 750;
const easing = 'ease-out';
const id = '5y44FwXF9Ir';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('69MIJsUJCL9');
const duration = 750;
const easing = 'ease-out';
const id = '6araIpCp0Ui';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
