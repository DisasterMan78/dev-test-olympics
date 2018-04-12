/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/drawtest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/country-list/country-list.js":
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./data.json */ "./node_modules/country-list/data.json")

/**
 * Precompute name and code lookups.
 */
var nameMap = {}
var codeMap = {}
data.forEach(function (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
})

module.exports = CountryList
function CountryList () {
  if (!(this instanceof CountryList)) return new CountryList()
};

CountryList.prototype.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

CountryList.prototype.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

CountryList.prototype.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

CountryList.prototype.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

CountryList.prototype.getCodeList = function () {
  return codeMap
}

CountryList.prototype.getNameList = function () {
  return nameMap
}

CountryList.prototype.getData = function getData () {
  return data
}


/***/ }),

/***/ "./node_modules/country-list/data.json":
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, default */
/***/ (function(module) {

module.exports = [{"code":"AF","name":"Afghanistan"},{"code":"AX","name":"Åland Islands"},{"code":"AL","name":"Albania"},{"code":"DZ","name":"Algeria"},{"code":"AS","name":"American Samoa"},{"code":"AD","name":"Andorra"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AQ","name":"Antarctica"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AR","name":"Argentina"},{"code":"AM","name":"Armenia"},{"code":"AW","name":"Aruba"},{"code":"AU","name":"Australia"},{"code":"AT","name":"Austria"},{"code":"AZ","name":"Azerbaijan"},{"code":"BS","name":"Bahamas"},{"code":"BH","name":"Bahrain"},{"code":"BD","name":"Bangladesh"},{"code":"BB","name":"Barbados"},{"code":"BY","name":"Belarus"},{"code":"BE","name":"Belgium"},{"code":"BZ","name":"Belize"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BT","name":"Bhutan"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BW","name":"Botswana"},{"code":"BV","name":"Bouvet Island"},{"code":"BR","name":"Brazil"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BG","name":"Bulgaria"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"KH","name":"Cambodia"},{"code":"CM","name":"Cameroon"},{"code":"CA","name":"Canada"},{"code":"CV","name":"Cape Verde"},{"code":"KY","name":"Cayman Islands"},{"code":"CF","name":"Central African Republic"},{"code":"TD","name":"Chad"},{"code":"CL","name":"Chile"},{"code":"CN","name":"China"},{"code":"CX","name":"Christmas Island"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CO","name":"Colombia"},{"code":"KM","name":"Comoros"},{"code":"CG","name":"Congo"},{"code":"CD","name":"Congo, the Democratic Republic of the"},{"code":"CK","name":"Cook Islands"},{"code":"CR","name":"Costa Rica"},{"code":"CI","name":"Côte d'Ivoire"},{"code":"HR","name":"Croatia"},{"code":"CU","name":"Cuba"},{"code":"CW","name":"Curaçao"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czech Republic"},{"code":"DK","name":"Denmark"},{"code":"DJ","name":"Djibouti"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"EC","name":"Ecuador"},{"code":"EG","name":"Egypt"},{"code":"SV","name":"El Salvador"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"ER","name":"Eritrea"},{"code":"EE","name":"Estonia"},{"code":"ET","name":"Ethiopia"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FO","name":"Faroe Islands"},{"code":"FJ","name":"Fiji"},{"code":"FI","name":"Finland"},{"code":"FR","name":"France"},{"code":"GF","name":"French Guiana"},{"code":"PF","name":"French Polynesia"},{"code":"TF","name":"French Southern Territories"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GE","name":"Georgia"},{"code":"DE","name":"Germany"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GR","name":"Greece"},{"code":"GL","name":"Greenland"},{"code":"GD","name":"Grenada"},{"code":"GP","name":"Guadeloupe"},{"code":"GU","name":"Guam"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GN","name":"Guinea"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HT","name":"Haiti"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"VA","name":"Holy See (Vatican City State)"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong"},{"code":"HU","name":"Hungary"},{"code":"IS","name":"Iceland"},{"code":"IN","name":"India"},{"code":"ID","name":"Indonesia"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IQ","name":"Iraq"},{"code":"IE","name":"Ireland"},{"code":"IM","name":"Isle of Man"},{"code":"IL","name":"Israel"},{"code":"IT","name":"Italy"},{"code":"JM","name":"Jamaica"},{"code":"JP","name":"Japan"},{"code":"JE","name":"Jersey"},{"code":"JO","name":"Jordan"},{"code":"KZ","name":"Kazakhstan"},{"code":"KE","name":"Kenya"},{"code":"KI","name":"Kiribati"},{"code":"KP","name":"Korea, Democratic People's Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KG","name":"Kyrgyzstan"},{"code":"LA","name":"Lao People's Democratic Republic"},{"code":"LV","name":"Latvia"},{"code":"LB","name":"Lebanon"},{"code":"LS","name":"Lesotho"},{"code":"LR","name":"Liberia"},{"code":"LY","name":"Libya"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"MO","name":"Macao"},{"code":"MK","name":"Macedonia, the Former Yugoslav Republic of"},{"code":"MG","name":"Madagascar"},{"code":"MW","name":"Malawi"},{"code":"MY","name":"Malaysia"},{"code":"MV","name":"Maldives"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"MH","name":"Marshall Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MU","name":"Mauritius"},{"code":"YT","name":"Mayotte"},{"code":"MX","name":"Mexico"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"MD","name":"Moldova, Republic of"},{"code":"MC","name":"Monaco"},{"code":"MN","name":"Mongolia"},{"code":"ME","name":"Montenegro"},{"code":"MS","name":"Montserrat"},{"code":"MA","name":"Morocco"},{"code":"MZ","name":"Mozambique"},{"code":"MM","name":"Myanmar"},{"code":"NA","name":"Namibia"},{"code":"NR","name":"Nauru"},{"code":"NP","name":"Nepal"},{"code":"NL","name":"Netherlands"},{"code":"NC","name":"New Caledonia"},{"code":"NZ","name":"New Zealand"},{"code":"NI","name":"Nicaragua"},{"code":"NE","name":"Niger"},{"code":"NG","name":"Nigeria"},{"code":"NU","name":"Niue"},{"code":"NF","name":"Norfolk Island"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"NO","name":"Norway"},{"code":"OM","name":"Oman"},{"code":"PK","name":"Pakistan"},{"code":"PW","name":"Palau"},{"code":"PS","name":"Palestine, State of"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua New Guinea"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PH","name":"Philippines"},{"code":"PN","name":"Pitcairn"},{"code":"PL","name":"Poland"},{"code":"PT","name":"Portugal"},{"code":"PR","name":"Puerto Rico"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"BL","name":"Saint Barthélemy"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"LC","name":"Saint Lucia"},{"code":"MF","name":"Saint Martin (French part)"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"WS","name":"Samoa"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SA","name":"Saudi Arabia"},{"code":"SN","name":"Senegal"},{"code":"RS","name":"Serbia"},{"code":"SC","name":"Seychelles"},{"code":"SL","name":"Sierra Leone"},{"code":"SG","name":"Singapore"},{"code":"SX","name":"Sint Maarten (Dutch part)"},{"code":"SK","name":"Slovakia"},{"code":"SI","name":"Slovenia"},{"code":"SB","name":"Solomon Islands"},{"code":"SO","name":"Somalia"},{"code":"ZA","name":"South Africa"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"SS","name":"South Sudan"},{"code":"ES","name":"Spain"},{"code":"LK","name":"Sri Lanka"},{"code":"SD","name":"Sudan"},{"code":"SR","name":"Suriname"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SZ","name":"Swaziland"},{"code":"SE","name":"Sweden"},{"code":"CH","name":"Switzerland"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TJ","name":"Tajikistan"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"TH","name":"Thailand"},{"code":"TL","name":"Timor-Leste"},{"code":"TG","name":"Togo"},{"code":"TK","name":"Tokelau"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TN","name":"Tunisia"},{"code":"TR","name":"Turkey"},{"code":"TM","name":"Turkmenistan"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TV","name":"Tuvalu"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukraine"},{"code":"AE","name":"United Arab Emirates"},{"code":"GB","name":"United Kingdom"},{"code":"US","name":"United States"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VU","name":"Vanuatu"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VN","name":"Viet Nam"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"WF","name":"Wallis and Futuna"},{"code":"EH","name":"Western Sahara"},{"code":"YE","name":"Yemen"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}];

/***/ }),

/***/ "./src/drawtest.js":
/*!*************************!*\
  !*** ./src/drawtest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

var utils = _interopRequireWildcard(_utils);

var _countryList = __webpack_require__(/*! country-list */ "./node_modules/country-list/country-list.js");

var _countryList2 = _interopRequireDefault(_countryList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var headerImageSrc = '/src/images/olympic-rings.png',
    headerContentText = 'Olympic Medal Table',
    convertCountryCode = (0, _countryList2.default)().getName,
    countryList = (0, _countryList2.default)().getCodeList();

var app = document.getElementById('app'),
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
medalTypes.forEach(function (medal) {
    var medalLabel = new utils.DmbElement('label', {
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

addCountryButton.element.addEventListener('mouseup', function (event) {
    var addMedalsObject = {
        countryCode: document.getElementById('country').value,
        Country: convertCountryCode(document.getElementById('country').value)
    };
    medalTypes.forEach(function (medal) {
        addMedalsObject[medal] = document.getElementById('medal-input__' + medal).value;
    });

    medalsTable.addRow(addMedalsObject);
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// DMB is my initials - this namespaces the class to avoid clashes

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DmbElement = function () {
    function DmbElement(elementType, props) {
        var _this = this;

        _classCallCheck(this, DmbElement);

        // props: {
        //     classes: array or comma separated string,
        //     attr: object of element attributes { attributeName: value },
        //     innerHTML/html: element innerHTML,
        //     any other property: Class will attempt to set the given property of the element
        // }

        this.element = document.createElement(elementType);
        this.props = props || {};

        for (var prop in this.props) {
            switch (prop) {
                case 'classes':

                    if (typeof this.props.classes === 'string') {
                        if (this.props.classes.indexOf(' ') > -1) {
                            this.props.classes = this.props.classes.split(' ');
                        } else {
                            this.element.classList.add(this.props.classes);
                        }
                    }
                    if (Array.isArray(this.props.classes)) {
                        this.props.classes.forEach(function (value) {
                            _this.element.classList.add(value);
                        });
                    }
                    break;
                case 'attr':
                    if (_typeof(this.props.attr) === 'object') {
                        for (var key in this.props.attr) {
                            this.element.setAttribute(key, this.props.attr[key]);
                        }
                    }
                    break;
                case 'innerHTML':
                case 'html':
                    this.element.innerHTML = this.props[prop];
                    break;
                default:
                    this.element[prop] = this.props[prop];
                    break;
            }
        }
    }

    _createClass(DmbElement, [{
        key: 'append',
        value: function append(element) {
            this.element.appendChild(element);
        }
    }, {
        key: 'prepend',
        value: function prepend(element) {
            this.element.prepend(element);
        }
    }]);

    return DmbElement;
}();

var DmbDropdown =
// Props:{
//     list: values/labels
//     defaultText: Displayed when no value selected
// }
// List structure:
// props.list = {
//     value: label
// }
// To implement Semantic-UI Dropdown Flag options, value should be 
// the two letter country code
function DmbDropdown(props) {
    _classCallCheck(this, DmbDropdown);

    this.dropdown = new DmbElement('div', {
        classes: 'ui fluid search selection dropdown'
    });

    this.element = this.dropdown.element;
    this.props = props || {
        defaultText: 'Select...'
    };

    this.input = new DmbElement('input', {
        attr: {
            id: this.props.id,
            name: this.props.name,
            type: 'hidden'
        }
    });

    this.icon = new DmbElement('i', {
        classes: ['dropdown', 'icon']
    });

    this.defaultText = new DmbElement('div', {
        classes: ['default', 'text'],
        innerHTML: this.props.defaultText
    });

    this.dropdown.append(this.input.element);
    this.dropdown.append(this.icon.element);
    this.dropdown.append(this.defaultText.element);

    this.menu = new DmbElement('div', {
        classes: 'menu'
    });

    this.element.appendChild(this.menu.element);

    for (var value in this.props.list) {
        var label = this.props.list[value],
            item = new DmbElement('div', {
            classes: 'item',
            attr: {
                'data-value': value
            },
            innerHTML: label
        });

        if (this.props.flags === true) {
            var flag = new DmbElement('i', {
                classes: [value, 'flag']
            });

            item.prepend(flag.element);
        }

        this.menu.append(item.element);
    }
};

var MedalsTableManager = function () {
    function MedalsTableManager() {
        var _this2 = this;

        _classCallCheck(this, MedalsTableManager);

        this.data = [];
        this.sort = {
            column: 'Gold',
            order: 'desc'
        };

        this.columns = ['Country', 'Gold', 'Silver', 'Bronze'];

        this.table = new DmbElement('table', {
            id: 'medal-table'
        });
        var trth = new DmbElement('tr');
        this.columns.forEach(function (column) {
            var thisColumn = new DmbElement('th', {
                id: 'medal-table__' + column,
                innerHTML: column
            });
            _this2.addSorter(thisColumn);
            trth.append(thisColumn.element);
        });
        this.table.append(trth.element);
    }

    _createClass(MedalsTableManager, [{
        key: 'addSorter',
        value: function addSorter(column) {
            var _this3 = this;

            var columnName = column.element.id.replace('medal-table__', ''),
                sorter = {
                ascending: new DmbElement('button', {
                    id: columnName + '__button-sort--ascending',
                    classes: 'mini ui icon button'
                }),
                descending: new DmbElement('button', {
                    id: columnName + '__button-sort--descending',
                    classes: 'mini ui icon button'
                })
            };

            sorter.descending.append(new DmbElement('i', {
                classes: 'angle down icon'
            }).element);
            sorter.descending.element.addEventListener('mouseup', function (event) {
                _this3.sort = {
                    column: columnName,
                    order: 'desc'
                };
                _this3.sortData();
            });

            sorter.ascending.append(new DmbElement('i', {
                classes: 'angle up icon'
            }).element);
            sorter.ascending.element.addEventListener('mouseup', function (event) {
                _this3.sort = {
                    column: columnName,
                    order: 'asc'
                };
                _this3.sortData();
            });

            column.append(sorter.descending.element);
            column.append(sorter.ascending.element);
        }
    }, {
        key: 'addRow',
        value: function addRow(newData) {
            if (newData.Country !== undefined) {
                // Remove matching countries from existing data
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i]['Country'] === newData.Country) {
                        this.data.splice(i, 1);
                        break;
                    }
                }
                this.data.push(newData);
                this.sortData();
            }
        }
    }, {
        key: 'sortData',
        value: function sortData() {
            var _this4 = this;

            this.data.sort(function (obj1, obj2) {
                var sortFirst = obj1,
                    sortSecond = obj2;
                if (_this4.sort.order === 'desc') {
                    sortFirst = obj2, sortSecond = obj1;
                }
                if (_this4.sort.column !== 'Country' && sortFirst[_this4.sort.column] === sortSecond[_this4.sort.column]) {
                    var secondarySort = void 0,
                        tertiarySort = void 0;

                    switch (_this4.sort.column) {
                        case 'Gold':
                            secondarySort = 'Silver', tertiarySort = 'Bronze';
                            break;
                        case 'Silver':
                            secondarySort = 'Gold', tertiarySort = 'Bronze';
                            break;
                        case 'Bronze':
                            secondarySort = 'Gold', tertiarySort = 'Silver';
                            break;
                    }
                    if (sortFirst[secondarySort] === sortSecond[secondarySort]) {
                        return _this4.performSort(sortFirst, sortSecond, tertiarySort);
                    }
                    return _this4.performSort(sortFirst, sortSecond, secondarySort);
                }
                return _this4.performSort(sortFirst, sortSecond, _this4.sort.column);
            });
            this.displayRows();
        }
    }, {
        key: 'performSort',
        value: function performSort(sortFirst, sortSecond, column) {
            if (sortFirst[column] < sortSecond[column]) {
                return -1;
            }
            if (sortFirst[column] > sortSecond[column]) {
                return 1;
            }
            return 0;
        }
    }, {
        key: 'displayRows',
        value: function displayRows() {
            var _this5 = this;

            var tableRows = document.querySelectorAll('#medal-table tr.medal-table__data-row');
            tableRows.forEach(function (row) {
                row.parentNode.removeChild(row);
            });

            console.log(this.data, this.columns);

            this.data.forEach(function (row) {
                var trtd = new DmbElement('tr', {
                    classes: ['medal-table__data-row', row['countryCode']]
                });
                _this5.columns.forEach(function (column) {
                    var value = void 0,
                        flag = null;
                    if (column === 'Country') {
                        flag = new DmbElement('i', {
                            classes: [row['countryCode'], 'flag']
                        });
                        value = row[column];
                    } else {
                        value = row[column];
                    }
                    var thisColumn = new DmbElement('td', {
                        id: 'medal-table__' + column,
                        innerHTML: value
                    });;
                    if (flag !== null) {
                        thisColumn.prepend(flag.element);
                    }
                    trtd.append(thisColumn.element);
                    _this5.table.append(trtd.element);
                });
            });
        }
    }]);

    return MedalsTableManager;
}();

exports.DmbElement = DmbElement;
exports.DmbDropdown = DmbDropdown;
exports.MedalsTableManager = MedalsTableManager;

/***/ })

/******/ });
//# sourceMappingURL=drawtest.bundle.js.map