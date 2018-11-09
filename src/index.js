import _ from 'lodash';
import  "./scss/index.scss"
import  "./scss/index1.scss"
function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());