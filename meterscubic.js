const arrZero =[
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
];

function findObject(select, noria){
    if(select == 'esDuMC'){
        arr = arrZero;
    }
    return arr.find(item => item.velNoria >= noria);
}

let $calcularMC = document.querySelector('#calcularMC');

$calcularMC.addEventListener('click', (e) => {
    let noriaV = document.querySelector('#noriaMC').value;
    let caudalL = document.querySelector('#caudalMC').value;
    let divResult = document.querySelector('#resultMC');
    let $select = document.querySelector('#CTypeMC').value;

    let arrObjet = findObject($select, noriaV);
    
    if(caudalL <= arrObjet.caudal){
        divResult.textContent = 'Caudal insuficiente';
    } else if(caudalL > arrObjet.caudal){
        divResult.textContent = 'Cadual aceptable';
    }
    
})

