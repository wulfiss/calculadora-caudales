const caudales ={
    arrZero:[
        {velNoria: 4000, caudal: 800},
        {velNoria: 4500, caudal: 900},
        {velNoria: 5000, caudal: 1000},
        {velNoria: 5500, caudal: 1100},
        {velNoria: 6000, caudal: 1200},
        {velNoria: 6500, caudal: 1300},
        {velNoria: 7000, caudal: 1400},
        {velNoria: 7500, caudal: 1500},
        {velNoria: 8000, caudal: 1600},
        {velNoria: 8500, caudal: 1700}
    ],

    arrTwo:[
        {velNoria: 4000, caudal: 56},
        {velNoria: 4500, caudal: 63},
        {velNoria: 5000, caudal: 70},
        {velNoria: 5500, caudal: 77},
        {velNoria: 6000, caudal: 84},
        {velNoria: 6500, caudal: 91},
        {velNoria: 7000, caudal: 89},
        {velNoria: 7500, caudal: 105},
        {velNoria: 8000, caudal: 112},
        {velNoria: 8500, caudal: 119}
    ],

};

function caudalFinal(place, vnoria, radio){
    let findObject = (select, noria) => {
        let arr = select;

        return caudales.arrZero.find(item => item.velNoria >= noria);
    }

    if(radio == 'metros'){
        return (findObject(place, vnoria).caudal) / 1000;
    }else{
        return findObject(place, vnoria).caudal;
    }

}

console.log(caudales);
let $calcularMC = document.querySelector('#calcularMC');

$calcularMC.addEventListener('click', (e) => {
    let noriaV = document.querySelector('#noriaMC').value;
    let caudalL = document.querySelector('#caudalMC').value;
    let divResult = document.querySelector('#resultMC');
    let $select = document.querySelector('#CTypeMC').value;
    let $radio = document.querySelector('input[name="unitC"]:checked').value; 
    
    if(caudalL <= caudalFinal($select, noriaV, $radio)){
        divResult.textContent = 'Caudal insuficiente';
    } else if(caudalL > caudalFinal($select, noriaV, $radio)){
        divResult.textContent = 'Cadual aceptable';
    }
    
})

