const btns = document.querySelectorAll('.btn')
const input = document.querySelector('#top-input')
const replayBtn = document.querySelector('#replay')
const total = document.querySelector("#total"); 

const btnSpreads = [...btns]

let text = '';

btnSpreads.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      
        let resultValue = btn.innerHTML
        input.value = input.value + resultValue
        text = input.value
    })
})

function evaluate(fn){
    const resultEval = new Function('return ' + fn)()

    if(Number.isNaN(resultEval) || !Number.isFinite(resultEval)){
        alert('Numbers that JavaScript cannot represent😰')
        return ''
    }else{
        return resultEval
    }
}

total.addEventListener('click', ()=>{

 try{

    let allInputs = text.replace('=','') 
    input.value = evaluate(allInputs)

    }
    catch(err){
        alert('Please enter valid input ex) 1 + 2 = 💩')
        input.value = ''
    }
})

replayBtn.addEventListener('click', ()=>{
    const input = document.querySelector('#top-input')
    input.value = ''
})