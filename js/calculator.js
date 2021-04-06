//const weightItemChoiceTypeSelect = document.querySelector('#choices--calculator-form-weight-item-choice-1');
const sizeSelect = document.querySelector('#calculator-form-size');
const weightSelect = document.querySelector('#calculator-form-weight');

const sizeMultiSelect = new Choices(sizeSelect, {
  //choices: [],
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
  //choices: [],
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



//print
function printPdf() {
  var e = this;
  (this.printingPdf = !0),
    setTimeout(function () {
      window.print(), (e.printingPdf = !1);
    }, 5000);
}

// function createPDF() {
//   var e = 3; //arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
//   this.$scrollTo("body", 200);
//   var i = "3.5";
//   setTimeout(function () {
//     o()(document.querySelector("#calculator"), { //o()(document.querySelector("#pdf_wrapper"), {
//       scale: e,
//       useCORS: !0,
//     }).then(function (e) {
//       var t = e.toDataURL("image/png"),
//         n = new c.a("landscape", "in", "letter"),
//         a = n.getImageProperties(t),
//         s = n.internal.pageSize.getWidth(),
//         l = (a.height * s) / a.width;
//       n.addImage(t, "PNG", 0, 0, s, l, void 0, "FAST"),
//         n.save(i + "_blanking-dimensions.pdf");
//     }),
//       (this.preparingFile = !1);
//   }, 3000);
// }



const classListRemove = document.querySelector('#calculator-form-connection');
var classListRemoveValue = '';
//console.log(conections[3].conectionType);
classListRemove.addEventListener('click', function() {
  //console.log(classListRemove[0]);
  //const conectionType = connectionSize();
  //console.log(classListRemove.value);
  if (classListRemove.value !== classListRemoveValue) {
    classListRemoveValue = classListRemove.value;
    //console.log(classListRemove.value);
    sizeMultiSelect.clearStore();
    weightMultiSelect.clearStore();
    sizeMultiSelect.setChoices([{
      value: "",
      label: "Size",
      selected: true,
      disabled: true,
    }]);
    // weightMultiSelect.setChoices([{
    //   value: "",
    //   label: "Weight",
    //   selected: true,
    //   disabled: true,
    // }]);
    // sizeMultiSelect.setChoices([{
    //   value: 'size',
    //   label: 'Size',
    //   selected: true,
    //   disabled: true,
    // }]);
    // weightMultiSelect.setChoices([{
    //   value: 'weight',
    //   label: 'Weight',
    //   selected: true,
    //   disabled: true,
    // }]);

    // -- SIZE --
    let iSize = '';
    for (y = 0; y < conections.length; y++) {
      if (classListRemove.value === conections[y].conectionType) {
        if (conections[y].size !== iSize) {
          //console.log('size');
          //console.log(conections[y].size);
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
  }
  
});

// -- WEIGHT --
sizeMultiSelect.passedElement.element.addEventListener(
  'addItem',
  function(event) {
    //console.log('sizeMultiSelect.getValue()');
    //console.log(sizeMultiSelect.getValue());
    //console.log(event.detail.value);
    const sizeSelected = event.detail.value;
    weightMultiSelect.clearStore();
    weightMultiSelect.setChoices([{
      value: "",
      label: "Weight",
      selected: true,
      disabled: true,
    }]);
    // weightMultiSelect.setChoices([{
    //   value: 'weight',
    //   label: 'Weight',
    //   selected: true,
    //   disabled: true,
    // }]);
    for (y = 0; y < conections.length; y++) {
      if (classListRemove.value === conections[y].conectionType && sizeSelected === conections[y].size) {
        if (conections[y].weight) {
          //console.log('weight');
          //console.log(conections[y].weight);
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
    const sizeSelected = sizeMultiSelect.getValue(true);
    const weightSelected = weightMultiSelect.getValue(true);


    for (y = 0; y < conections.length; y++) {
      //console.log('for');
      if (classListRemove.value === conections[y].conectionType && sizeSelected === conections[y].size && weightSelected === conections[y].weight) {
        // console.log('sizeMultiSelect.getValue()');
        // console.log(sizeMultiSelect.getValue(true));
        // console.log('weightMultiSelect.getValue()');
        // console.log(weightMultiSelect.getValue(true));
        // console.log('conections[y]');
        // console.log(conections[y].length);

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


// function fillInTheTable(id) {
//   const costElement = document.querySelector(".calculator-form-total-cost");
//   let Calculating = 'Calculating';
//   costElement.textContent = Calculating;
//   let delayInterval = 400;
//   let numberPoint = 7
//   let timerId = setTimeout(function request() {
//     Calculating += '.';
//     numberPoint -= 1;
//     costElement.textContent = Calculating;
//     if (numberPoint >= 1) {
//       timerId = setTimeout(request, delayInterval);
//     }
//     else {
//       costElement.textContent = sum + "$";
//     }
//   }, delayInterval);

  
// }





//console.log(sizeMultiSelect.getValue());
// -- WEIGHT --
// const classCalculatorFormTechnologies = document.querySelector('#calculator-form-size');
// var classCalculatorFormTechnologiesValue = "";
// classCalculatorFormTechnologies.addEventListener('click', function() {
//   console.log('sizeMultiSelect.getValue()');
//   console.log(sizeMultiSelect.getValue());
//   if (classCalculatorFormTechnologies.value !== classCalculatorFormTechnologiesValue) {
//     classCalculatorFormTechnologiesValue = classCalculatorFormTechnologies.value;
//     console.log(classCalculatorFormTechnologies.value);
//     for (y = 0; y < conections.length; y++) {
//       if (classListRemove.value === conections[y].conectionType && classCalculatorFormTechnologies.value === conections[y].size) {
//         if (conections[y].weight) {
//           console.log('weight');
//           console.log(conections[y].weight);
//           weightMultiSelect.setChoices([{
//             value: `${conections[y].weight}`,
//             label: `${conections[y].weight}`,
//             selected: false,
//             disabled: false,
//           }]);
//         }
//       }
//     }
//   }
// });






// if (classCalculatorFormTechnologies.value !== classCalculatorFormTechnologiesValue) {
//   classCalculatorFormTechnologiesValue = classCalculatorFormTechnologies.value;
//   console.log(classCalculatorFormTechnologies.value);
//   const conectionsSizi = document.querySelector('#calculator-form-weight');
//   //const opt = document.querySelector('#calculator-form-size');
//   //console.log(conectionsSizi.value);
//   for (i = 0; i < conectionsSizi.length; i++) {
//     //console.log(conectionTypeUpj[i]);
//     for (y = 0; y < conections.length; y++) {  //opt.length
//       //console.log(conectionsSizi[y].classList.value);
//       if (classListRemove.value === conections[y].conectionType && classCalculatorFormTechnologies.value === conections[y].size) {
//         if (conectionsSizi[i].value === conections[y].weight) {
//           console.log('weight');
//           console.log(conectionsSizi[i].value);
//           conectionsSizi[i].classList.add('calculator-form-option-active');
//           break;
//         } else if (conectionsSizi[i].classList.value === 'calculator-form-option calculator-form-option-active') {
//             const optionActiveToClose = conectionsSizi[i];
//             //console.log('opt[i].value');
//             //console.log(opt[i].value);
//             console.log('remove');
//             console.log(optionActiveToClose);
//             optionActiveToClose.classList.remove('calculator-form-option-active');
//         }
//       }
//     }
//   }




  
const calculatorform = document.querySelector('.calculator-form');
// console.log(calculatorform);
calculatorform.addEventListener('submit', function(event) {
  event.preventDefault();
  // totalRenderSum();
});

//function connectionSize() {
  // const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
  // const menuElements = document.querySelector('#calculator-form-website-type5');

  // if (menuElements.length) {
  //     menuElements.forEach( container => {
  //         container.addEventListener('click', () => setTimeout(function () {
  //           console.log(menuElements.value);
  //           console.log("menuElements.value");
  //         }, MOBILE_MENU_ITEM_CLOSE_DELAY));
  //     });
  // }

 // return 7;
//}


// function totalRenderSum() {
//   //Selectors
//   const websiteCartSelect = document.querySelector('#calculator-form-input-radio-cart input:checked');
//   const websiteReceptionSelect = document.querySelector('#calculator-form-input-radio-reception input:checked');
//   //Value
//   const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
//   const technologiesMultiValue = getTotalSum(technologiesMultiSelect.getValue());
//   const websiteCartValue = convertCartOptionToPrice(websiteCartSelect.value);
//   const websiteReceptionValue = convertReceptionOptionToPrice(websiteReceptionSelect.value);
//   //Console
//   console.log(websiteTypeValue);
//   console.log(technologiesMultiValue);
//   console.log(websiteCartSelect);
//   console.log(websiteReceptionSelect);
//   console.log(websiteCartValue);
//   console.log(websiteReceptionValue);

//   renderSum(websiteTypeValue + technologiesMultiValue + websiteCartValue + websiteReceptionValue);

// }




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