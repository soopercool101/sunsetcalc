import SolarCalc from 'solar-calc';
import FlatPickr from 'flatpickr';

function component() {
    const element = document.createElement('div');
    FlatPickr(element, {});
    return element;
}
 
document.body.appendChild(component());