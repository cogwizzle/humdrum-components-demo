import riot from 'riot';
import 'humdrum-components/src/table_list.tag';

function clickEvent(event){
  alert(event.item.row.uri);
}

// Mount the element to the page.
riot.mount('table_list', {
  data : [
    {"uri" : "http://www.google.com", "text" : "The Google"},
    {"uri" : "http://www.yahoo.com", "text" : "Yahoo!", "test" : "test"}
  ],
  rowClick : clickEvent
});
