import riot from 'riot';
import '../../src/list_builder.tag';

riot.mount("list_builder", {
  selected_values : [{"value" : "1", "display" : "selected"}],
  unselected_values : [{"value" : "2", "display" : "not selected"}]
});
