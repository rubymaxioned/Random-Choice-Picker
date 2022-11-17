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
    var list = document.querySelectorAll("li");
    console.log("initial list");
    console.log(list);
    

    input.addEventListener('keyup', function(event) {
        if(event.key == 'Enter') {
            var getInput = event.target.value;
            var separatedInput = getInput.split(',');

            var li = '';
            separatedInput.forEach(function(item) {
                // console.log(item);
                li += "<li>" + item + "</li>";
                // console.log(li);
                randomSelect();
            })

         
            mainLi.innerHTML = li;
            // console.log(mainLi.innerHTML);
            event.target.value = '';
            // var interval = setInterval(function () {
            //     separatedInput.forEach(function(item) {
            //         // li.classList.add('pick');
            //     })
            // // clearInterval(interval);
            // },1000);

        }
    })

    function randomSelect() {
        var times = 30;
        var interval = setInterval(function () {
        var random = randomList();
        // console.log(random);
        highLight(random);
        setTimeout(() => {
            unHighLight(random);
        },300);
            clearInterval(interval);
            },300);
    }

    function randomList(){
        // list.forEach(function(count){
            console.log("updated list");
            console.log(list);
            console.log("working");
            // list.classList.add('pick');
            console.log(list[Math.floor(Math.random()*list.length)]);
            console.log(list);
        // })
    }
    // console.log(list);

    function highLight(ran){
        ran.classList.add('pick');
    }

    function unHighLight(ran){
        ran.classList.remove('pick');
    }