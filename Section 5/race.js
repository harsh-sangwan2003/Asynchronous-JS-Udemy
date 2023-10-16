let askJohn = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep I got one extra pen.'), 3000);
    });
}

let askEugene = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sorry man, got only one.'), 5000);
    });
}

let askSusy = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Promise rejected.'), 2000);
    });
}

Promise.race([askJohn(), askEugene(), askSusy()])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });