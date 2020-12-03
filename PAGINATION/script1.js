const tableContainer = createEle('div','container','tableContainer');
const table = createEle('table','table table-striped table-inverse','our-table');
const tableHead = createEle('thead','','tableHead');
const tableRow = createEle('tr','','tableRow');

const tableH1 = createEle('th','','th1');
const tableH1Txt = document.createTextNode('Id');
tableH1.append(tableH1Txt);

const tableH2 = createEle('th','','th2');
const tableH2Txt = document.createTextNode('Name');
tableH2.append(tableH2Txt);

const tableH3 = createEle('th','','th3');
const tableH3Txt = document.createTextNode('Email');
tableH3.append(tableH3Txt);

tableRow.append(tableH1, tableH2, tableH3);
tableHead.append(tableRow)

const tableBody = createEle('tbody','','table-body');

table.append(tableHead, tableBody);

tableContainer.append(table);

const pageDiv = createEle('div','container','pageDiv');
const wrapper = createEle('div','','pagination-wrapper');
pageDiv.append(wrapper);

document.body.append(tableContainer, pageDiv);

function createEle(ele, eleClass='', eleId=''){
    const element = document.createElement(ele);
    element.setAttribute('class', eleClass);
    element.setAttribute('id', eleId); 
    return element;
  } 