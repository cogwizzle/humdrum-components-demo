/**
  Test and documents the creation of an input password field.

  @author Joe Fehrman
  @since 11/14/2016
*/
QUnit.module("Construct");

QUnit.test("PasswordField shall construct a span a label and an input field.", function(assert){
  assert.expect(4);
  var inputDescription = {
    "id" : "name",
    "label" : "test",
    "type" : "password"
  };
  var html = new PasswordField(inputDescription);
  var spanClass = html.className;
  var expectedSpanClass = "dynamic_password o-grid";
  assert.equal(spanClass, expectedSpanClass);
  var label = html.querySelector("label");
  var labelFor = label.getAttribute("for");
  var expectedLabelFor = "name";
  assert.equal(labelFor, expectedLabelFor);
  var input = html.querySelector("input");
  var type = input.getAttribute("type");
  var expectedType = "password";
  assert.equal(type, expectedType);
  var id = input.getAttribute("id");
  var expectedId = "name";
  assert.equal(id, expectedId);
  var name = input.getAttribute("name");
  var expectedName = "name";
});
