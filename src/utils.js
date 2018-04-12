'use strict';

// DMB is my initials - this namespaces the class to avoid clashes
class DmbElement {

    constructor(elementType, props) {
        // props: {
        //     classes: array or comma separated string,
        //     attr: object of element attributes { attributeName: value },
        //     innerHTML/html: element innerHTML,
        //     any other property: Class will attempt to set the given property of the element
        // }

        this.element = document.createElement(elementType);
        this.props = props || {};

        for (let prop in this.props) {
            switch(prop) {
                case 'classes':

                    if (typeof this.props.classes === 'string') {
                        if (this.props.classes.indexOf(' ') > -1) {
                            this.props.classes = this.props.classes.split(' ');
                        } else {
                            this.element.classList.add(this.props.classes);
                        }
                    }
                    if (Array.isArray(this.props.classes)) {
                        this.props.classes.forEach((value) => {
                            this.element.classList.add(value);
                        });
                    }
                    break;
                case 'attr':
                    if (typeof this.props.attr === 'object') {
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

    append(element) {
        this.element.appendChild(element);
    }

    prepend(element) {
        this.element.prepend(element);
    }

}

class DmbDropdown {
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
    constructor(props) {
        this.dropdown = new DmbElement('div', {
            classes: 'ui fluid search selection dropdown',
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

        for (let value in this.props.list) {
            let label = this.props.list[value],
                item = new DmbElement('div', {
                    classes: 'item',
                    attr: {
                        'data-value': value
                    },
                    innerHTML: label
                });

            if (this.props.flags === true) {
                let flag = new DmbElement('i', {
                    classes: [value, 'flag']
                });

                item.prepend(flag.element);
            }

            this.menu.append(item.element);
        }

    }
}

class MedalsTableManager {
    constructor() {
        this.data = [];
        this.sort = {
            column: 'Gold',
            order: 'desc'
        }

        this.columns = ['Country', 'Gold', 'Silver', 'Bronze'];

        this.table = new DmbElement('table', {
            id: 'medal-table'
        });
        let trth = new DmbElement('tr');
        this.columns.forEach((column =>{
            let thisColumn = new DmbElement('th', {
                id: 'medal-table__' + column,
                innerHTML: column
            });
            this.addSorter(thisColumn);
            trth.append(thisColumn.element);
        }));
        this.table.append(trth.element);
    }

    addSorter(column) {
        let columnName = column.element.id.replace('medal-table__', ''),
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
        sorter.descending.element.addEventListener('mouseup', (event) => {
            this.sort = {
                column: columnName,
                order: 'desc'
            }
            this.sortData();
        });

        sorter.ascending.append(new DmbElement('i', {
            classes: 'angle up icon'
        }).element);
        sorter.ascending.element.addEventListener('mouseup', (event) => {
            this.sort = {
                column: columnName,
                order: 'asc'
            }
            this.sortData();
        });

        column.append(sorter.descending.element);
        column.append(sorter.ascending.element);
    }

    addRow(newData) {
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

    sortData() {
        this.data.sort((obj1, obj2) => {
            let sortFirst = obj1,
                sortSecond = obj2;
            if (this.sort.order === 'desc') {
                sortFirst = obj2,
                sortSecond = obj1;
            }
            if (this.sort.column !== 'Country' && sortFirst[this.sort.column] === sortSecond[this.sort.column]) {
                let secondarySort,
                    tertiarySort;

                switch (this.sort.column) {
                    case 'Gold':
                        secondarySort = 'Silver',
                        tertiarySort = 'Bronze';
                        break;
                    case 'Silver':
                        secondarySort = 'Gold',
                        tertiarySort = 'Bronze';
                        break;
                    case 'Bronze':
                        secondarySort = 'Gold',
                        tertiarySort = 'Silver';
                        break;
                }
                if (sortFirst[secondarySort] === sortSecond[secondarySort]) {
                    return this.performSort(sortFirst, sortSecond, tertiarySort);
                }
                return this.performSort(sortFirst, sortSecond, secondarySort);
            }
            return this.performSort(sortFirst, sortSecond, this.sort.column);
        })
        this.displayRows();
    }

    performSort(sortFirst, sortSecond, column) {
        if (sortFirst[column] < sortSecond[column]) {
            return -1
        }
        if (sortFirst[column] > sortSecond[column]) {
            return 1
        }
        return 0;
    }

    displayRows() {
        let tableRows = document.querySelectorAll('#medal-table tr.medal-table__data-row');
        tableRows.forEach((row) => {
            row.parentNode.removeChild(row);
        });

        console.log(this.data, this.columns)

        this.data.forEach((row) => {
            let trtd = new DmbElement('tr', {
                classes: ['medal-table__data-row', row['countryCode']]
            });
            this.columns.forEach((column =>{
                let value,
                    flag = null;
                if (column === 'Country') {
                    flag  = new DmbElement('i', {
                        classes: [row['countryCode'], 'flag']
                    });
                    value = row[column];
                } else {
                    value = row[column];
                }
                let thisColumn = new DmbElement('td', {
                    id: 'medal-table__' + column,
                    innerHTML: value
                });;
                if(flag !== null){
                    thisColumn.prepend(flag.element);
                }
                trtd.append(thisColumn.element);
                this.table.append(trtd.element);
            }));
        })
    }
}

export { DmbElement, DmbDropdown, MedalsTableManager };