// function darbye(manye){
    // console.log('ato taka dicen',manye)
    // console.log('mama ckagarat dan')
    // var darbyeprice = 50;
    // var quantity = darbyeprice / manye ;
    // return quantity;

// }
//  var taka = 555;
// darbye(taka);
// var darbyes = darbye(taka);
// console.log('eitin darbyes:', darbyes);


function birire(manye){
    var birireprice = 5;
    var quantity =  manye /birireprice;
    return quantity;

}
 var taka =50;
 var birires = birire(taka);
 console.log('soloka birires:',birires);


 function vesNambers(nambers){
    let sum = 0;
    for(const namber of nambers){
        console.log(namber);
        sum = sum + namber;
    }
    return sum;  

 }
 const nambs = [76, 65, 88, 56];
 const sum = vesNambers(nambs);
 
 console.log('vesNambers ',sum);