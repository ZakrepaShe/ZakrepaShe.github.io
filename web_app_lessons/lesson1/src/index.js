import {DEPARTMENT, MONTH, totalAmount} from './dataFormatter';
import {formHTMLAmountByParam} from './markupFormer';

document.getElementById('total').innerText = totalAmount().toFixed(2);
document.getElementById(DEPARTMENT).innerHTML = formHTMLAmountByParam(DEPARTMENT);
document.getElementById(MONTH).innerHTML = formHTMLAmountByParam(MONTH);