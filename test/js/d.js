dynaLoad("d", [], function() {
  console.log("d are loaded")
  return {
    foo: function() {
      return "I am d";
    }
  }
});
