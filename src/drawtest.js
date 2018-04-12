'use strict';

import * as utils from './utils.js';
import CountryList from 'country-list';

const headerImageSrc = '/src/images/olympic-rings.png',
      headerContentText = 'Olympic Medal Table',
      convertCountryCode = CountryList().getName,
      countryList = CountryList().getCodeList();

let app = document.getElementById('app'),


    header = new utils.DmbElement('h1', { 
        classes: ['ui', 'header']
    }),
    headerImage = new utils.DmbElement('img', { 
        classes: ['ui', 'image'],
        attr: {
            src: headerImageSrc
        }
    }),
    headerContent = new utils.DmbElement('div', { 
        classes: 'content',
        html: headerContentText
    }),


    tableSegment = new utils.DmbElement('div', { 
        classes: ['ui', 'segment']
    }),
    medalsTable = new utils.MedalsTableManager(),


    medalInputContainer = new utils.DmbElement('div', {
        classes: 'countryMedalsInput'
    }),
    // countryLabel = new utils.DmbElement('label', {
    //     classes: ['ui', 'label'],
    //     html: 'Enter country name'
    // }),
    countryDropdown = new utils.DmbDropdown({
        id: 'country',
        name: 'country',
        list: countryList,
        defaultText: 'Select Country',
        flags: true
    }),
    medalInputRow = document.createElement('div'),
    medalTypes = ['Gold', 'Silver', 'Bronze'],
    addCountryButton = new utils.DmbElement('button', {
        classes: ['medium', 'ui', 'button'],
        innerHTML: 'Add / Update Country'
    });



app.classList.add('ui', 'container');

// Insert Header
header.append(headerImage.element);
header.append(headerContent.element);
app.append(header.element);

// Insert Table Container
app.appendChild(tableSegment.element);
tableSegment.append(medalsTable.table.element);



// Insert form
// medalsInput.append(countryLabel.element);
medalInputContainer.append(countryDropdown.element);

medalInputRow.classList.add('medal-inputs');
medalTypes.forEach((medal) => {
    let medalLabel = new utils.DmbElement('label', {
        classes: ['ui', 'label'],
            html: medal,
            for: 'medal-input__' + medal
        }),
        medalInput = new utils.DmbElement('input', {
            classes: ['ui', 'input'],
            attr: {
                type: 'number',
                value: 0,
                min: 0,
                name: 'medal-input__' + medal,
                id: 'medal-input__' + medal
            }
        });

    medalInputRow.append(medalLabel.element);
    medalInputRow.append(medalInput.element);
});

medalInputRow.append(addCountryButton.element);
medalInputContainer.append(medalInputRow);
app.appendChild(medalInputContainer.element);
$('.ui.dropdown').dropdown();

addCountryButton.element.addEventListener('mouseup', (event) => {
    let addMedalsObject = {
        countryCode: document.getElementById('country').value,
        Country: convertCountryCode(document.getElementById('country').value)
    };
    medalTypes.forEach((medal) => {
        addMedalsObject[medal] = document.getElementById('medal-input__' + medal).value
    });

    medalsTable.addRow(addMedalsObject); 
});
