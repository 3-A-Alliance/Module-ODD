function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gvVqBZBcEd":
        Script1();
        break;
      case "6XPHYN5bEM6":
        Script2();
        break;
      case "6KSPS5yv3ft":
        Script3();
        break;
      case "5vt7hG5OZzW":
        Script4();
        break;
      case "5lWvYAsRQHA":
        Script5();
        break;
      case "6TMWFxkaUuZ":
        Script6();
        break;
      case "5tpodTfdYSi":
        Script7();
        break;
      case "6pz1CXUUWCB":
        Script8();
        break;
      case "64FeSnyBChR":
        Script9();
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
