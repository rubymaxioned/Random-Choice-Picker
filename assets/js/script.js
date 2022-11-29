
var input = document.querySelector(".input-text");
var mainLi = document.querySelector("ul");
var counter = 0;

input.addEventListener('keyup', function (event) {
    mainLi.innerHTML = "";
    var getInput = event.target.value;
    var getInputString = getInput.trim().split(',');
    var lastChar = getInputString.slice(-1);
    if (lastChar == '') { 
        getInputString = getInputString.slice(0, -1); // trim last character
    }
    
    getInputString.forEach(function(index){
        var list = document.createElement('li');
        list.innerText = index;  
        mainLi.append(list);
    })
    var updatedList = getInputString;  
    
    if (event.key == 'Enter') {
        input.innerText = "";
        var interval = setInterval(function () {
            var ranVal = mainLi.children[Math.floor(Math.random() * mainLi.children.length)];
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
