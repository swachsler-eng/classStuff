(function () {
    'use strict';
    const request = new XMLHttpRequest();
    
    request.open('GET', 'test.html');

    request.send();
})();