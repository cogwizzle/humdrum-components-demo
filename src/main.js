import riot from 'riot';
import 'humdrum-components/src/table_list.tag';
import 'humdrum-components/src/header_nav.tag';

function clickEvent(event){
  let componentName = event.item.row.Name;
  let uri = './' + componentName.toLowerCase().replace(/ /g, '_') + '/';
  window.location = uri;
}

// Mount the element to the page.
riot.mount('table_list', {
  data : [
    {"Name" : "Dynamic Form", "Description" : "Dynamic form build from input descriptions."},
    {"Name" : "Floating Action Button", "Description" : "Floating action button that sits in the bottom right corner."},
    {"Name" : "Header Nav", "Description" : "Header and Navigation component."},
    {"Name" : "Login", "Description" : "Login component"},
    {"Name" : "Table List", "Description" : "Generic way of showing JSON data."},
  ],
  rowClick : clickEvent
});

riot.mount('header_nav',{
  page_heading : "DEMO"  // The title of the page
});
