import riot from 'riot';
import 'humdrum-components/src/login.tag';

riot.mount("login", {
  on_submit : () => {alert("Submitted.")},
  on_request: () => {alert("Requested.")}
});
