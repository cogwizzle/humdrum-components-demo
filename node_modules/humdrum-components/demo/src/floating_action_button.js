import riot from 'riot';
import '../../src/floating_action_button.tag';
import 'font-awesome/css/font-awesome.min.css';

riot.mount("floating_action_button", {
  "press": () => {
    alert("Hello World!");
  },
  "background_color": "red",
  "icon_class" : "fa fa-address-book"
});
