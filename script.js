let box = document.querySelectorAll('.box')
    box.forEach(e=>{e.addEventListener('click',function(){clicked(this)})})

     

    


let selected = document.querySelectorAll('.options')
    selected.forEach(e=>{e.addEventListener('click',function(){selecting(this)})})


let patern = [
  ['one','two','three'],
['four','five','six'],
 ['seven','eight','nine'],
 ['one','four','seven'],
 ['two','five','eight'],
 ['three','six','nine'],
 ['one','five','nine'],
 ['three','five','seven'],
]
let xoutput = []
let ooutput = []

let  current_value = '<h1>X<h1>'

function clicked(element){


    element.innerHTML=current_value
    
    if(current_value=='<h1>X<h1>' ){
        if(xoutput.length<3){xoutput.push(element.classList[1])}else{xoutput.shift();xoutput.push(element.classList[1])}
        element.classList.add('Xstyle')
        current_value = '<h1>O<h1>'

    }else{
        if(ooutput.length<3){ooutput.push(element.classList[1])}else{ooutput.shift() ;ooutput.push(element.classList[1])}
        element.classList.add('Ostyle')
        current_value = '<h1>X<h1>'
    }

    for(i in patern){

        if(patern[i].join()==ooutput.join() ){
                alert('O is winner')
        }else if((patern[i].join()==xoutput.join())){
               alert("X iswinner")
        }

        let index = patern[i];
        for(j in index){
           console.log(console.log(j));
        }

    }
}





let a = [1,2,3]
let b=[1,2,3]
console.log();

