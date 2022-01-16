
div=document.createElement("div")
div.setAttribute("id","text")
document.body.appendChild(div)

var display = (input, callback) => {
    let c = setTimeout(() => {
        // if(input==1){
        //     document.getElementById('text').innerHTML="HAPPY BIRTHDAY"
        // }else{
        document.getElementById('text').innerText = input;
        // }
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
                                        display('Happy Birthday!')
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