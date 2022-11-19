
var input = document.querySelector(".input-text");
var mainLi = document.querySelector("ul");

var counter = 0;
var updatedList = [];

function orangeButton(some) {
    var commaSeparatedInput = some.split(',');
    var list = document.createElement('li');
    mainLi.append(list);
    list.innerText = commaSeparatedInput.pop();
    updatedList.push(list);
}

input.addEventListener('keyup', function (event) {
    var getInput = event.target.value;
    if (event.key == ',') {
        getInputString = getInput.slice(0, getInput.length - 1);
        orangeButton(getInputString);
    }

    if (event.key == 'Enter') {
        var separatedInput = getInput.split(',');
        var list = document.createElement('li');
        mainLi.append(list);
        list.innerText = separatedInput[separatedInput.length - 1];
        updatedList.push(list);
        event.target.value = '';
        var interval = setInterval(function () {
            var ranVal = updatedList[Math.floor(Math.random() * updatedList.length)];
            ranVal.classList.add('pick');
            setTimeout(function () {
                ranVal.classList.remove('pick');
            }, 100);
            if (counter == updatedList.length * 2) {
                clearInterval(interval);
                setTimeout(function () {
                    ranVal.classList.add('pick');
                }, 100);
            }

            counter++;
        }, 200);
    }

})