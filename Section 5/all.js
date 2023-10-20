function askFirstDealer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject(1000);
        }, 3000);
    })
}

function askSecondDealer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(2000);
        }, 5000);
    })
}

function askThirdDealer() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(3000);
        }, 8000);
    })
}

// Promise.all([1, 'string', true])
//     .then(value => {
//         console.log(value);
//     })

// Promise.all([])
//     .then(value => {
//         console.log(value);
//     })

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(value => {

    console.log(value);
})
    .catch(err => {

        console.log(err);
    })
