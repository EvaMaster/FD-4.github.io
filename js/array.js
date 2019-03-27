let inputKey       = document.getElementsByClassName('date-input_style')[0],
    inputValue     = document.getElementsByClassName('date-input_style')[1],
    inputBtn       = document.querySelector('.date_submit'),
    result         = document.querySelector('.object-result'),
    newKeyItem     = document.getElementsByClassName('date-key__item'),
    newValueItem   = document.getElementsByClassName('date-value__item'),
    clearBtnItem   = document.getElementsByClassName('date-close__item'),
    resultContein  = document.querySelector('result-contain'),
    arrKey         = [],
    arrValue       = [];

inputBtn.addEventListener('click',()=>{
    let resultContain = document.createElement('div'),
        liKey         = document.createElement('span'),
        liValue       = document.createElement('span'),
        clearBtnItem  = document.createElement('button'),
        objArr        = {};
    
    resultContain.classList.add('result-contain');
    result.appendChild(resultContain);
    liKey.classList.add('date-key__item');
    liValue.classList.add('date-value__item');
    clearBtnItem.classList.add('date-close__item');
    arrKey.push(inputKey.value);
    arrValue.push(inputValue.value);
    
    liKey.innerText = arrKey[arrKey.length-1];
    liValue.innerText = arrValue[arrValue.length-1];
    
    (inputKey.value =="" || inputValue.value == "")? alert('косяк'):
    (clearBtnItem.innerText = 'Крестик',
    inputKey.value = '',
    inputValue.value = '',
    resultContain.appendChild(liKey),
    resultContain.appendChild(liValue),
    resultContain.appendChild(clearBtnItem),
    
     objArr = Object.assign({},
        ...arrKey.map((n, index) => ({
        [n]: arrValue[index]
    }))));
    
    //основное индивидуальное задание
    let reverseObj = Object.keys(objArr),
        reduceObj  = reverseObj.reduce(function(accum, key) {
        
        accum[objArr[key]] = key;
        return accum;
    }, {});
    
    console.log(reduceObj);
    //конец основного домашнего задания
    
    
    /*resultContain.addEventListener('click', (event)=>{
        let arr = event.target;
        resultContain.classList.toggle('check');
        console.log(arr);
         let x = document.querySelector('.check');
        //console.log(x.childNodes[1].innerText);
        //result.removeChild(resultContain);
        
    });*/
    
    
});
