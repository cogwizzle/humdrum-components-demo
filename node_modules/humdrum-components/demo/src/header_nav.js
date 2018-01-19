import riot from 'riot';
import '../../src/header_nav.tag';

riot.mount('header_nav',{
  page_heading : "DEMO",  // The title of the page
  links : [
    {"uri" : "http://www.google.com", "text" : "The Google"}, // Navigation links that will appear on the page.
    {"uri" : "http://www.yahoo.com", "text" : "Yahoo!"},
    {"uri" : "#hash", "text" : "Hash"}
  ]
});
