
div=document.createElement("div")
div.setAttribute("id","text")
document.body.appendChild(div)

var display = (input, callback) => {
    let c = setTimeout(() => {
        if(input==0){
            document.getElementById('text').innerHTML=""
            br=document.createElement("br")
            div.append(br)
            quotes=document.createElement('q')
            quotes.innerText="Cheers to your personal New Year!"
            div.append(quotes)

            br1=document.createElement("br")
            div.append(br1)
            img=document.createElement("img")
            img.setAttribute("id","one")
            img.setAttribute("src","./img.jpeg")
            div.appendChild(img)
            
        }else{
        document.getElementById('text').innerText = input;
        }
        callback();
    }, 1000);
}

display(10,() => 
    display(9,() => 
        display(8,() =>
             display(7,() => 
                display(6,() => 
                    display(5,() => 
                        display(4,() =>
                            display(3,() => 
                                display(2,() => 
                                    display(1,() => 
                                        display(0,()=>
                                        display('')
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);