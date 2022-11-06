function find () {

    let capitalbase = document.getElementById('input1').value;
    let tipo = document.getElementById('input2').value;
    let negocio = document.getElementById('input3').value;
    let price = document.getElementById('premio');

        switch (negocio) {
            case 'comercio':
                
                switch (tipo) {
                    case 'essencial':
    
                        if (capitalbase == 100000){
    
                            console.log('40,69');
                            price.innerText='R$'+' '+'40,69';
                        }else{
                            price.innerText='';
                        }
                        if (capitalbase == 200000){
    
                            console.log('57,18');
                            price.innerText='R$'+' '+'57,18';
                        }
                        if (capitalbase == 300000){
    
                            console.log('83,64');
                            price.innerText='R$'+' '+'83,64';
                        }
                        if (capitalbase == 400000){
    
                            console.log('110,10');
                            price.innerText='R$'+' '+'110,10';
                        }
                        if (capitalbase == 500000){
    
                            console.log('136,57');
                            price.innerText='R$'+' '+'136,57';
                        }
                        if (capitalbase == 600000){
    
                            console.log('155,40');
                            price.innerText='R$'+' '+'155,40';
                        }
                        if (capitalbase == 700000){
    
                            console.log('174,24');
                            price.innerText='R$'+' '+'174,24';
                        }
                        if (capitalbase == 800000){
    
                            console.log('193,06');
                            price.innerText='R$'+' '+'193,06';
                        }
                        if (capitalbase == 900000){
    
                            console.log('211,90');
                            price.innerText='R$'+' '+'211,90';
                        }
                        if (capitalbase == 1000000){
    
                            console.log('230,73');
                            price.innerText='R$'+' '+'230,73';
                        }
                        
                        break;
    
                    case 'completo':
    
                        if (capitalbase == 100000){
    
                            console.log('54,51');
                            price.innerText='R$'+' '+'54,51';
                        }
                        if (capitalbase == 200000){
    
                            console.log('77,21');
                            price.innerText='R$'+' '+'77,21';
                        }
                        if (capitalbase == 300000){
    
                            console.log('113,67');
                            price.innerText='R$'+' '+'113,67';
                        }
                        if (capitalbase == 400000){
    
                            console.log('150,14');
                            price.innerText='R$'+' '+'150,14';
                        }
                        if (capitalbase == 500000){
    
                            console.log('186,60');
                            price.innerText='R$'+' '+'186,60';
                        }
                        if (capitalbase == 600000){
    
                            console.log('215,46');
                            price.innerText='R$'+' '+'215,46';
                        }
                        if (capitalbase == 700000){
    
                            console.log('244,30');
                            price.innerText='R$'+' '+'244,30';
                        }
                        if (capitalbase == 800000){
    
                            console.log('273,13');
                            price.innerText='R$'+' '+'273,13';
                        }
                        if (capitalbase == 900000){
    
                            console.log('301,98');
                            price.innerText='R$'+' '+'301,98';
                        }
                        if (capitalbase == 1000000){
    
                            console.log('330,80');
                            price.innerText='R$'+' '+'330,80';
                        }
            
                        break;
                
                    default:
                        break;
                }
                break;

            case 'serviços':
                
                switch (tipo) {
                    case 'essencial':
    
                        if (capitalbase == 100000){
    
                            console.log('27,65');
                            price.innerText='R$'+' '+'27,65';
                        }
                        if (capitalbase == 200000){
    
                            console.log('35,84');
                            price.innerText='R$'+' '+'35,84';
                        }
                        if (capitalbase == 300000){
    
                            console.log('51,86');
                            price.innerText='R$'+' '+'51,86';
                        }
                        if (capitalbase == 400000){
    
                            console.log('67,86');
                        }
                        if (capitalbase == 500000){
    
                            console.log('83,89');
                        }
                        if (capitalbase == 600000){
    
                            console.log('94,32');
                        }
                        if (capitalbase == 700000){
    
                            console.log('104,75');
                        }
                        if (capitalbase == 800000){
    
                            console.log('115,18');
                        }
                        if (capitalbase == 900000){
    
                            console.log('125,61');
                        }
                        if (capitalbase == 1000000){
    
                            console.log('136,03');
                        }
                        
                        break;
    
                    case 'completo':
    
                        if (capitalbase == 100000){
    
                            console.log('39,86');
                        }
                        if (capitalbase == 200000){
    
                            console.log('53,76');
                        }
                        if (capitalbase == 300000){
    
                            console.log('78,73');
                        }
                        if (capitalbase == 400000){
    
                            console.log('103,67');
                        }
                        if (capitalbase == 500000){
    
                            console.log('128,64');
                        }
                        if (capitalbase == 600000){
    
                            console.log('148,05');
                        }
                        if (capitalbase == 700000){
    
                            console.log('167,43');
                        }
                        if (capitalbase == 800000){
    
                            console.log('186,83');
                        }
                        if (capitalbase == 900000){
    
                            console.log('206,20');
                        }
                        if (capitalbase == 1000000){
    
                            console.log('225,59');
                        }
            
                        break;
                
                    default:
                        break;
                }
                break;
                
            default:
                break;
        }
            
                    


}

