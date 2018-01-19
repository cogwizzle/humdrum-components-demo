import AbstractField from './AbstractField';

/**
  Create a check input.
*/
export default class CheckField extends AbstractField {

  /**
   * Default constructor.
   */
  constructor(inputDescription) {
    super();
  }

  /**
   * Create the input element.
   *
   * @param id ID of the field.
   * @param listOfValues Values to be used as checkboxes.
   * @return checkbox span.
   */
  createElements(id, listOfValues){
    var wrapper = document.createElement("span");
    for(var i = 0; i < listOfValues.length; i++){
      var item = listOfValues[i];
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("name", id);
      input.setAttribute("value", item.value);
      var textNode = document.createTextNode(item.label);
      wrapper.appendChild(input);
      wrapper.appendChild(textNode);
    }
    return wrapper;
  }

  build(inputDescription){
    let specialClass = "dynamic_check";
    let wrapper = this.createWrapperSpan(specialClass);
    let label = this.createLabel(inputDescription.id, inputDescription.label);
    let element = this.createElements(inputDescription.id, inputDescription.values);
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

module.exports = CheckField;
