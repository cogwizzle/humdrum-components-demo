<login>
  <div class="u-absolute-center">
    <div id="loginDiv" class="c-card c-card--primary c-card--highest">
      <div class="c-card__content">Login</div>
      <div class="c-card__group-divider"></div>
      <div id="login_content" class="c-card__content">
        Username: <input class="c-field" type="text" id="username" name="username" />
        Password: <input class="c-field" type="text" id="password" name="password" />
        <a class="c-link" href="javascript:void(0)" onClick="{opts.on_request}">Requst an account</a>
        <div id="controls">
          <button id="loginButton" class="c-button c-button--primary c-button--xsmall" onClick="{submit}">Login</button>
        </div>
      </div>
    </div>
  </div>
  
  <style scoped>
    body{
      background-color : "#BDBDBD";
      height:100%;
      width:100%;
    }
  
    input.c-field#username{
      margin : 5px;
      margin-bottom : 15px;
    }
    
    input.c-field#password{
      margin:5px;
    }
    
    a.c-link{
      display:block;
      margin-bottom:20px;
    }
    
    div#login_content{
      padding : 20px;
    }
    
    div#controls{
      width:100%;
    }
    
    div#controls{
      text-align:right;
    }
    
    div#loginDiv{
      width:600px;
    }
    
    div#loginDiv input{
      width:200px;
    }
    
    @media screen and (max-width:680px) {
      div#loginDiv{
        height:100%;
        width:100%;
      }
    }
  </style>
  
  <script>
    import 'blaze/dist/blaze.min.css';

    let component = this;
    
    component.submit = (e) => {
      opts.on_submit();
    }
  </script>
</login>
