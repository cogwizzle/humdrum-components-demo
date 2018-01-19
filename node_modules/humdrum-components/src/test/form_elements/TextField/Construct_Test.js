/**
  Test and documents the creation of an input text field.

  @author Joe Fehrman
  @since 11/14/2016
*/
QUnit.module("Construct");

QUnit.test("TextField shall construct a span a label and an input field.", function(assert){
  assert.expect(4);
  var inputDescription = {
    "id" : "name",
    "label" : "test",
    "type" : "text"
  };
  var html = new TextField(inputDescription);
  var spanClass = html.className;
  var expectedSpanClass = "dynamic_text o-grid";
  assert.equal(spanClass, expectedSpanClass);
  var label = html.querySelector("label");
  var labelFor = label.getAttribute("for");
  var expectedLabelFor = "name";
  assert.equal(labelFor, expectedLabelFor);
  var input = html.querySelector("input");
  var type = input.getAttribute("type");
  var expectedType = "text";
  assert.equal(type, expectedType);
  var id = input.getAttribute("id");
  var expectedId = "name";
  assert.equal(id, expectedId);
  var name = input.getAttribute("name");
  var expectedName = "name";
});
