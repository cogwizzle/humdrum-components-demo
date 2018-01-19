riot.tag2('dynamic_form', '<form class="dynamic_form" ref="{id}" id="{id}" action="{action}" method="{method}"> <span each="{inp in inputs}"> <raw content="{inp.outerHTML}"></raw> </span> <button type="submit" if="{submit}">Submit</button> </form>', 'dynamic_form .dynamic_check input,[data-is="dynamic_form"] .dynamic_check input{ margin-left: 20px; } dynamic_form span.o-grid,[data-is="dynamic_form"] span.o-grid{ padding-bottom:20px; } dynamic_form span.o-grid:last,[data-is="dynamic_form"] span.o-grid:last{ padding-bottom:0px; } dynamic_form div.o-grid__cell.label,[data-is="dynamic_form"] div.o-grid__cell.label{ width : 100%; text-align : right; }', '', function(opts) {
  this.inputs = [];
  var descriptions = opts.input_descriptions;
  var factory = new InputFactory();
  for(var i = 0, length = descriptions.length; i < length; i++){
    this.inputs.push(factory.build(descriptions[i]));
  }

  this.id = opts.id;
  this.method = opts.method;
  this.action = opts.action;
  this.submit = opts.submit;
});

riot.tag2('raw', '<span></span>', '', '', function(opts) {
    this.root.innerHTML = opts.content;
});

riot.tag2('floating_action_button', '<div class="floating_popout bottom-right"> <div class="floating_action_button" onclick="{actionEvent}" riot-style="background-color:{bgColor}"> <i class="icon {iconClass}"></i> </div> </div>', 'floating_action_button .floating_action_button,[data-is="floating_action_button"] .floating_action_button{ display : inline-block; position : relative; outline : none; -webkit-user-select : none; user-select : none; cursor : pointer; width : 60px; height : 60px; line-height : 60px; text-align : center; font-size : 32px; z-index : 999; color : #FFFFFF; border-radius : 50%; box-shadow : 0 0 5px rgba(0,0,0,0.15); transition : 0.2s opacity ease-in-out; -webkit-transition : 0.2s opacity ease-in-out; } floating_action_button .bottom-right,[data-is="floating_action_button"] .bottom-right{ position : fixed; bottom : 3rem; right : 3rem; }', '', function(opts) {
    actionEvent = opts.press;
    bgColor = "black";
    if(opts.background_color){
      bgColor = opts.background_color;
    }
    iconClass = opts.icon_class;
});
riot.tag2('header_nav', '<ul ref="page_heading" id="page_heading" class="c-nav c-nav--inline"> <li id="page_heading_text" class="c-nav__content">{opts.page_heading}</li> <span class="navspan" if="{opts.links}"> <li class="icon"> <a href="javascript:void(0);" onclick="{toggleResponsive}">&#9776;</a> </li> <li each="{opts.links}" class="c-nav__item c-nav__item--right" uri="{uri}" onclick="{goto}">{text}</li> </span> </ul>', 'header_nav body,[data-is="header_nav"] body{margin:0;} header_nav ul#page_heading #page_heading_text,[data-is="header_nav"] ul#page_heading #page_heading_text{ font-weight:bold; } header_nav ul#page_heading li.icon,[data-is="header_nav"] ul#page_heading li.icon{ vertical-align:center; text-align:center; } header_nav ul.topnav li a,[data-is="header_nav"] ul.topnav li a{ display: inline-block; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; transition: 0.3s; font-size: 17px; } header_nav ul#page_heading li,[data-is="header_nav"] ul#page_heading li{ position:relative; } header_nav ul#page_heading li a,[data-is="header_nav"] ul#page_heading li a{ color: #f2f2f2; text-align: center; text-decoration: none; transition: 0.3s; height:100%; display:block; } header_nav ul#page_heading li.icon,[data-is="header_nav"] ul#page_heading li.icon{ display: none; padding: 16px; } header_nav ul#page_heading,[data-is="header_nav"] ul#page_heading{ z-index:100; } @media screen and (max-width:680px) { header_nav ul#page_heading li.c-nav__item,[data-is="header_nav"] ul#page_heading li.c-nav__item{display: none;} header_nav ul#page_heading li.icon,[data-is="header_nav"] ul#page_heading li.icon{ float: right; display: inline-block; } } @media screen and (max-width:680px) { header_nav ul#page_heading.responsive,[data-is="header_nav"] ul#page_heading.responsive{position: relative;} header_nav ul#page_heading.responsive li.c-nav__item,[data-is="header_nav"] ul#page_heading.responsive li.c-nav__item{ float: none; display: block; } header_nav ul#page_heading.responsive li.c-nav__item a,[data-is="header_nav"] ul#page_heading.responsive li.c-nav__item a{ display: block; text-align: left; margin-left:16px; } header_nav ul#page_heading.responsive li.c-nav__item:hover,[data-is="header_nav"] ul#page_heading.responsive li.c-nav__item:hover{ display:block; } }', '', function(opts) {

    this.toggleResponsive = function() {
      var titleBar = this.refs.page_heading;

      if (titleBar.className == "c-nav c-nav--inline") {
          titleBar.className += " responsive";
      } else {
          titleBar.className = "c-nav c-nav--inline";
      }
    }.bind(this)

    this.goto = function(event){
      var uri = event.target.getAttribute('uri');
      window.location.href = uri;
      this.toggleResponsive();
    }.bind(this)
});

riot.tag2('list_builder', '<div class="o-grid"> <div class="o-grid__cell"> <select id="selectedValues" class="list" multiple> <option each="{selectedValues}" riot-value="{value}">{display}</option> </select> </div> <div class="o-grid__cell o-grid__cell--width-10"> <ul id="list_builder_controls"> <li><button id="removeAll" onclick="{removeAll}">>></button></li> <li><button id="remove" onclick="{remove}">-></button></li> <li><button id="add" onclick="{add}"><-</button></li> <li><button id="addAll" onclick="{addAll}"><<</button></li> </ul> </div> <div class="o-grid__cell"> <select id="unselectedValues" class="list" multiple> <option each="{unselectedValues}" riot-value="{value}">{display}</option> </select> </div> </div>', 'list_builder select#unselectedValues,[data-is="list_builder"] select#unselectedValues,list_builder select#selectedValues,[data-is="list_builder"] select#selectedValues{ height: 300px; width: 200px; } list_builder ul#list_builder_controls li,[data-is="list_builder"] ul#list_builder_controls li{ list-style-type: none; padding:15px; } list_builder div.o-grid__cell,[data-is="list_builder"] div.o-grid__cell{ text-align:center; vertical-align:middle; }', '', function(opts) {
    var $this = this;
    this.selectedValues = opts.selectedValues;
    this.unselectedValues = opts.unselectedValues;
    this.value = opts.selectedValues;

    this.removeAll = function(event){
      var elements = document.querySelectorAll("select#selectedValues option");
      if(elements){
        for(var i = 0; i < elements.length; i++){
          var element = elements[i];
          element.selected = true;
        }
      }
      $this.remove();
    }.bind(this)

    this.addAll = function(event){
      var elements = document.querySelectorAll("select#unselectedValues option");
      if(elements){
        for(var i = 0; i < elements.length; i++){
          var element = elements[i];
          element.selected = true;
        }
      }
      $this.add();
    }.bind(this)

    this.remove = function(event){
      var selectedElements = document.querySelectorAll("select#selectedValues option:checked");
      var itemsToRemove = [];
      if(selectedElements){
        for(var i = 0; i < selectedElements.length; i++){
          var element = selectedElements[i];
          itemsToRemove.push(element.value);
        }
      }
      if(itemsToRemove.length > 0){
        for(var i = 0; i < itemsToRemove.length; i++){
          var val = itemsToRemove[i];
          for(var x = 0; x < $this.selectedValues.length; x++){
            var listItem = $this.selectedValues[x];
            if(val == listItem.value){
              $this.unselectedValues.push(listItem);
              $this.selectedValues.splice(x, 1);
            }
          }
        }
      }
      $this.update();
    }.bind(this)

    this.add = function(event){
      var selectedElements = document.querySelectorAll("select#unselectedValues option:checked");
      var itemsToRemove = [];
      if(selectedElements){
        for(var i = 0; i < selectedElements.length; i++){
          var element = selectedElements[i];
          itemsToRemove.push(element.value);
        }
      }
      if(itemsToRemove.length > 0){
        for(var i = 0; i < itemsToRemove.length; i++){
          var val = itemsToRemove[i];
          for(var x = 0; x < $this.unselectedValues.length; x++){
            var listItem = $this.unselectedValues[x];
            if(val == listItem.value){
              $this.selectedValues.push(listItem);
              $this.unselectedValues.splice(x, 1);
            }
          }
        }
      }
      $this.update();
    }.bind(this)

    this.on('mount', function(){
      $this.value = $this.selectedValues;
    });

    this.on('update', function(){
      $this.value = $this.selectedValues;
    });
});

riot.tag2('login', '<div class="u-absolute-center"> <div id="loginDiv" class="c-card c-card--primary c-card--highest"> <div class="c-card__content">Login</div> <div class="c-card__group-divider"></div> <div id="login_content" class="c-card__content"> Username: <input class="c-field" type="text" id="username" name="username"> Password: <input class="c-field" type="text" id="password" name="password"> <a class="c-link" href="javascript:void(0)" onclick="{opts.on_request}">Requst an account</a> <div id="controls"> <button id="loginButton" class="c-button c-button--primary c-button--xsmall" onclick="{submit}">Login</button> </div> </div> </div> </div>', 'login body,[data-is="login"] body{ background-color : "#BDBDBD"; height:100%; width:100%; } login input.c-field#username,[data-is="login"] input.c-field#username{ margin : 5px; margin-bottom : 15px; } login input.c-field#password,[data-is="login"] input.c-field#password{ margin:5px; } login a.c-link,[data-is="login"] a.c-link{ display:block; margin-bottom:20px; } login div#login_content,[data-is="login"] div#login_content{ padding : 20px; } login div#controls,[data-is="login"] div#controls{ width:100%; } login div#controls,[data-is="login"] div#controls{ text-align:right; } login div#loginDiv,[data-is="login"] div#loginDiv{ width:600px; } login div#loginDiv input,[data-is="login"] div#loginDiv input{ width:200px; } @media screen and (max-width:680px) { login div#loginDiv,[data-is="login"] div#loginDiv{ height:100%; width:100%; } }', '', function(opts) {
    var $this = this;

    this.submit = function(e){
      opts.on_submit();
    }.bind(this)
});
riot.tag2('table_list', '<table class="{tableClass}"> <thead class="c-table__head"> <tr class="c-table__row c-table__row--heading"> <th class="c-table__cell" each="{column in columns}">{column}</th> </tr> </thead> <tbody class="c-table__body"> <tr class="c-table__row" each="{row in data}" onclick="{parent.rowClick}"> <td class="c-table__cell" each="{column in columns}">{row[column]}</td> </tr> </tbody> </table>', '', '', function(opts) {
    var getKeys = function(obj, keys){
      for(var key in obj){
        if(!keys.includes(key)){
          keys.push(key);
        }
      }
      return keys;
    }

    this.data = opts.data;
    this.rowClick = opts.rowClick;
    this.columns = [];
    var $this = this;
    for(var i = 0; i < $this.data.length; i++){
      $this.columns = getKeys($this.data[i], $this.columns);
    }

    this.tableClass = "c-table";
    if(this.rowClick){
      this.tableClass+= " c-table--clickable";
    }
});
