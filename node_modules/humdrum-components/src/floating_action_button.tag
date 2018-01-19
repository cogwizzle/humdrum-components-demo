<floating_action_button>
  <div class="floating_popout bottom-right">
    <div class="floating_action_button" onclick="{actionEvent}" style="background-color:{bgColor}">
      <i class="icon {iconClass}"></i>
    </div>
  </div>
  
  <script>
    import riot from 'riot';
    import 'blaze/dist/blaze.min.css';

    let component = this;

    component.actionEvent = opts.press;
    component.bgColor = "black";

    if(opts.background_color){

      component.bgColor = opts.background_color;
    }

    component.iconClass = opts.icon_class;
  </script>
  
  <style>
    .floating_action_button{
      display : inline-block;
      position : relative;
      outline : none;
      -webkit-user-select : none;
      user-select : none;
      cursor : pointer;
      width : 60px;
      height : 60px;
      line-height : 60px;
      text-align : center;
      font-size : 32px;
      z-index : 999;
      color : #FFFFFF;
      border-radius : 50%;
      box-shadow : 0 0 5px rgba(0,0,0,0.15);
      transition : 0.2s opacity ease-in-out;
      -webkit-transition : 0.2s opacity ease-in-out;
    }
    
    .bottom-right{
      position : fixed;
      bottom : 3rem;
      right : 3rem;
    }
  </style>
</floating_action_button>
