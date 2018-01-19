<table_list>
  <table class="{tableClass}">
    <thead class="c-table__head">
      <tr class="c-table__row c-table__row--heading">
        <th class="c-table__cell" each="{column in columns}">{column}</th>
      </tr>
    </thead>
    <tbody class="c-table__body">
      <tr class="c-table__row" each="{row in data}" onclick="{parent.rowClick}">
        <td class="c-table__cell" each="{column in columns}">{row[column]}</td>
      </tr>
    </tbody>
  </table>
  
  <script>
    import riot from 'riot';
    import 'blaze/dist/blaze.min.css';
    let component = this;

    let getKeys = function(obj, keys){
      for(var key in obj){
        if(!keys.includes(key)){
          keys.push(key);
        }
      }
      return keys;
    }

    component.data = opts.data;
    component.rowClick = opts.rowClick;
    component.columns = [];

    for(var i = 0; i < component.data.length; i++){
      component.columns = getKeys(component.data[i], component.columns);
    }

    component.tableClass = "c-table";
    if(component.rowClick){
      component.tableClass+= " c-table--clickable";
    }
  </script>
</table_list>
