// Every callBack is not asynchronous

function fn(callBack) {

    setTimeout(() => {
        callBack();
    }, 0);
}

function fn(callBack) {

    callBack();
}

fn(() => {
    console.log("This is a callback.")
});

console.log("Hello World!");