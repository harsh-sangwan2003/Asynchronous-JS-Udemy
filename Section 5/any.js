let askJohn = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Yep I got one extra pen.'), 3000);
    });
}

let askEugene = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 5000);
    });
}

let askSusy = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Promise rejected.'), 2000);
    });
}

Promise.any([askJohn(), askEugene(), askSusy()])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

Promise.any([]).then((result) => { }).catch((error) => {
    console.log(error);
});