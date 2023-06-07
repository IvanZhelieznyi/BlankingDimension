const connectionSelect = document.querySelector('#calculator-form-connection');
const gradeSelect = document.querySelector('#calculator-form-grade');
const sizeSelect = document.querySelector('#calculator-form-size');
const weightSelect = document.querySelector('#calculator-form-weight');

const connectionMultiSelect = new Choices(connectionSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

const gradeMultiSelect = new Choices(gradeSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

const sizeMultiSelect = new Choices(sizeSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

const weightMultiSelect = new Choices(weightSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

findConections();

connectionMultiSelect.passedElement.element.addEventListener(
    'addItem',
    function(event) {
      const connectionSelected = event.detail.value;

  console.log(connectionSelected);
    sizeMultiSelect.clearStore();
    weightMultiSelect.clearStore();
    gradeMultiSelect.clearStore();
	
    sizeMultiSelect.setChoices([{
      value: "",
      label: "Size",
      selected: true,
      disabled: true,
    }]);
    // -- SIZE --
    const iSize = [];
    for (y = 0; y < conections.length; y++) {
      if (connectionSelected === conections[y].conectionType) {
		
        let not_find = true;
		for (i = 0; i < iSize.length; i++) {
			if (conections[y].size === iSize[i]) {
				not_find = false;
			}
		}
		
		if (not_find) {
          iSize.push(conections[y].size);
          sizeMultiSelect.setChoices([{
            value: `${conections[y].size}`,
            label: `${conections[y].size}`,
            selected: false,
            disabled: false,
          }]);
		  console.log(iSize);
        }
      }
    }
});



// -- WEIGHT --
sizeMultiSelect.passedElement.element.addEventListener(
  'addItem',
  function(event) {
    const connectionSelected = connectionMultiSelect.getValue(true);
    const sizeSelected = event.detail.value;
    weightMultiSelect.clearStore();
    gradeMultiSelect.clearStore();
    weightMultiSelect.setChoices([{
      value: "",
      label: "Weight",
      selected: true,
      disabled: true,
    }]);
	
	const iWeight = [];
    for (y = 0; y < conections.length; y++) {
      if (connectionSelected === conections[y].conectionType && sizeSelected === conections[y].size) {
        let not_find = true;
		for (i = 0; i < iWeight.length; i++) {
			if (conections[y].weight === iWeight[i]) {
				not_find = false;
			}
		}
		
		if (not_find) {
          iWeight.push(conections[y].weight);
          weightMultiSelect.setChoices([{
            value: `${conections[y].weight}`,
            label: `${conections[y].weight}`,
            selected: false,
            disabled: false,
          }]);
		  console.log(iWeight);
        }
      }
    }
  },
  false,
);


weightMultiSelect.passedElement.element.addEventListener(
  'addItem',
  function(event) {
    const connectionSelected = connectionMultiSelect.getValue(true);
    const sizeSelected = sizeMultiSelect.getValue(true);
    const weightSelected = event.detail.value;

	console.log(weightSelected);
    gradeMultiSelect.clearStore();
	gradeMultiSelect.setChoices([{
      value: "",
      label: "Grade",
      selected: true,
      disabled: true,
    }]);

	const iGrade = [];
    for (y = 0; y < conections.length; y++) {
      if (connectionSelected === conections[y].conectionType && sizeSelected === conections[y].size && weightSelected === conections[y].weight) {
		let not_find = true;
		for (i = 0; i < iGrade.length; i++) {
			if (conections[y].grade === iGrade[i]) {
				not_find = false;
			}
		}
		
		if (not_find) {
			iGrade.push(conections[y].grade);
			gradeMultiSelect.setChoices([{
				value: `${conections[y].grade}`,
				label: `${conections[y].grade}`,
				selected: false,
				disabled: false,
			}]);  
			
		}
      }
    }
  },
  false,
);

    // -- CONECTIONS --
function  findConections() {
  connectionMultiSelect.setChoices([{
    value: "",
    label: "Connection",
    selected: true,
    disabled: true,
  }]);
  const iConection = [];
  for (y = 0; y < conections.length; y++) {
		let not_find = true;
		for (i = 0; i < iConection.length; i++) {
			if (conections[y].conectionType === iConection[i]) {
				not_find = false;
			}
		}
		
		if (not_find) {
			iConection.push(conections[y].conectionType);
			connectionMultiSelect.setChoices([{
			value: `${conections[y].conectionType}`,
			label: `${conections[y].conectionType}`,
			selected: false,
			disabled: false,
			}]);
			console.log(iConection);
		}
  }
}
  
const calculatorform = document.querySelector('.calculator-form');
calculatorform.addEventListener('submit', function(event) {
  event.preventDefault();
});
