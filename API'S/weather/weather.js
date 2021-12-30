//send http request get country details
//create div(class=row) in html inside body
//for(JSONDATA.LENGTH){
    // <h1 class="text-center" id='title'>RESTCOUNTRIES & WEATHER</h1>

    var h=document.createElement('h1')
    h.setAttribute("id","title")
    h.classList.add("text-center")
    h.innerText="RESTCOUNTRIES & WEATHER"
    document.body.append(h)


    var div1=document.createElement('div')
    div1.classList.add('container')
    document.body.appendChild(div1)
    
    
    var row=document.createElement('div')
    row.classList.add('row')
    // row.innerText="hello"
    div1.appendChild(row)
    
    fetch('https://restcountries.com/v3.1/all')
    .then((d)=>d.json())
    .then((data)=>{
        console.log(data)
        console.log(data.length)
        console.log(data[2].flag)
        for(let i=0;i<data.length;i++){
            //console.log(data[i])
            // a=data[i].capital
            row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
            <div class="card h-100 ">
           <div class="card-header text-center"> ${data[i].capital}<div>
           <img src=${data[i].flags.png} class="card-img-top"> 
           <div class=" card-body ">
            <div class = " card-text " >Native Name:${data[i].nativeName} <br> Region:${data[i].region} <BR>Population:${data[i].population} </div>
            
            <button onclick='check("${data[i].capital}","ans${i}")'">Click for weather</button>
            <div id="ans${i}"></div>
            </div>
            </div>
            </div>`
        }
    
    
    })
    .catch((er)=>{
        console.log("error")
    })
    
    
    
    
    function check(a,i){
        console.log(i)
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=46b7aa41bbc315e0b4b9b9161e920dc2")
        .then((b)=>b.json())
        .then((bdata)=>{
            var e=bdata.weather[0].description    
            console.log(e)
            document.getElementById(i).innerHTML=e
        })
    }
    
    
    



// let title = document.createElement("H1");
// title.setAttribute("id" , "title");
// title.setAttribute("class" , "text-center");
// title.innerText="Weather of Rest Countries";
// document.body.append(title);
// // heading
// let cont = document.createElement("div");
// cont.setAttribute("class" , "container");
// document.body.append(cont);
// // div section with class container
// let row = document.createElement("div");
// row.setAttribute("class" , "row");

// cont.appendChild(row);
// // div2 section inside class container
// let col = document.createElement("div");
// col.setAttribute("class" , "col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center a" );
// col.setAttribute('id','col')
// row.appendChild(col);
// // div3 section inside class container1 with column
// let div1 = document.createElement("div");
// div1.setAttribute("class" , "card h-100");
// col.appendChild(div1);
// // div4 section inside class container2 with column (card)
// /*let div1c5 = document.createElement("div");
// div1c5.setAttribute("class" , "card h-100");
// div1c2.appendChild(div1c5);
// // div4 section inside class container2 with column (card)*/
// let div1ch = document.createElement("div");
// div1ch.setAttribute("class" , "card-header h3");
// div1ch.innerText="Afkanistan ";
// div1.appendChild(div1ch);
// // div4 section inside class container2 with column (card - header)
// let img1 = document.createElement("img");
// img1.setAttribute("class" , "card-img-top ");
// img1.setAttribute("id" , "imgd");
// img1.setAttribute("src" , "./afkanistan.png");
// img1.setAttribute("alt" , " Error");
// div1.appendChild(img1);
// // Image
// let card = document.createElement("div");
// card.setAttribute("class" , "card-body");
// card.innerText="Region : Asia";
// div1.appendChild(card);
// //body text
// let divdc = document.createElement("div");
// divdc.setAttribute("class" , "card-text");
// // divdc.innerText="Region Native Name";
// divdc.innerText="Native Name : Kabul";
// card.appendChild(divdc);

// let divdc1 = document.createElement("div");
// divdc1.setAttribute("class" , "card-text");
// divdc1.innerText="Region Native Name";
// divdc1.innerText="population : 3m";
// card.appendChild(divdc1);


// // let button=document.createElement("button")
// // button.innertext=("get weather")
// // button.setAttribute("value","weather")
// // button.setAttribute("onclick","display")



// let button = document.createElement("button")
// button.setAttribute("id", "fun")
// button.innerText = ("Click for Weather")
// button.setAttribute("onclick", "display()")
// // card.appendChild(button)



// card.appendChild(button);

// dis=document.createElement('div')
// dis.setAttribute('id','dis')
// card.append(dis)

// //block2

// let col1 = document.createElement("div");
// col1.setAttribute("class" , "col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center a" );
// row.appendChild(col1);
// // div3 section inside class container1 with column


// let div12 = document.createElement("div");
// div12.setAttribute("class" , "card h-100");
// col1.appendChild(div12);


// // div4 section inside class container2 with column (card)
// /*let div1c5 = document.createElement("div");
// div1c5.setAttribute("class" , "card h-100");
// div1c2.appendChild(div1c5);
// // div4 section inside class container2 with column (card)*/




// let div1ch2 = document.createElement("div");
// div1ch2.setAttribute("class" , "card-header h3");
// div1ch2.innerText="India ";
// div12.appendChild(div1ch2);
// // div4 section inside class container2 with column (card - header)
// //clear



// let img2 = document.createElement("img");
// img2.setAttribute("class" , "card-img-top");
// img2.setAttribute("id" , "imgd");
// img2.setAttribute("src" , "./india.png");
// img2.setAttribute("alt" , " Error");
// div12.appendChild(img2);
// // Image
// //clear


// let card1 = document.createElement("div");
// card1.setAttribute("class" , "card-body");
// card1.innerText="Region : Asia";
// div12.appendChild(card1);
// //body text clear



// let divdc2 = document.createElement("div");
// divdc2.setAttribute("class" , "card-text");
// // divdc2.innerText="Region Native Name";
// divdc2.innerText="Native Name : london";
// card1.appendChild(divdc2);


// let divdc12 = document.createElement("div");
// divdc12.setAttribute("class" , "card-text");
// // divdc12.innerText="Region Native Name";
// divdc12.innerText="population : 3m";
// card1.appendChild(divdc12);


// // // let button=document.createElement("button")
// // // button.innertext=("get weather")
// // // button.setAttribute("value","weather")
// // // button.setAttribute("onclick","display")



// let button1 = document.createElement("button")
// button1.setAttribute("id", "fun")
// button1.innerText = ("Click for Weather")
// button1.setAttribute("onclick", "india()")
// card1.appendChild(button1)





// dis2=document.createElement('div')
// dis2.setAttribute('id','dis1')
// card1.append(dis2)



// //block3

// let col2 = document.createElement("div");
// col2.setAttribute("class" , "col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center a" );
// row.appendChild(col2);
// // div3 section inside class container1 with column


// let div13 = document.createElement("div");
// div13.setAttribute("class" , "card h-100");
// col2.appendChild(div13);


// // div4 section inside class container2 with column (card)
// /*let div1c5 = document.createElement("div");
// div1c5.setAttribute("class" , "card h-100");
// div1c2.appendChild(div1c5);
// // div4 section inside class container2 with column (card)*/




// let div1ch3 = document.createElement("div");
// div1ch3.setAttribute("class" , "card-header h3");
// div1ch3.innerText="Australia";
// div13.appendChild(div1ch3);
// // div4 section inside class container2 with column (card - header)
// //clear



// let img3 = document.createElement("img");
// img3.setAttribute("class" , "card-img-top");
// img3.setAttribute("id" , "img");
// img3.setAttribute("src" , "./australia2.jpeg");
// img3.setAttribute("alt" , " Error");
// div13.appendChild(img3);
// // // Image
// // //clear


// let card2 = document.createElement("div");
// card2.setAttribute("class" , "card-body ");
// card2.innerText="Country : Australia";
// div13.appendChild(card2);
// //body text clear



// let divdc3 = document.createElement("div");
// divdc3.setAttribute("class" , "card-text");
// // divdc2.innerText="Region Native Name";
// divdc3.innerText="Capital Name : Canberra";
// card2.appendChild(divdc3);


// let divdc13 = document.createElement("div");
// divdc13.setAttribute("class" , "card-text");
// // divdc12.innerText="Region Native Name";
// divdc13.innerText="population : 15m";
// card2.appendChild(divdc13);


// // // // let button=document.createElement("button")
// // // // button.innertext=("get weather")
// // // // button.setAttribute("value","weather")
// // // // button.setAttribute("onclick","display")



// let button2 = document.createElement("button")
// button2.setAttribute("id", "fun")
// button2.innerText = ("Click for Weather")
// button2.setAttribute("onclick", "australia()")
// card2.appendChild(button2)





// dis3=document.createElement('div')
// dis3.setAttribute('id','dis2')
// card2.append(dis3)




// function display() {
//     let a=fetch("https://api.openweathermap.org/data/2.5/weather?q=kabul&appid=46b7aa41bbc315e0b4b9b9161e920dc2")
//     .then((d)=>d.json())
//     .then((ele)=>{
//         var b=ele.weather[0].description    

//         document.getElementById('dis').innerHTML=b
//     }
//     )
// }

// function india() {
//     let a=fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=46b7aa41bbc315e0b4b9b9161e920dc2")
//     .then((d)=>d.json())
//     .then((ele)=>{
//         var b=ele.weather[0].description    

//         document.getElementById('dis1').innerHTML=b
//     }
//     )
// }
// //body text country , native

// //https://api.openweathermap.org/data/2.5/weather?q=Canberra&appid=46b7aa41bbc315e0b4b9b9161e920dc2
// function australia() {
//     let a=fetch("https://api.openweathermap.org/data/2.5/weather?q=Canberra&appid=46b7aa41bbc315e0b4b9b9161e920dc2")
//     .then((d)=>d.json())
//     .then((ele)=>{
//         var b=ele.weather[0].description    

//         document.getElementById('dis2').innerHTML=b
//     }
//     )
// }