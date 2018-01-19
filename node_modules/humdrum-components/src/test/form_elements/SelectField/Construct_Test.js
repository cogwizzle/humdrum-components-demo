/**
  Test and documents the creation of an input select field.

  @author Joe Fehrman
  @since 01/02/2017
*/
QUnit.module("Construct");

QUnit.test("SelectField shall construct a selectbox and options.", function(assert){
  assert.expect(5);
  var inputDescription = {
    "id" : "name",
    "label" : "test",
    "type" : "select",
    "values" : [
      {"value" : "test", "label" : "y"},
      {"value" : "test2", "label" : "n"}
    ]
  };
  var html = new SelectField(inputDescription);
  var selectClass = html.className;
  var expectedSelectClass = "dynamic_select o-grid";
  assert.equal(selectClass, expectedSelectClass);
  var label = html.querySelector("label");
  var labelFor = label.getAttribute("for");
  var expectedLabelFor = "name";
  assert.equal(labelFor, expectedLabelFor);
  var inputs = html.querySelectorAll("option");
  var expectedLen = 2;
  assert.equal(inputs.length, expectedLen);
  var input = html.querySelector("option");
  var expectedValue = "test";
  assert.equal(input.value, expectedValue);
  var name = input.getAttribute("name");
  var expectedName = "name";
  assert.equal(name, expectedName);
});
