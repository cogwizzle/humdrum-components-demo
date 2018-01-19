/**
  Test and documents the creation of an input check field.

  @author Joe Fehrman
  @since 11/14/2016
*/
QUnit.module("Construct");

QUnit.test("CheckField shall construct a span a label and an input field.", function(assert){
  assert.expect(6);
  var inputDescription = {
    "id" : "name",
    "label" : "test",
    "type" : "checkbox",
    "values" : [
      {"value" : "test", "label" : "y"},
      {"value" : "test2", "label" : "n"}
    ]
  };
  var html = new CheckField(inputDescription);
  var spanClass = html.className;
  var expectedSpanClass = "dynamic_check o-grid";
  assert.equal(spanClass, expectedSpanClass);
  var label = html.querySelector("label");
  var labelFor = label.getAttribute("for");
  var expectedLabelFor = "name";
  assert.equal(labelFor, expectedLabelFor);
  var inputs = html.querySelectorAll("input");
  var expectedLen = 2;
  assert.equal(inputs.length, expectedLen);
  var input = html.querySelector("input");
  var type = input.getAttribute("type");
  var expectedType = "checkbox";
  var expectedValue = "test";
  assert.equal(input.value, expectedValue);
  assert.equal(type, expectedType);
  var name = input.getAttribute("name");
  var expectedName = "name";
  assert.equal(name, expectedName);
});
