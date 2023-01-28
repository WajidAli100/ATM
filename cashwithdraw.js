import inquirer from "inquirer";
async function otheramount(balance) {
    const othramount = await inquirer.prompt([{
            name: "otherAmount",
            type: "number",
            message: "Please enter your amount"
        }]);
    if (othramount.otherAmount < balance) {
        balance -= othramount.otherAmount;
    }
    else {
        console.log("you have insufficient balance");
        balance = await otheramount(balance);
    }
    return balance;
}
async function cashwithdraw(balance) {
    const answer = await inquirer.prompt([{
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "3000", "5000", "10000", "otheramount"],
            message: "please select your amount"
        }]);
    switch (answer.amount) {
        case "500":
            if (balance > Number(answer.account)) {
                balance -= 500;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log(`You have insufficient balance ${balance}`);
            }
            break;
        case "1000":
            if (balance > Number(answer.account)) {
                balance -= 1000;
                console.log(`your new balance is: ${balance}`);
                break;
            }
            else {
                console.log(`You have insufficient balance ${balance}`);
            }
        case "2000":
            if (balance > Number(answer.account)) {
                balance -= 2000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log(`You have insufficient balance ${balance}`);
            }
            break;
        case "3000":
            if (balance > Number(answer.account)) {
                balance -= 3000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log(`You have insufficient balance ${balance}`);
            }
            break;
        case "5000":
            if (balance > Number(answer.account)) {
                balance -= 5000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log(`You have insufficient balance ${balance}`);
            }
            break;
        case "10000":
            if (balance > Number(answer.account)) {
                balance -= 10000;
                console.log(`your new balance is: ${balance}`);
            }
            else {
                console.log(`You have insufficient balance ${balance}`);
            }
            break;
        case "otheramount":
            balance = await otheramount(balance);
            console.log(`your new balance is: ${balance}`);
            break;
    }
    return balance;
}
export default cashwithdraw;
