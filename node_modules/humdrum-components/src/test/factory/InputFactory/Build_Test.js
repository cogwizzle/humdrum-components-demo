/**
  Test and documents InputFactory.
  // TODO Rewrite test to reflect changes in code.

  @author Joe Fehrman
  @since 11/12/2016
*/
QUnit.module("Build");

QUnit.test("InputFactory shall take a JSON description of a text field and create a text input.", function(assert){
  var factory = new InputFactory();
  var input = {"type":"text", "id":"name"};
  var results = factory.build(input);
  var expectedResults = new TextField(input);
  assert.deepEqual(results, expectedResults);
});

QUnit.test("InputFactory shall take a JSON description of a textarea field and create a textarea.", function(assert){
  var factory = new InputFactory();
  var input = {"type":"textarea", "id":"name"};
  var results = factory.build(input);
  var expectedResults = new TextAreaField(input);
  assert.deepEqual(results, expectedResults);
});

QUnit.test("InputFactory shall take a JSON description of a password field and create a password field.", function(assert){
  var factory = new InputFactory();
  var input = {"type":"password", "id":"name"};
  var results = factory.build(input);
  var expectedResults = new PasswordField(input);
  assert.deepEqual(results, expectedResults);
});

QUnit.test("InputFactory shall take a JSON description of a checkbox field and create a checkbox field.", function(assert){
  var factory = new InputFactory();
  var input = {"type":"checkbox", "id":"name", "values" : ["test", "test2"]};
  var results = factory.build(input);
  assert.ok(results); // Checkbox DOM elements are not comparable.
});

QUnit.test("InputFactory shall take a JSON description of a select field and create option fields.", function(assert){
  var factory = new InputFactory();
  var input = {
    "id" : "name",
    "label" : "test",
    "type" : "select",
    "values" : [
      {"value" : "test", "label" : "y"},
      {"value" : "test2", "label" : "n"}
    ]
  };
  var results = factory.build(input);
  var expectedResults = new SelectField(input);
  assert.deepEqual(results, expectedResults);
});
