let wrapper    = document.querySelector('.wrapper'),
    resContain = document.querySelector('.result__contain'),
    res        = ['Пивасик', 'Мартини', 'Водочка', 'Вискарик'],
    arr        = [],
    arrCheck   = [arrTemper  = document.getElementsByName('temper'),
                  arrSnack   = document.getElementsByName('snack'),
                  arrFiesta  = document.getElementsByName('fiesta'),
                  arrFriend  = document.getElementsByName('friend'),];

function chengeDisabled(x){
    for(let i = 0; i<x.length; i++){
        x[i].removeAttribute('disabled');
    };
    arrCheck.splice(0,1);
};

wrapper.addEventListener('click', (e)=>{
    let click = e.target,
        contain = document.querySelector('.question'),
        wrapper = document.querySelector('.wrapper');
    if(click.checked == true){
        arr.push(click.dataset.indexNumber);
        contain.classList.add('animation');
        setTimeout(()=>{wrapper.removeChild(contain);}, 900);
        (arrCheck.length !==0)?chengeDisabled(arrCheck[0]):console.log('массив закончился');
    };
    if(arr.length==5){
        setTimeout(()=>{
        let countRepeat = 0,
            itemRepeat = 1,
            item;
        for (let i=0; i<arr.length; i++){
            for (let j=i; j<arr.length; j++){
                if (arr[i] == arr[j])
                    countRepeat++;
                if (itemRepeat<countRepeat){
                itemRepeat=countRepeat; 
                item = arr[i];
                }
            }
        countRepeat=0;
        }
    resContain.innerText = res[--item];}, 1100);
    };
});