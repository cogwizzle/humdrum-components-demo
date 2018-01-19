import riot from 'riot';
import 'humdrum-components/src/dynamic_form.tag';

var inputDescriptions = [
  {
    "id" : "1",
    "label" : "checkbox",
    "type" : "checkbox",
    "values" : [
      {"value" : "test", "label" : "y"},
      {"value" : "test2", "label" : "n"}
    ]
  },
  {
    "id" : "2",
    "label" : "password",
    "type" : "password"
  },
  {
    "id" : "3",
    "label" : "select",
    "type" : "select",
    "values" : [
      {"value" : "test", "label" : "y"},
      {"value" : "test2", "label" : "n"}
    ]
  },
  {
    "id" : "4",
    "label" : "textarea",
    "type" : "textarea"
  },
  {
    "id" : "name",
    "label" : "test",
    "type" : "text"
  }];

riot.mount("dynamic_form", {"input_descriptions" : inputDescriptions, "id" : "formId", "action" : "testActin", "method" : "testMethod", "submit" : true});
