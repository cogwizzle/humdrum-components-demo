import AbstractField from './AbstractField';

/**
  Create a select input.
*/
export default class SelectField extends AbstractField {

  /**
   * Default constructor.
   */
  constructor() {
    super();
  }

  /**
   * Create the input element.
   *
   * @param id Id of selectbox.
   * @param listOfValues List of options.
   * @param multiple Boolean representing if it is a multiple select box.
   * @return Selectbox.
   */
  createElements(id, listOfValues = [], multiple = false){
    let select = document.createElement("select");
    select.setAttribute("name", id);
    select.classList.add("c-field");
    
    // Evaluate if select field allows multiple values to be selected.
    if(multiple){
      select.setAttribute("multiple", true);
    }
    for(let i = 0; i < listOfValues.length; i++){
      let item = listOfValues[i];
      let option = document.createElement("option");
      option.setAttribute("name", id);
      option.setAttribute("value", item.value);
      option.classList.add("c-field");
      let textNode = document.createTextNode(item.label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
    return select;
  }

  build(inputDescription){
    let specialClass = "dynamic_select";
    let wrapper = this.createWrapperSpan(specialClass);
    let label = this.createLabel(inputDescription.id, inputDescription.label);
    let element = this.createElements(inputDescription.id, inputDescription.values, inputDescription.multiple);
    let labelGrid = this.createWrapperGrid();
    labelGrid.classList.add("label");
    labelGrid.classList.add("o-grid__cell--width-30");
    let inputGrid = this.createWrapperGrid();
    labelGrid.appendChild(label);
    inputGrid.appendChild(element);
    wrapper.appendChild(labelGrid);
    wrapper.appendChild(inputGrid);
    return wrapper;
  }
}

module.exports = SelectField;
