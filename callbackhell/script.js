fetch('https://restcountries.com/v3.1/capital/delhi').then((d)=>
     d.json()
).then((data)=>{
    // console.log(data)
    console.log(data[0].currencies.INR.symbol)
}).catch((er)=>{
    console.log(er);
});