(function tab(){

    const input = () => {
        let $calculadoraRapida = document.querySelector('#calculadoraRapida');
        let $calculadoraFull = document.querySelector('#calculadoraFull');
        let sectionOne = document.querySelector('#sOne');
        let sectionTwo = document.querySelector('#sTwo');
        
        return{
            $calculadoraRapida, $calculadoraFull, sectionOne, sectionTwo
        }
    }

    const display = (state) =>{
        if(state == true){
            input()["$calculadoraFull"].setAttribute('class', 'tabBtn active');
            input()["$calculadoraRapida"].setAttribute('class', 'tabBtn inactive');
            input()["sectionOne"].style.display = 'flex';
            input()["sectionTwo"].style.display = 'none';
        }else if(state == false){
            input()["$calculadoraFull"].setAttribute('class', 'tabBtn inactive');
            input()["$calculadoraRapida"].setAttribute('class', 'tabBtn active');
            input()["sectionOne"].style.display = 'none';
            input()["sectionTwo"].style.display = 'flex';
        }
    }

    const button = () =>{
    
        input()['$calculadoraFull'].addEventListener('click', (e) =>{
            display(true);
        });

        input()['$calculadoraRapida'].addEventListener('click', (e) =>{
            display(false);
        })
    }

    return{
        publicButton: button()
    }


})();

(function metriCubic(){
    
    const caudales ={
        arrOne:[ /*Escaldadora de pollos - Desplume*/
            {velNoria: 4000, caudal: 800, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 4500, caudal: 900, minCubic: '0.9 m³/aves', minLitres: '900 l/aves'},
            {velNoria: 5000, caudal: 1000, minCubic: '1.0 m³/aves', minLitres: '1000 l/aves'},
            {velNoria: 5500, caudal: 1100, minCubic: '1.1 m³/aves', minLitres: '1100 l/aves'},
            {velNoria: 6000, caudal: 1200, minCubic: '1.2 m³/aves', minLitres: '1200 l/aves'},
            {velNoria: 6500, caudal: 1300, minCubic: '1.3 m³/aves', minLitres: '1300 l/aves'},
            {velNoria: 7000, caudal: 1400, minCubic: '1.4 m³/aves', minLitres: '1400 l/aves'},
            {velNoria: 7500, caudal: 1500, minCubic: '1.5 m³/aves', minLitres: '1500 l/aves'},
            {velNoria: 8000, caudal: 1600, minCubic: '1.6 m³/aves', minLitres: '1600 l/aves'},
            {velNoria: 8500, caudal: 1700, minCubic: '1.7 m³/aves', minLitres: '1700 l/aves'}
        ],
    
        arrTwo:[ /*Escaldadora de garras*/
            {velNoria: 4000, caudal: 56, minCubic: "0.056 m³/aves", minLitres: "56 l/aves"},
            {velNoria: 4500, caudal: 63, minCubic: "0.064 m³/aves", minLitres: '64 l/aves'},
            {velNoria: 5000, caudal: 70, minCubic: "0.070 m³/aves", minLitres: '70 l/aves'},
            {velNoria: 5500, caudal: 77, minCubic: '0.077 m³/aves', minLitres: '77 l/aves'},
            {velNoria: 6000, caudal: 84, minCubic: '0.084 m³/aves', minLitres: '84 l/aves'},
            {velNoria: 6500, caudal: 91, minCubic: '0.091 m³/aves', minLitres: '91 l/aves'},
            {velNoria: 7000, caudal: 98, minCubic: '0.098 m³/aves', minLitres: '98 l/aves'},
            {velNoria: 7500, caudal: 105, minCubic: '0.105 m³/aves', minLitres: '105 l/aves'},
            {velNoria: 8000, caudal: 112, minCubic: '0.112 m³/aves', minLitres: '112 l/aves'},
            {velNoria: 8500, caudal: 119, minCubic: '0.119 m³/aves', minLitres: '119 l/aves'} 
        ],
    
        arrThree:[ /*PostEviscerado - Ch2*/
            {velNoria: 4000, caudal: 6000, minCubic: '6.00 m³/aves', minLitres: '6000 l/aves'},
            {velNoria: 4500, caudal: 6750, minCubic: '6.75 m³/aves', minLitres: '6750 l/aves'},
            {velNoria: 5000, caudal: 7500, minCubic: '7.50 m³/aves', minLitres: '7500 l/aves'},
            {velNoria: 5500, caudal: 8250, minCubic: '8.25 m³/aves', minLitres: '8250 l/aves'},
            {velNoria: 6000, caudal: 9000, minCubic: '9.00 m³/aves', minLitres: '9000 l/aves'},
            {velNoria: 6500, caudal: 9750, minCubic: '9.75 m³/aves', minLitres: '9750 l/aves'},
            {velNoria: 7000, caudal: 10500, minCubic: '10.50 m³/aves', minLitres: '10500 l/aves'},
            {velNoria: 7500, caudal: 11250, minCubic: '11.25 m³/aves', minLitres: '11250 l/aves'},
            {velNoria: 8000, caudal: 12000, minCubic: '12.00 m³/aves', minLitres: '12000 l/aves'},
            {velNoria: 8500, caudal: 12750, minCubic: '12.75 m³/aves', minLitres: '12750 l/aves'} 
        ],
    
        arrFour:[ /*PreCh*/
            {velNoria: 4000, caudal: 56, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 4500, caudal: 63, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 5000, caudal: 70, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 5500, caudal: 77, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 6000, caudal: 84, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 6500, caudal: 91, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 7000, caudal: 89, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 7500, caudal: 105, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 8000, caudal: 112, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 8500, caudal: 119, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'} 
        ],
    
        arrFive:[ /*Ch1*/
            {velNoria: 4000, caudal: 56, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 4500, caudal: 63, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 5000, caudal: 70, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 5500, caudal: 77, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 6000, caudal: 84, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 6500, caudal: 91, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 7000, caudal: 89, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 7500, caudal: 105, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 8000, caudal: 112, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'},
            {velNoria: 8500, caudal: 119, minCubic: '0.8 m³/aves', minLitres: '800 l/aves'} 
        ],
    
        arrSix:[ /*higado-corazon*/
            {velNoria: 4000, caudal: 300, minCubic: '0.300 m³/aves', minLitres: '300 l/aves'},
            {velNoria: 4500, caudal: 338, minCubic: '0.338 m³/aves', minLitres: '338 l/aves'},
            {velNoria: 5000, caudal: 375, minCubic: '0.375 m³/aves', minLitres: '375 l/aves'},
            {velNoria: 5500, caudal: 413, minCubic: '0.413 m³/aves', minLitres: '413 l/aves'},
            {velNoria: 6000, caudal: 450, minCubic: '0.450 m³/aves', minLitres: '450 l/aves'},
            {velNoria: 6500, caudal: 488, minCubic: '0.488 m³/aves', minLitres: '488 l/aves'},
            {velNoria: 7000, caudal: 525, minCubic: '0.525 m³/aves', minLitres: '525 l/aves'},
            {velNoria: 7500, caudal: 563, minCubic: '0.563 m³/aves', minLitres: '563 l/aves'},
            {velNoria: 8000, caudal: 600, minCubic: '0.600 m³/aves', minLitres: '600 l/aves'},
            {velNoria: 8500, caudal: 638, minCubic: '0.638 m³/aves', minLitres: '638 l/aves'} 
        ],
    
        arrSeven:[ /*panza*/
            {velNoria: 4000, caudal: 120, minCubic: '0.120 m³/aves', minLitres: '120 l/aves'},
            {velNoria: 4500, caudal: 135, minCubic: '0.135 m³/aves', minLitres: '135 l/aves'},
            {velNoria: 5000, caudal: 150, minCubic: '0.150 m³/aves', minLitres: '150 l/aves'},
            {velNoria: 5500, caudal: 165, minCubic: '0.165 m³/aves', minLitres: '165 l/aves'},
            {velNoria: 6000, caudal: 180, minCubic: '0.180 m³/aves', minLitres: '180 l/aves'},
            {velNoria: 6500, caudal: 195, minCubic: '0.195 m³/aves', minLitres: '195 l/aves'},
            {velNoria: 7000, caudal: 210, minCubic: '0.210 m³/aves', minLitres: '210 l/aves'},
            {velNoria: 7500, caudal: 225, minCubic: '0.225 m³/aves', minLitres: '225 l/aves'},
            {velNoria: 8000, caudal: 240, minCubic: '0.240 m³/aves', minLitres: '240 l/aves'},
            {velNoria: 8500, caudal: 255, minCubic: '0.255 m³/aves', minLitres: '255 l/aves'} 
        ],
    
        arrEight:[/*Cogote*/
            {velNoria: 4000, caudal: 320, minCubic: '0.320 m³/aves', minLitres: '320 l/aves'},
            {velNoria: 4500, caudal: 360, minCubic: '0.360 m³/aves', minLitres: '360 l/aves'},
            {velNoria: 5000, caudal: 400, minCubic: '0.400 m³/aves', minLitres: '400 l/aves'},
            {velNoria: 5500, caudal: 440, minCubic: '0.440 m³/aves', minLitres: '440 l/aves'},
            {velNoria: 6000, caudal: 480, minCubic: '0.480 m³/aves', minLitres: '480 l/aves'},
            {velNoria: 6500, caudal: 520, minCubic: '0.520 m³/aves', minLitres: '520 l/aves'},
            {velNoria: 7000, caudal: 560, minCubic: '0.560 m³/aves', minLitres: '560 l/aves'},
            {velNoria: 7500, caudal: 600, minCubic: '0.600 m³/aves', minLitres: '600 l/aves'},
            {velNoria: 8000, caudal: 640, minCubic: '0.640 m³/aves', minLitres: '640 l/aves'},
            {velNoria: 8500, caudal: 680, minCubic: '0.680 m³/aves', minLitres: '680 l/aves'} 
        ],
    
        arrNine:[ /*Ch garras*/
            {velNoria: 4000, caudal: 280, minCubic: '0.280 m³/aves', minLitres: '280 l/aves'},
            {velNoria: 4500, caudal: 315, minCubic: '0.315 m³/aves', minLitres: '315 l/aves'},
            {velNoria: 5000, caudal: 350, minCubic: '0.350 m³/aves', minLitres: '350 l/aves'},
            {velNoria: 5500, caudal: 385, minCubic: '0.385 m³/aves', minLitres: '385 l/aves'},
            {velNoria: 6000, caudal: 420, minCubic: '0.420 m³/aves', minLitres: '420 l/aves'},
            {velNoria: 6500, caudal: 455, minCubic: '0.455 m³/aves', minLitres: '455 l/aves'},
            {velNoria: 7000, caudal: 490, minCubic: '0.490 m³/aves', minLitres: '490 l/aves'},
            {velNoria: 7500, caudal: 525, minCubic: '0.525 m³/aves', minLitres: '525 l/aves'},
            {velNoria: 8000, caudal: 560, minCubic: '0.560 m³/aves', minLitres: '560 l/aves'},
            {velNoria: 8500, caudal: 595, minCubic: '0.595 m³/aves', minLitres: '595 l/aves'} 
        ],
        
    };

    const calculation = () => {

        let xCaudal = Array.from(caudales[input()['$select']]);
        let xyCaudal = 0;
        let y = 0;
        let yTXT = 0;

        if (input()["noriaV"] == 8500){
            xyCaudal = xCaudal.find(item => item.velNoria == input()["noriaV"]);
        } else if(input()["noriaV"] < 8500){
            xyCaudal = xCaudal.find(item => item.velNoria < input()["noriaV"]);
        }
          
        if(input()["$radio"] == 'metros'){
            y = ((xyCaudal.caudal) / 1000);
            yTXT = xyCaudal.minCubic;
        }else if(input()["$radio"] == 'litros'){
            y = xyCaudal.caudal;
            yTXT = xyCaudal.minLitres;
        }

        return{
            y, yTXT
        }
        
    };

    const input = () => {
        
        let noriaV = document.querySelector('#noriaMC').value;
        let caudalL = document.querySelector('#caudalMC').value;
        let divResult = document.querySelector('#resultMC');
        let $select = document.querySelector('#CTypeMC').value;
        let $radio = document.querySelector('#caudalMCi').value;
        let $calcularMC = document.querySelector('#calcularMC');
        let caudalMinMetric = document.querySelector('#caudalMinMetric');

        return{
            noriaV, caudalL, divResult, $select, $radio, $calcularMC, caudalMinMetric
        }
    };

    const render = () => {

        if(input()["caudalL"] <= calculation()["y"]){
            input()["divResult"].setAttribute('class', 'redResult');
            input()["divResult"].textContent = 'CAUDAL INSUFICIENTE';
            input()["caudalMinMetric"].textContent = calculation()["yTXT"]
        } else if (input()["caudalL"] > calculation()["y"]){
            input()["divResult"].setAttribute('class', 'greenResult');
            input()["divResult"].textContent  = 'CAUDAL ACEPTABLE';
            input()["caudalMinMetric"].textContent = calculation()["yTXT"]
        }

    };

    const button = () => {
        
        input()["$calcularMC"].addEventListener('click', (e) =>{
            render();
        });
    };

    return{
        publicButton: button()
    }

})();

(function calculator(){

    const caudales ={
        arrOne:[ /*Escaldadora de pollos - Desplume*/
            {minimo: 0.2, txtMinimo:'0.20 Litros/aves'}
        ],
    
        arrTwo:[ /*Escaldadora de garras*/
            {minimo: 0.2, txtMinimo:'0.20 L/Kg de garras'}
        ],
    
        arrThree:[ /*PostEviscerado - Ch2*/
            {minimo: 1.50, txtMinimo:'1.50 Litros/aves'}
        ],
    
        arrFour:[ /*PreCh*/
            {minimo: 0.2, txtMinimo:'0.20 Litros/aves'}
        ],
    
        arrFive:[ /*Ch1*/
            {minimo: 0.2, txtMinimo:'0.20 Litros/aves'}
        ],
    
        arrSix:[ /*higado-corazon*/
            {minimo: 1.00, txtMinimo:'1.00 L/Kg de Hígado-Corazón'}
        ],
    
        arrSeven:[ /*panza*/
            {minimo: 1.00, txtMinimo:'1.00 L/Kg de Molleja'}
        ],
    
        arrEight:[/*Cogote*/
            {minimo: 1.00, txtMinimo:'1.00 L/Kg de cogotes'}
        ],
    
        arrNine:[ /*Ch garras*/
            {minimo: 1.00, txtMinimo:'1.00 L/Kg de garras'}
        ],
        
    };

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
        let caudalMin = document.querySelector('#caudalMin');

        let $Calcular = document.querySelector('#BCalcular');
        let $DeNuevo = document.querySelector('#BDeNuevo');

        return{
            resultDiv, formStart, timeOne, timeTwo,
            litrosOne, litrosTwo, vNoria, $select, lPorAvesS, interTiempoS,
            lConsumidosS, $Calcular, $DeNuevo, caudalMin
        }
    }

    const displayHidden = (state) =>{
        if(state == true){
            input()["resultDiv"].style.display = 'flex';
            input()["formStart"].style.display = 'none';
        }else if(state == false){
            input()["resultDiv"].style.display = 'none';
            input()["formStart"].style.display = 'flex';
        }
    }
    
    const changeColor = (caudalLtrs, place) => {
        
        let xCaudal = Array.from(caudales[place]);

        input()["caudalMin"].textContent = xCaudal[0]['txtMinimo'];

        if(caudalLtrs > xCaudal[0]['minimo']){
            input()["lPorAvesS"].setAttribute('class', 'greenResult');           
        }else if(caudalLtrs <= xCaudal[0]['minimo']){
            input()["lPorAvesS"].setAttribute('class', 'redResult');
        }

    }
    

    const render = () => {
        let variable = 1;
        let unitT = 'L/aves';

        if (input()["$select"] == 'arrTwo' || input()["$select"] == 'arrNine'){
            variable = 0.07;
            unitT = 'L/Kg de garras'
        } else if(input()["$select"] == 'arrEight'){
            variable = 0.075;
            unitT = 'L/Kg de Hígado-Corazón';
        } else if(input()["$select"] == 'arrNine'){
            variable = 0.03;
            unitT = 'L/Kg de Molleja';
        } else if(input()["$select"] == 'arrTen'){
            variable = 0.08;
            unitT = 'L/Kg de cogotes'
        }
        
        let litrosT = input()["litrosTwo"] - input()["litrosOne"];
        let restTime = subMinutes([input()["timeTwo"], input()["timeOne"]]);
        let restTimeFloat = timeStringToFloat(restTime);
        let litresPerChicken = (((input()["litrosTwo"] - input()["litrosOne"])/(input()["vNoria"] * restTimeFloat * variable)).toFixed(2)) + " " + unitT;
        
        input()["lPorAvesS"].textContent = litresPerChicken;
        input()["interTiempoS"].textContent = restTime + " Horas";
        input()["lConsumidosS"].textContent = litrosT + " Litros";
        changeColor(((input()["litrosTwo"] - input()["litrosOne"])/(input()["vNoria"] * restTimeFloat * variable)).toFixed(2), input()["$select"]);
    }

    const button = () => {


        input()["$Calcular"].addEventListener('click', (e) =>{
            render();
            displayHidden(true);
        });

        input()["$DeNuevo"].addEventListener('click', (e) =>{

            displayHidden(false);

        });

    };

    return{
        publicButtonTwo: button()
    }

})();