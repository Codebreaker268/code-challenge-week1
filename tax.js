//calculate paye
function getNetSalary(gross){
    let Paye;
    if (gross<=24000&&gross>=0){
        Paye=gross*0.1;

    }
    else if(gross<=32333&&gross>24000){
        Paye=2400+((gross-24000)*0.25);

    }
    else if(gross<=500000&&gross>32333){
        Paye=4483.25+((gross-32333)*0.3);

    }
    else if(gross<=800000&&gross>500000){
        Paye=144783.35+((gross-500000)*0.325);

    }
    else {
        Paye=242283.35+((gross-800000)*0.325)
    }
//calculate nhif
    let nhif;
    if(gross<=5999&&gross>=0){
        nhif=150;
    }else if(gross<=7999&&gross>=6000){
        nhif=300;

    }else if(gross<=11999&&gross>=8000){
        nhif=400;

    }else if(gross<=14999&&gross>=12000){
        nhif=500;

    }else if(gross<=19999&&gross>=15000){
        nhif=600;
    }else if(gross<=24999&&gross>=20000){
        nhif=750;
    }else if(gross<=29999&&gross>=25000){
        nhif=850;
    }else if(gross<=34999&&gross>=30000){
        nhif=900;
    }
    else if(gross<=39999&&gross>=350000){
        nhif=950;
    }else if(gross<=44999&&gross>=40000){
        nhif=1000;
    }else if(gross<=49999&&gross>=45000){
        nhif=1100;
    }else if(gross<=59999&&gross>=50000){
        nhif=1200;
    }else if(gross<=69000&&gross>=60000){
        nhif=1300;
    }else if(gross<=79999&&gross>=70000){
        nhif=1400;
    }else if(gross<=89999&&gross>=80000){
        nhif=1500;
    }else if(gross<=99999&&gross>=90000){
        nhif=1600;
    }else{
        nhif=1700;
    }
    // caculate nssf
    const nssfRate=0.06;
    let nssf=gross*nssfRate;
//calculate net salary after deductions
    const netSalary=gross-(Paye+nhif+nssf);

    return netSalary;


}
let netSalary=prompt("Enter gross:");
let gross=parseFloat(netSalary);
if (!isNaN(gross)){
    let netSalary=getNetSalary(gross);
    console.log(`Netsalary is ${netSalary}`);
}
    else{
        console.log('invalid entry');
    }
    


