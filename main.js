function subMinutes(values){
    const validate = time =>{
        if(time > 59 || time < 0){
            throw new Error(
                "Hours, minutes and seconds values have to be between 0 and 59."
            );
        }
        return time;
    };

    const seconds = values
        .map(e => validate(Number(e.split(":").reverse()[0])))
        .reduce((a, b) => a - b);

    let minutes = values
        .map(e => validate(Number(e.split(":").reverse()[1])))
        .reduce((a, b) => a - b);

    let hours = values
        .map(e =>
        e.split(":").reverse()[2] ? Number(e.split(":").reverse[2]) : 0)
        .reduce((a, b) => a - b);

    minutes *= 60;
    hours *= 3600;

    let result = new Date((hours + minutes + seconds) * 1000)
        .toISOString()
        .substr(11, 8);

    return result.split(":").reverse()[2] === "00" ? result.slice(3) : result;
}

function timeStringToFloat(time){
    let hoursMinutes = time.split(':');
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
}

let $Calcular = document.querySelector('#BCalcular');
let $DeNuevo = document.querySelector('#BDeNuevo');
let resultDiv = document.querySelector('#ResultDiv');
let formStart = document.querySelector('#formStart');

$Calcular.addEventListener('click', (e) =>{
    let timeOne = document.querySelector('#ITime').value;
    let timeTwo = document.querySelector('#FTime').value;
    let litrosOne = document.querySelector('#ICaudal').value;
    let litrosTwo = document.querySelector('#FCaudal').value;
    let vNoria = document.querySelector('#VNoria').value;
    let $select = document.querySelector('#CType').value;

    let lPorAvesS = document.querySelector('#LPorAves');
    let interTiempoS = document.querySelector('#interTiempo');
    let lConsumidosS = document.querySelector('#LConsumidos');

    let variable = 1;
    let unitT = 'L/aves';

    if ($select == 'esGarras' || $select == 'chG'){
        variable = 0.07;
        unitT = 'L/Kg de garras'
    } else if($select == 'chHC'){
        variable = 0.075;
        unitT = 'L/Kg de Higado - Corazon';
    } else if($select == 'chM'){
        variable = 0.03;
        unitT = 'L/Kg de Molleja';
    } else if($select == 'chC'){
        variable = 0.08;
        unitT = 'L/Kg de cogotes'
    }
    
    let litrosT = litrosTwo - litrosOne;
    let restTime = subMinutes([timeTwo, timeOne]);
    let restTimeFloat = timeStringToFloat(restTime);
    let litresPerChicken = (((litrosTwo - litrosOne)/(vNoria * restTimeFloat * variable)).toFixed(2)) + " " + unitT;

    lPorAvesS.textContent = litresPerChicken;
    interTiempoS.textContent = restTime + " Horas";
    lConsumidosS.textContent = litrosT + " Litros";

    resultDiv.style.display = 'block';
    formStart.style.display = 'none';
});

$DeNuevo.addEventListener('click', (e) =>{

    resultDiv.style.display = 'none';
    formStart.style.display = 'block';

});



