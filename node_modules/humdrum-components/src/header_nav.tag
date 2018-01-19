<header_nav>
  <ul ref="page_heading" id="page_heading" class="c-nav c-nav--inline">
    <yield />
    <li id="page_heading_text" class="c-nav__content" if="{opts.page_heading}">{opts.page_heading}</li>
    <span class="navspan" if="{opts.links}">
      <li class="icon c-nav__item--right" onclick={ toggleResponsive }>&#9776;</li>
      <li each="{opts.links}" class="c-nav__item c-nav__item--right" uri="{uri}" onclick="{goto}">{text}</li>
    </span>
  </ul>
  <style>
    body {
      margin:0;
    }

    ul#page_heading #page_heading_text{
      font-weight: bold;
    }

    ul#page_heading li.icon {
      vertical-align: center;
      text-align: center;
    }

    ul.topnav li a {
      display: inline-block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: 0.3s;
      font-size: 17px;
    }

    ul#page_heading li{
      position:relative;
    }

    ul#page_heading li a{
      color: #f2f2f2;
      text-align: center;
      text-decoration: none;
      transition: 0.3s;
      height:100%;
    }

    ul#page_heading li.icon {
      display: none;
      padding: 16px;
    }

    ul#page_heading{
      z-index:100;
    }

    @media screen and (max-width:680px) {
      ul#page_heading li.c-nav__item--right {
        display: none;
      }
      ul#page_heading li.icon {
        display: inline-block;
      }
      ul#page_heading.responsive {
        position: relative;
      }
      ul#page_heading.responsive li.c-nav__item {
        float: none;
        display: block;
      }
      ul#page_heading.responsive li.c-nav__item a {
        display: block;
        text-align: left;
        margin-left:16px;
      }
      ul#page_heading.responsive li.c-nav__item:hover{
        display:block;
      }
    }
  </style>

  <script>
    import riot from 'riot';
    import 'blaze/dist/blaze.min.css';

    let _component = this;

    /**
     * Window resize event to close the navigation menu.
     */
    window.addEventListener('resize', function() {
      var titleBar = _component.refs.page_heading;

      titleBar.className = "c-nav c-nav--inline";
    });

    /**
     * Toggle between adding and removing the "responsive" class to topnav.
     */
    _component.toggleResponsive = function() {
      var titleBar = _component.refs.page_heading;

      if (titleBar.className == "c-nav c-nav--inline") {
          titleBar.className += " responsive";
      } else {
          titleBar.className = "c-nav c-nav--inline";
      }
    }

    /**
     * Go to event, used for redirecting to a page.
     */
    _component.goto = function(event) {
      var uri = event.target.getAttribute('uri');
      window.location.href = uri;
      _component.toggleResponsive();
    }
  </script>
</header_nav>
