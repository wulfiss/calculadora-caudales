let arr = [4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500];

console.log(arr);

let noriaV = 4600;

function filterTest(item){
    if(item > noriaV){
        return true;
    } 
}

let arrTwo = arr.find(filterTest);

console.log(arrTwo);