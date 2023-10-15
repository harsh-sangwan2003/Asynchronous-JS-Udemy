function askFirstDealer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(8000);
        }, 3000);
    })
}

function askSecondDealer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(12000);
        }, 5000);
    })
}

function askThirdDealer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(10000);
        }, 8000);
    })
}

Promise.allSettled([askFirstDealer(), askSecondDealer(), askThirdDealer()])
.then(values=>{
    console.log(values);
});