dynaLoad("index", ["a"], function(a) {
  console.log("index are loaded with its depends")
  console.log(a.foo());
  return {
    foo: function() {
      return "I am index";
    }
  }
});
