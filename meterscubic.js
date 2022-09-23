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

function caudalFinal(place, vnoria, radio){

    let xCaudal = Array.from(caudales[place]);
    let xyCaudal;
    if (vnoria = 8500){
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


let $calcularMC = document.querySelector('#calcularMC');

$calcularMC.addEventListener('click', (e) => {

    let noriaV = document.querySelector('#noriaMC').value;
    let caudalL = document.querySelector('#caudalMC').value;
    let divResult = document.querySelector('#resultMC');
    let $select = document.querySelector('#CTypeMC').value;
    let $radio = document.querySelector('input[name="unitC"]:checked').value; 


    console.log(caudalFinal($select, noriaV, $radio));
    
    if(caudalL <= caudalFinal($select, noriaV, $radio)){
        divResult.textContent = 'Caudal insuficiente';
    } else if(caudalL > caudalFinal($select, noriaV, $radio)){
        divResult.textContent = 'Cadual aceptable';
    }
    
});

