<list_builder>
  <div class="o-grid">
    <div class="o-grid__cell">
      <h3>Selected</h3>
      <select id="selectedValues" class="list" multiple>
        <option each="{selected_values}" value="{value}">{display}</option>
      </select>
    </div>
    <div class="o-grid__cell o-grid__cell--width-10">
      <ul id="list_builder_controls">
        <li><button id="removeAll" onClick="{removeAll}"><i class="fa fa-forward" aria-hidden="true"></i></button></li>
        <li><button id="remove" onClick="{remove}"><i class="fa fa-play" aria-hidden="true"></i></button></li>
        <li><button id="add" onClick="{add}"><i class="fa fa-play fa-flip-horizontal" aria-hidden="true"></i></button></li>
        <li><button id="addAll" onClick="{addAll}"><i class="fa fa-backward" aria-hidden="true"></i></button></li>
      </ul>
    </div>
    <div class="o-grid__cell">
      <h3>Not Selected</h3>
      <select id="unselectedValues" class="list" multiple>
        <option each="{unselected_values}" value="{value}">{display}</option>
      </select>
    </div>
  </div>
  
  <script>
    import riot from 'riot';
    import 'blaze/dist/blaze.min.css';
    import 'font-awesome/css/font-awesome.min.css';

    let component = this;
    component.selected_values = opts.selected_values;
    component.unselected_values = opts.unselected_values;
    component.value = opts.selected_values;
    
    component.removeAll = (event) => {
      let elements = document.querySelectorAll("select#selectedValues option");

      if(elements){

        elements.forEach((element) => {

          element.selected = true;
        });
      }

      component.remove();
    }
    
    component.addAll = (event) => {
      let elements = document.querySelectorAll("select#unselectedValues option");

      if(elements){

        elements.forEach((element) => {

          element.selected = true;
        });
      }
      component.add();
    }
    
    component.remove = (event) => {
      let selectedElements = document
        .querySelectorAll("select#selectedValues option:checked");
      let itemsToRemove = [];

      if(selectedElements){

        selectedElements.forEach((element) => {

          itemsToRemove.push(element.value);
        });
      }

        
        
      itemsToRemove.forEach((val) => {

        component.selected_values = component.selected_values
          .filter((listItem) => {

            if (listItem.value === val) {

              component.unselected_values.push(listItem);
            }else{

              return listItem;
            }
          });
      });

      component.trigger('removed', itemsToRemove);
      component.update();
    }
    
    component.add = (event) => {
      let selectedElements = document
        .querySelectorAll("select#unselectedValues option:checked");
      let itemsToRemove = [];

      if(selectedElements){
  
        selectedElements.forEach((element) => {
          
          itemsToRemove.push(element.value);
        });
      }

      itemsToRemove.forEach((val) => {

        component.unselected_values = component.unselected_values
          .filter((listItem) => {

            if (listItem.value === val) {

              component.selected_values.push(listItem);
            }else{

              return listItem;
            }
          });
      });

      component.trigger('added', itemsToRemove);
      component.update();
    }
    
    this.on('mount', () => {
      component.value = component.selected_values;
    });
    
    /*
      On change update the element's value.
    */
    this.on('update', () => {
      component.value = component.selected_values;
    });
  </script>
  
  <style>
    select#unselectedValues, select#selectedValues{
      height: 300px;
      width: 200px;
    }
    
    ul#list_builder_controls li{
      list-style-type: none;
      padding:15px;
    }
    
    div.o-grid__cell{
      text-align:center;
      vertical-align:middle;
    }
  </style>
</list_builder>
