/**
  Test and documents the creation of an input text_area field.

  @author Joe Fehrman
  @since 11/14/2016
*/
QUnit.module("Construct");

QUnit.test("TextAreaField shall construct a span a label and an input field.", function(assert){
  assert.expect(3);
  var inputDescription = {
    "id" : "name",
    "label" : "test",
    "type" : "textarea"
  };
  var html = new TextAreaField(inputDescription);
  var spanClass = html.className;
  var expectedSpanClass = "dynamic_textarea o-grid";
  assert.equal(spanClass, expectedSpanClass);
  var label = html.querySelector("label");
  var labelFor = label.getAttribute("for");
  var expectedLabelFor = "name";
  assert.equal(labelFor, expectedLabelFor);
  var input = html.querySelector("textarea");
  var id = input.getAttribute("id");
  var expectedId = "name";
  assert.equal(id, expectedId);
  var name = input.getAttribute("name");
  var expectedName = "name";
});
