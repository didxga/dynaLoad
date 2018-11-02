dynaLoad("c", ["d"], function(d) {
  console.log("c are loaded with its depends")
  console.log(d.foo());
  return {
    foo: function() {
      return "I am c";
    }
  }
});
