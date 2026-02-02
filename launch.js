//console.log("First Line")
//setTimeout(()=>{
//    console.log("After 2 Sec")
//}, 2000)
//console.log("Second Line")

//setTimeout(()=>{
//    alert("Alert after 3 sec")
//},3*1000)

//const timerId=setInterval(()=>{
//    console.log("Hello Students")
//}, 1000)

//console.log(timerId)
//setTimeout(()=>{
//    clearInterval(timerId)
//}, 10*1000)

//let count = 1

//const countInterval = setInterval(()=>{
//    console.log(count);
//    count ++;

//    if (count > 10){
//        clearInterval(countInterval);
//    }
//}, 10);

//function print(name){
//    console.log("Hello Students!")
//}

//function greet(num){
//    console.log("Welcome to the class!")
//    setTimeout(()=>{
//        console.log("Inside SetTimeout")
//        let firstName="Alex"
//        num(firstName)
//    }, 2000);
//}

//greet(print)


console.log("Starting homework...");
setTimeout(()=>{
    console.log("Homework Done!...");
    console.log("Starting Dinner...");

    setTimeout(()=>{
        console.log("Dinner Done!");
        console.log("Getting Ready to go out...");
    setTimeout(()=>{
        console.log("going to the playground!");
    }, 1000);
    }, 1500);
}, 2000);

function finishHomework(callback) {
    console.log("Starting homework...");
    setTimeout(() => {
        console.log("Homework Done!");
        callback();
    }, 2000);
}

function eatDinner(callback) {
    console.log("Starting Dinner...");
    setTimeout(() => {
        console.log("Dinner Done!");
        callback();
    }, 1500);
}

function goToPlayground() {
    console.log("Going to the playground!");
}
finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    });
});