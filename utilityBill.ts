import inquirer from "inquirer";

const Electrycity=Math.ceil(Math.random()*1000+1);
const Gas=Math.ceil(Math.random()*1000+1);
const phone=Math.ceil(Math.random()*1000+1);

async function utility(balance:number) {
    const input=await inquirer.prompt([{
        name:"BillType",
        type:"list",
        choices:["Electrycity","Gas","phone"],
        message:"select the billtype"
    }]);
    if(input.BillType=="Electrycity"){
        console.log(`your bill amount is :${Electrycity}`);
        balance -=Electrycity;
    }else if(input.BillType=="Gas"){
        console.log(`your bill amount is :${Gas}`);
        balance -=Gas;
    }else if(input.BillType=="phone"){
        console.log(`your bill amount is :${phone}`);
        balance -=phone;
    }
    return balance;
}
export default utility;