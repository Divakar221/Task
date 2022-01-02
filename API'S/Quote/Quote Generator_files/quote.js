// var arr=[]
//   const mySet1 = new Set()


//   fetch('https://type.fit/api/quotes')
//   .then((d)=>d.json())
//   .then((data)=>{
//       console.log(data[0])
    
//     for(let i=0;i<data.length;i++){
//       arr[i]=data[i]
//     }

//       row.innerHTML=`
                      
                       
//                        `

                       
      
//       for(let i=0;i<data.length;i++){
//         mySet1.add(data[i].author)
        
//       }
   
      
//       console.log(mySet1)
  
  
//   })
//   .catch((er)=>{
//       console.log("error")
//   })
  
  
//   var h=document.createElement('h1')
//   h.setAttribute("id","title")
//   h.classList.add("text-center")
//   h.innerText="Quotes"
//   document.body.append(h)


//   var div1=document.createElement('div')
//   div1.classList.add('container')
//   document.body.appendChild(div1)

//   div1.append("Search ")
//   var input=document.createElement("input")
//   input.setAttribute("type","text")
//   input.setAttribute('id',"tt")
//   div1.appendChild(input)

  
  
// // console.log(a)
//   button=document.createElement("button")
//   button.setAttribute("onclick","fun()")
//   button.innerText="Search"
//   div1.appendChild(button)

//   ans=document.createElement('div')
//   ans.setAttribute('id','ans')
//   div1.appendChild(ans)
 
  
//   var row=document.createElement('div')
//   row.classList.add('row')
//   // row.innerText="hello"
//   div1.appendChild(row)
  

// var flag=0
// b=[]
// str=""
  
//   function fun(){
//     var end="search"
//     console.log(end)
//     end=document.getElementById('tt').value

//     console.log(arr)
//     for(let i=0;i<arr.length;i++){
//       if(arr[i].author==end){
//         // console.log(arr[i].text)
//         b.push(arr[i].text)
//         b.push("\n")
//         console.log(b)
        
//         //console.log(str)
//         document.getElementById("ans").innerHTML=b.join('').split(',').join('\n')
        
//         flag=1
//       }
//       if(flag==0){
//         document.getElementById("ans").innerHTML="No match Found"
//       }
//     }
//    console.log(end)
    
//   }
//   function tot(){
    
//     document.getElementById('ans').innerHTML=end
// }


var h=document.createElement('h1')
h.setAttribute("id","title")
h.classList.add("text-center")
h.innerText="Quotes"
document.body.append(h)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row=document.createElement('div')
row.classList.add('row')
// row.innerText="hello"
div1.appendChild(row)

fetch('https://type.fit/api/quotes')
.then((d)=>d.json())
.then((data)=>{
    console.log(data)
    console.log(data.length)
    // console.log(data[2].flag)
    for(let i=0;i<200;i++){
        //console.log(data[i])
        // a=data[i].capital
        row.innerHTML += `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2 b">
        <div class="card  text-center">${i}
        <div class="card-header text-center"> Poetry<div>
        <div class=" card-body ">
            <div class = " card-text "> Author: ${data[i].author}</div>
            <div class = " card-text a">  Quote: ${data[i].text}
            
            </div>
       
        </div>
        </div>`
    }


})
.catch((er)=>{
    console.log("error")
})



  
  
  
  

 