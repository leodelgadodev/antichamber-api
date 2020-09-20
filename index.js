const { antichamberAPI } = require('./antichamberAPI');

console.log(antichamberAPI);
console.log('test');

/*

############### STEP 1
##### Go to https://antichamber.fandom.com/wiki/List_of_Signs

############### STEP 2
##### Open console in Web Inspector and copypaste:

var rows = Array.prototype.slice.call(document.getElementsByClassName('wikitable')[0].rows).map((tr) => Array.prototype.slice.call(tr.children));
rows.shift();
var tmpRowsArr = [];
rows.forEach((tr) => {
    let imgUrl = tr[1].getElementsByTagName('a')[0].href;
    let captionMsg = tr[2].innerHTML
    let obj = {
        id: tr[0].innerHTML.slice(0,1), 
        img: imgUrl.slice(0, imgUrl.length - 1), 
        caption: captionMsg.slice(0, captionMsg.length - 1)
    }

    tmpRowsArr.push(obj);
})

############### STEP 3 (Optional)
##### Save array to localStorage for easier extraction, and copypaste from there

var tmpRowsJSON = { rows: tmpRowsArr }
localStorage.setItem('extractingRows', JSON.stringify(tmpRowsJSON));

############### STEP 4
##### Profit

*/

