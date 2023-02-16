let left = null
let operator = null
let right = null
let result = false
let resultValue = ""
let isEqualclicked = false

function save(){
    const input = document.querySelector('#top-input')
    let value = ""

    if(left === null){
        return
    }
    value = value + left + " "
    input.value = value

    if(operator === null){
        return
    }
    value = value + operator + " "
    input.value = value

    if(right === null){
        return
    }
    value = value + right + " "
    input.value = value

    if(result){

        switch(operator){
            case "+" : 
            resultValue = parseInt(left) + parseInt(right)
            break;

            case "-" : 
            resultValue = parseInt(left) - parseInt(right)
            break;

            case "*" : 
            resultValue = parseInt(left) * parseInt(right)
            break;

            case "/" : 
            resultValue = parseInt(left) / parseInt(right)
            break;
        }

        if(Number.isNaN(resultValue) || !Number.isFinite(resultValue)){
            alert('Numbers that JavaScript cannot represent😰')
            input.value = ''
            left = null
            right = null
            resultValue = ""
            operator = null
            result = false
            isEqualclicked = false
            return
        }else{
            value = value + "=" + resultValue
            input.value = value
        }
    }
}

function inputNum(num){ //button onclick으로 숫자 들어옴
    if(operator === null){
         if(left === null){
            left = num.toString()
         }else{
            if(num === 0 && parseInt(left) === 0){
                return
            }
            left = left + num.toString()
         }
         console.log(left)
    }else{
        if(right === null){
            right = num.toString()
        }else if(isEqualclicked){
            return
        }else{
            if(num === 0 && parseInt(right) === 0){
                return
            }
            right = right + num.toString()
        }
    }
    save()
}

function inputOperator(op){ //button onclick으로 계산문자 들어옴
    if(left === null && op === "-"){
        left = "-"
        save()
        return
    }
    if(left === "-" && op === "-"){
        return
    }
    if(op === "-" && operator !== null && right === null){
        right = "-"
        save()
        return
    }
    operator = op
    save()
}

function inputEqual(){
    isEqualclicked = true;
    if(left === null || right === null || !operator){
        return //result가 참이되는 경우를 막는다
    }

    if(result){
        left = resultValue
        right = null
        resultValue = null
        operator = null
        result = false
        isEqualclicked = false
    }else{
        result = true;
    }
    
    save()
}

const replayBtn = document.querySelector('#replay')
replayBtn.addEventListener('click', ()=>{
    const input = document.querySelector('#top-input')
    input.value = ''

    left = null
    right = null
    resultValue = ""
    operator = null
    result = false
    isEqualclicked = false
})