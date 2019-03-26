let inputChek  = document.querySelector('.question'),
    wrapper    = document.querySelector('.wrapper'),
    resContain = document.querySelector('.result__contain'),
    arrTemper  = document.getElementsByName('temper'),
    arrSnack   = document.getElementsByName('snack'),
    arrFiesta  = document.getElementsByName('fiesta'),
    arrFriend  = document.getElementsByName('friend'),
    res        = ['Пивасик', 'Мартини', 'Водочка', 'Вискарик'],
    arr = [],
    arrCheck = [arrTemper, arrSnack, arrFiesta, arrFriend];

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
    if(click.checked === true){
        arr.push(click.dataset.indexNumber);
        contain.classList.add('animation');
        setTimeout(()=>{wrapper.removeChild(contain);}, 900);
        
        (arrCheck.length !==0)?chengeDisabled(arrCheck[0]):console.log('массив закончился');
    };
    if(arr.length==5){
        const maxOccurences = array => Array.from(
            arr.reduce(
                (map, value) => map.set(
                value,
                map.has(value)? map.get(value) + 1: 1),
                new Map()
            ).entries()
        ).reduce(
            (max, entry) => entry[1] > max[1] ? entry : max
        ).reduce(
            (item, count) => ({ item, count })
        )
        let x = + maxOccurences(arr).item;
        resContain.innerText = res[--x];
        };
});




