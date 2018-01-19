/**
 * Contains all similar functions of Dynamic Fields.
 */
export default class AbstractField {

  /**
   * Default constructor.
   */
  constructor() {}

  /** 
   * Create a wrapper element. 
   *
   * @param Name of the dynamic field. example dynamic_text.
   */
  createWrapperSpan(dynamicFieldName){
    let wrapper = document.createElement("span");
    wrapper.classList.add(dynamicFieldName);
    wrapper.classList.add("o-grid");
    return wrapper;
  }


  /**
   * Create a label.
   *
   * @param id Id of the input.
   * @param labelText Label test show in display.
   * @return Label element.
   */
  createLabel(id, labelText){
    var label = document.createElement("label");
    label.setAttribute("for", id);
    var textNode = document.createTextNode(labelText);
    label.appendChild(textNode);
    label.classList.add("o-grid-small--fit");
    label.classList.add("o-grid--medium-fit");
    label.classList.add("o-grid--large-fit");
    return label;
  }

  /**
   * Creates wrapper div to be used to give fields a uniform look.
   */
  createWrapperGrid(){
    var grid = document.createElement("div");
    grid.classList.add("o-grid__cell");
    return grid;
  }
}

module.exports = AbstractField;
