// var input = document.querySelector(".input-text");
// var mainLi = document.querySelector("ul")
// var list = document.querySelectorAll("li");
// console.log(list);
// var inputVal = document.querySelector(".input-text").value;
// console.log(input.value);
// input.addEventListener('input', function(event) {
    // console.log(event.target.value);
    // var getInput = event.target.value;
        // console.log(getInput);
        // var separatedInput = getInput.split(',');
        // console.log(separatedInput);
    //     if (event.keyCode == 13) {
    //     }
    // input.addEventListener("keydown", myFunction);
    // function myFunction(e) {
    //     // keySpan.innerText = e.key;
    //     // codeSpan.innerText = e.keyCode;
    //     // keycodeSpan.innerText = e.code;
    //     // a.classList.add('hide');
    //     // b.classList.add('show');
    //     // console.log(e);
    //         if (e.keyCode == 13) {
    //     // console.log(e.keyCode);
    //     var getInput = event.target.value;
    //     var separatedInput = getInput.split(',');
    //     console.log(separatedInput);
    // }
    // }
    
    // if (event.target.code == 13) {
    //     console.log(event.code);
    //    
    // })

    // console.log(separatedInput.length);
    // for(i=0; i<separatedInput.length; i++){
    //     list[i].innerText = separatedInput[i].value;
    // }
        // console.log(separatedInput);


    var input = document.querySelector(".input-text");
    var mainLi = document.querySelector("ul")
    // var list = document.querySelectorAll("li");
    console.log("initial list");
    // console.log(list);
    
    var updatedList = [];
    input.addEventListener('keyup', function(event) {
        if(event.key == 'Enter') {
            var getInput = event.target.value;
            var separatedInput = getInput.split(',');
            
                
                for(i=0; i<separatedInput.length; i++){
                    var list = document.createElement('li');
                    list.classList.add('some');
                    mainLi.append(list);
                    list.innerText = separatedInput[i];
                    updatedList.push(list);
                }
                console.log("updated list");
                console.log(updatedList);
                console.log(updatedList.length);
                var ranVal = updatedList[Math.floor(Math.random()*updatedList.length)];
                console.log(ranVal);
                ranVal.classList.add('pick');
            event.target.value = '';
            // randomSelect();
        }
    })

console.log(updatedList);
    // function randomSelect() {
    //     var times = 30;
    //     var interval = setInterval(function () {
    //     var random = randomList();
    //     console.log("random value");

    //     console.log(random);
    //     highLight(random);
    //     setTimeout(() => {
    //         unHighLight(random);
    //     },300);
    //         clearInterval(interval);
    //         },300);
    // }

    // function randomList(){
    //     // console.log("updated list");
    //     // console.log(updatedList);
    //     var ranLi = document.querySelectorAll("mainLi li");
    //     console.log("ranli");
    //     console.log(ranLi);
    //         var ranVal = ranLi[Math.floor(Math.random()*ranLi.length)];
    //         // console.log(ranLi[Math.floor(Math.random()*ranLi.length)]);
    //         console.log(ranVal);
    // }

    // function highLight(ran){
    //     ran.classList.add('pick');
    // }

    // function unHighLight(ran){
    //     ran.classList.remove('pick');
    // }