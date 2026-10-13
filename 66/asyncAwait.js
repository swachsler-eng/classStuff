//(async function () {
     console.log('file start');

    //function doIt() {
        try {
            const r = await fetch('poeple.json');
            console.log(r);
            const text = await r.text();
            console.log(text);
        } catch (e) {
            console.error(e);
        }
    //}

   // doIt();
    console.log('file end');
//}());