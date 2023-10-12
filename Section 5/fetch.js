const pr = fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=4df964e7');

pr.then(result=>{

    console.log(result);
})