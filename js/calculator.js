const connectionSelect = document.querySelector('#calculator-form-connection');
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
    sizeMultiSelect.setChoices([{
      value: "",
      label: "Size",
      selected: true,
      disabled: true,
    }]);
    // -- SIZE --
    let iSize = '';
    for (y = 0; y < conections.length; y++) {
      if (connectionSelected === conections[y].conectionType) {
        if (conections[y].size !== iSize) {
          iSize = conections[y].size;
          sizeMultiSelect.setChoices([{
            value: `${conections[y].size}`,
            label: `${conections[y].size}`,
            selected: false,
            disabled: false,
          }]);
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
    weightMultiSelect.setChoices([{
      value: "",
      label: "Weight",
      selected: true,
      disabled: true,
    }]);
    for (y = 0; y < conections.length; y++) {
      if (connectionSelected === conections[y].conectionType && sizeSelected === conections[y].size) {
        if (conections[y].weight) {
          weightMultiSelect.setChoices([{
            value: `${conections[y].weight}`,
            label: `${conections[y].weight}`,
            selected: false,
            disabled: false,
          }]);
        }
      }
    }
  },
  false,
);


// -- ЗАПОЛНЯЕМ ТАБЛИЦУ --
weightMultiSelect.passedElement.element.addEventListener(
  'addItem',
  function() {
    const connectionSelected = connectionMultiSelect.getValue(true);
    const sizeSelected = sizeMultiSelect.getValue(true);
    const weightSelected = weightMultiSelect.getValue(true);


    for (y = 0; y < conections.length; y++) {
      if (connectionSelected === conections[y].conectionType && sizeSelected === conections[y].size && weightSelected === conections[y].weight) {

        let letElement = document.querySelector('#size');
        letElement.textContent = conections[y].size;
        letElement = document.querySelector('#weight');
        letElement.textContent = conections[y].weight;
        letElement = document.querySelector('#wall');
        letElement.textContent = conections[y].wall;
        letElement = document.querySelector('#pinDiameterOdIn');
        letElement.textContent = conections[y].pinDiameterOdIn;
        letElement = document.querySelector('#pinDiameterOdMm');
        letElement.textContent = conections[y].pinDiameterOdMm;
        letElement = document.querySelector('#pinDiameterIdIn');
        letElement.textContent = conections[y].pinDiameterIdIn;
        letElement = document.querySelector('#pinDiameterIdMm');
        letElement.textContent = conections[y].pinDiameterIdMm;
        letElement = document.querySelector('#pinMinimumTurningLengthIn');
        letElement.textContent = conections[y].pinMinimumTurningLengthIn;
        letElement = document.querySelector('#pinMinimumTurningLengthMm');
        letElement.textContent = conections[y].pinMinimumTurningLengthMm;
        letElement = document.querySelector('#boxDiameterOdIn');
        letElement.textContent = conections[y].boxDiameterOdIn;
        letElement = document.querySelector('#boxDiameterOdMm');
        letElement.textContent = conections[y].boxDiameterOdMm;
        letElement = document.querySelector('#boxDiameterIdIn');
        letElement.textContent = conections[y].boxDiameterIdIn;
        letElement = document.querySelector('#boxDiameterIdMm');
        letElement.textContent = conections[y].boxDiameterIdMm;
        letElement = document.querySelector('#boxMinimumTurningLengthIn');
        letElement.textContent = conections[y].boxMinimumTurningLengthIn;
        letElement = document.querySelector('#boxMinimumTurningLengthMm');
        letElement.textContent = conections[y].boxMinimumTurningLengthMm;
        break;
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
  let iConection = '';
  for (y = 0; y < conections.length; y++) {
      if (conections[y].conectionType !== iConection) {
        iConection = conections[y].conectionType;
        connectionMultiSelect.setChoices([{
          value: `${conections[y].conectionType}`,
          label: `${conections[y].conectionType}`,
          selected: false,
          disabled: false,
        }]);
      }
  }
}
  
const calculatorform = document.querySelector('.calculator-form');
calculatorform.addEventListener('submit', function(event) {
  event.preventDefault();
});

function convertCartOptionToPrice(option) {
  if (option == 'yes') {
    return 300;
  }
  return 0;
}

function convertReceptionOptionToPrice(option) {
  if (option == 'yes') {
    return 600;
  }
  return 0;
}

function getTotalSum(arr1) {
  let totalSum = 0;

  arr1.forEach(function (tech) {
    totalSum += extractPriceFromValue(tech.value);
  });
  return totalSum;
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}

//print
function printPdf() {
  var e = this;
  (this.printingPdf = !0),
    setTimeout(function () {
      window.print(), (e.printingPdf = !1);
    }, 5000);
}