onbeforeunload = function(){localStorage.x=1};

setTimeout(function(){
  while(1)location.reload(1)
}, 1000)
