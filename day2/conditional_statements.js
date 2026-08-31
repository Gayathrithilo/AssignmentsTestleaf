function launchBrowser(browserName){
    if(browserName === "Chrome"){
        console.log(browserName);
    }
    else {
        console.log("otherwise");
    }
}
launchBrowser("Chrome");
launchBrowser("Firefox");


function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("smoke test");
            break;
        case "sanity":
            console.log("sanity test");
            break;
        case "regression":
            console.log("regression test");
            break;
        default:
            console.log("Default smoke test");
    }
}

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("functional");