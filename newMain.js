(function metricubic(){
    
    const caudales ={
        arrOne:[ /*Escaldadora de pollos - Desplume*/
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
    
        arrTwo:[ /*Escaldadora de garras*/
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
    
        arrThree:[ /*PostEviscerado - Ch2*/
            {velNoria: 4000, caudal: 6000},
            {velNoria: 4500, caudal: 6750},
            {velNoria: 5000, caudal: 7500},
            {velNoria: 5500, caudal: 8250},
            {velNoria: 6000, caudal: 9000},
            {velNoria: 6500, caudal: 9750},
            {velNoria: 7000, caudal: 10500},
            {velNoria: 7500, caudal: 11250},
            {velNoria: 8000, caudal: 12000},
            {velNoria: 8500, caudal: 12750} 
        ],
    
        arrFour:[ /*PreCh*/
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
    
        arrFive:[ /*Ch1*/
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
    
        arrSix:[ /*higado-corazon*/
            {velNoria: 4000, caudal: 300},
            {velNoria: 4500, caudal: 338},
            {velNoria: 5000, caudal: 375},
            {velNoria: 5500, caudal: 413},
            {velNoria: 6000, caudal: 450},
            {velNoria: 6500, caudal: 488},
            {velNoria: 7000, caudal: 525},
            {velNoria: 7500, caudal: 563},
            {velNoria: 8000, caudal: 600},
            {velNoria: 8500, caudal: 638} 
        ],
    
        arrSeven:[ /*panza*/
            {velNoria: 4000, caudal: 120},
            {velNoria: 4500, caudal: 135},
            {velNoria: 5000, caudal: 150},
            {velNoria: 5500, caudal: 165},
            {velNoria: 6000, caudal: 180},
            {velNoria: 6500, caudal: 195},
            {velNoria: 7000, caudal: 210},
            {velNoria: 7500, caudal: 225},
            {velNoria: 8000, caudal: 240},
            {velNoria: 8500, caudal: 255} 
        ],
    
        arrEight:[/*Cogote*/
            {velNoria: 4000, caudal: 320},
            {velNoria: 4500, caudal: 360},
            {velNoria: 5000, caudal: 400},
            {velNoria: 5500, caudal: 440},
            {velNoria: 6000, caudal: 480},
            {velNoria: 6500, caudal: 520},
            {velNoria: 7000, caudal: 560},
            {velNoria: 7500, caudal: 600},
            {velNoria: 8000, caudal: 640},
            {velNoria: 8500, caudal: 680} 
        ],
    
        arrNine:[ /*Ch garras*/
            {velNoria: 4000, caudal: 280},
            {velNoria: 4500, caudal: 315},
            {velNoria: 5000, caudal: 350},
            {velNoria: 5500, caudal: 385},
            {velNoria: 6000, caudal: 420},
            {velNoria: 6500, caudal: 455},
            {velNoria: 7000, caudal: 490},
            {velNoria: 7500, caudal: 525},
            {velNoria: 8000, caudal: 560},
            {velNoria: 8500, caudal: 595} 
        ],
        
    };

    const calculation = (place, vnoria, radio, arr) => {

        let xCaudal = Array.from(arr[place]);
        let xyCaudal;
        if (vnoria == 8500){
            xyCaudal = xCaudal.find(item => item.velNoria == vnoria);
        } else if(vnoria < 8500){
            xyCaudal = xCaudal.find(item => item.velNoria < vnoria);
        }
        
        
        if(radio == 'metros'){
            return ((xyCaudal.caudal) / 1000);
        }else if(radio == 'litros'){
            return xyCaudal.caudal;
        }
        
    };

    const input = () => {
        
        let noriaV = document.querySelector('#noriaMC').value;
        let caudalL = document.querySelector('#caudalMC').value;
        let divResult = document.querySelector('#resultMC');
        let $select = document.querySelector('#CTypeMC').value;
        let $radio = document.querySelector('input[name="unitC"]:checked').value;
        
        return{
            noriaV, caudalL, divResult, $select, $radio
        }
    };

    const render = () => {
        if(input()['caudalL'] <= calculation(input()['$select'], input()['noriaV'], input()['$radio'], caudales)){
            input()['divResult'].textContent = 'Caudal insuficiente';
        } else if(input()['caudalL'] <= calculation(input()['$select'], input()['noriaV'], input()['$radio'], caudales)){
            input()['divResult'].textContent  = 'Cadual aceptable';
        }
    };

    const button = () => {
        let $calcularMC = document.querySelector('#calcularMC');

        $calcularMC.addEventListener('click', (e) =>{
            input();
            render();
        });
    };

    return{
        publicButton: button()
    };

})();
/*
(function calculator(){

    const subMinutes = (values) =>{
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
    
    const timeStringToFloat = (time) =>{
        let hoursMinutes = time.split(':');
        let hours = parseInt(hoursMinutes[0], 10);
        let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return hours + minutes / 60;
    }
    
    const input = () => {
        let $Calcular = document.querySelector('#BCalcular');
        let $DeNuevo = document.querySelector('#BDeNuevo');
        let resultDiv = document.querySelector('#ResultDiv');
        let formStart = document.querySelector('#formStart');
        let timeOne = document.querySelector('#ITime').value;
        let timeTwo = document.querySelector('#FTime').value;
        let litrosOne = document.querySelector('#ICaudal').value;
        let litrosTwo = document.querySelector('#FCaudal').value;
        let vNoria = document.querySelector('#VNoria').value;
        let $select = document.querySelector('#CType').value;
    
        let lPorAvesS = document.querySelector('#LPorAves');
        let interTiempoS = document.querySelector('#interTiempo');
        let lConsumidosS = document.querySelector('#LConsumidos');

        return{
            $Calcular, $DeNuevo, resultDiv, formStart, timeOne, timeTwo,
            litrosOne, litrosTwo, vNoria, $select, lPorAvesS, interTiempoS,
            lConsumidosS
        }
    }

    $Calcular.addEventListener('click', (e) =>{

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
        
        displayHidden(true);

    });
    
    const displayHidden = (state) =>{
        if(state == true){
            input["resultDiv"].style.display = 'block';
            input["formStart"].style.display = 'none';
        }else if(state == false){
            input["resultDiv"].style.display = 'none';
            input["formStart"].style.display = 'block';
        }
    }

    input["$DeNuevo"].addEventListener('click', (e) =>{

        displayHidden(false);

    });

})();

*/