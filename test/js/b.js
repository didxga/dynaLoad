dynaLoad("b", ["d"], function(d) {
  console.log("b are loaded with its depends")
  console.log(d.foo());
  return {
    foo: function() {
      return "I am b";
    }
  }
});
