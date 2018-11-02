(function(context){

  //a map to store all loaded modules
  var modules = {};
  //stack to remember where module parsing work was left, we need this due to we are loading modules asynchrously
  var stack = [];

  var root = "/js/"

  function dynaLoad(name, depends, func) {
    let dep = [];
    for(var i=0, l=depends.length; i<l; i++) {
      var elem = depends[i];
      if(!modules[elem]) {
        stack.push({name:name, depends:depends, func:func});
        loadDep(elem);
        return;
      }
      dep.push(modules[elem]);
    }
    modules[name] = func.apply(this, dep);
    var elem = stack.pop();
    if(elem) {
      dynaLoad(elem.name, elem.depends, elem.func);
    }
  }

  function loadDep(m) {
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', root + m + ".js");
    document.head.appendChild(scriptTag);
  }

  context.dynaLoad = dynaLoad;
})(this);
