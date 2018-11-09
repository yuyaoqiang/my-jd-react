import _ from 'lodash';
import  "./scss/index.scss"
function component() {
    debugger;
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'w111111ebpack'], ' ');
    return element;
}
debugger;
console.log(document.body)
document.body.appendChild(component());