dynaLoad("a", ["b", "c"], function(b, c) {
  console.log("a are loaded with its depends")
  console.log(b.foo() + c.foo());
  return {
    foo: function() {
      return "I am a";
    }
  }
});
