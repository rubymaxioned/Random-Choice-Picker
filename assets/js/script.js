//     var input = document.querySelector(".input-text");
//     var mainLi = document.querySelector("ul")
//     // var list = document.querySelectorAll("li");
//     console.log("initial list");
   
//     // console.log(list);
    
//     var updatedList = [];
//     input.addEventListener('keyup', function(event) {
//         if(event.key == ',') {
//             var getInput = event.target.value;
//             // var getInputFinal = [];
//             getInputString = getInput.substring(0,getInput.length-1);
//             // getInputFinal.push(getInputString);
//             // console.log(getInputFinal.length);
                
//                 // for(i=0; i<getInputFinal.length; i++){
//                     var list = document.createElement('li');
//                     // list.classList.add('some');
//                     mainLi.append(list);
//                     list.innerText = this.value;
//                     updatedList.push(list);
//                 // }

//             //     var ranVal = updatedList[Math.floor(Math.random()*updatedList.length)];
//             //     console.log(ranVal);
//             //     ranVal.classList.add('pick');
//             // event.target.value = '';
//             // randomSelect();
//         }
//     })

// console.log(updatedList);
// console.log(getInputFinal);
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

     // console.log("getInputString");
            // console.log(getInputString);
            // console.log(getInputString.length);
            // var separatedInput = getInput.split(',');
            // console.log(separatedInput);



//             var input = document.querySelector(".input-text");
//     var mainLi = document.querySelector("ul")
//     // var list = document.querySelectorAll("li");
//     console.log("initial list");
//     // console.log(list);
    
//     var updatedList = [];
//     input.addEventListener('keyup', function(event) {
//         if(event.key == ',') {
//             var getInput = this.value;
//             var separatedInput = getInput.trim().split(',');
//             console.log(separatedInput);
                
//                 // for(i=0; i<separatedInput.length; i++){
//                     var list = document.createElement('li');
//                     // list.classList.add('some');
//                     mainLi.append(list);
//                     list.innerText = separatedInput;
//                     updatedList.push(list);
//                 // }
//             //     console.log("updated list");
//             //     console.log(updatedList);
//             //     console.log(updatedList.length);
//             //     var ranVal = updatedList[Math.floor(Math.random()*updatedList.length)];
//             //     console.log(ranVal);
//             //     ranVal.classList.add('pick');
//             // event.target.value = '';
//             // randomSelect();
//         }
//     })

// console.log(updatedList);

var input = document.querySelector(".input-text");
    // var mainLi = document.querySelector("ul");
    // var updatedList = [];

    // input.addEventListener('keyup', function(event) {
    //     var current = this.value.trim().split(',');
    //     console.log(current);
    //     var list = document.createElement('li');
    //                         // list.classList.add('some');
    //                         mainLi.append(list);
    //                         list.innerText = current;
    //                         updatedList.push(list);
    // })



  
    var input = document.querySelector(".input-text");
    var mainLi = document.querySelector("ul")
    // var list = document.querySelectorAll("li");
    // console.log(list);
    var counter = 0;
    
    var updatedList = [];
    input.addEventListener('keyup', function(event) {

        // if(event.key == 'Enter') {
        // }
        if(event.key == 'Enter') {
            var getInput = event.target.value;
            var separatedInput = getInput.split(',');
            
            
            for(i=0; i<separatedInput.length; i++){
                var list = document.createElement('li');
                // list.classList.add('some');
                    mainLi.append(list);
                    list.innerText = separatedInput[i];
                    updatedList.push(list);
                }
                
                // console.log("updated list");
                // console.log(updatedList);
                // console.log(updatedList.length);
                // console.log(ranVal);
                event.target.value = '';
                // randomSelect();
                var interval = setInterval(function(){
                    console.log(Math.floor(Math.random()*updatedList.length));
                    var ranVal = updatedList[Math.floor(Math.random()*updatedList.length)];
                    ranVal.classList.add('pick');
                    // console.log(ranVal);
                    setTimeout(function(){
                        ranVal.classList.remove('pick');
                    },100);
                    // clearInterval(interval);
                    if(counter == updatedList.length*2){
                        // if(ranVal.classList.contains('pick')) {
                            // console.log(ranVal);
                            clearInterval(interval);
                            setTimeout(function(){
                                ranVal.classList.add('pick');
                            },100);
                        // }
                    }
                    counter++;
                },200);
            }
            
        })
        
        

        // function randomSelect() {
        //             var times = 30;
        //             var interval = setInterval(function() {
        //             // var random = randomList();
        //             // console.log("random");
        //             // console.log(random)
            
        //             // console.log(random);

        //             console.log(ranVal);
        //             highLight(ranVal);
        //             setTimeout(() => {
        //                 unHighLight(ranVal);
        //             },300);
        //                 clearInterval(interval);
        //                 },300);
        //         }
        
        //         function highLight(ran){
        //                     ranVal.classList.add('pick');
        //                 }
                    
        //                 function unHighLight(ran){
        //                     ranVal.classList.remove('pick');
        //                 } 


//         console.log("initial list");
//         console.log(updatedList);

//         function randomSelect() {
//         var times = 30;
//         var interval = setInterval(function() {
//         var random = randomList();
//         console.log("random");
//         console.log(random)

//         // console.log(random);
//         highLight(random);
//         setTimeout(() => {
//             unHighLight(random);
//         },300);
//             clearInterval(interval);
//             },300);
//     }


// function randomList(){
//         // console.log("updated list");
//         // console.log(updatedList);
//         // var ranLi = document.querySelectorAll("mainLi li");
//         // console.log("ranli");
//         // console.log(ranLi);
//             updatedList[Math.floor(Math.random()*updatedList.length)];
//             // console.log(ranLi[Math.floor(Math.random()*ranLi.length)]);
//             // console.log("ranVal");
//             // console.log(ranVal);
//     }

//     function highLight(ran){
//         ranVal.classList.add('pick');
//     }

//     function unHighLight(ran){
//         ranVal.classList.remove('pick');
//     }