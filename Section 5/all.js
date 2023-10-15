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

Promise.all([1, 'string', true])
    .then(value => {
        console.log(value);
    })

Promise.all([])
    .then(value => {
        console.log(value);
    })

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(value => {

    console.log(value);
})
    .catch(err => {

        console.log(err);
    })
