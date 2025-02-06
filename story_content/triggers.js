function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67K5WTgfoBj":
        Script1();
        break;
      case "6SmSHjeFcJq":
        Script2();
        break;
      case "63tCplRV65D":
        Script3();
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
  const target = object('5qzMgtmPJc8');
const duration = 750;
const easing = 'ease-out';
const id = '5rZkcJtx5Wy';
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

window.Script3 = function()
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
