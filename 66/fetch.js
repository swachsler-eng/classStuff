(function () {
    'use strict';
  
    console.log('file start');

    fetch('poeple.json')
        .then((r) => {
            //return r.text();
           return r.json();
        })
        .then(t => {
            console.log(t);
            // const people = JSON.parse(t);
            // console.log(people);
        })
        .catch(e => console.error(e));

    console.log('file end');
    
}());