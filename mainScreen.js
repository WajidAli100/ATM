import inquirer from "inquirer";
import cashwithdraw from "./cashwithdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import utility from "./utilityBill.js";
async function anotherTransaction() {
    const Otrans = await inquirer.prompt([{
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another transaction?"
        }]);
    return Otrans.otherTrans;
}
async function mainScreen(balance) {
    do {
        const options = await inquirer.prompt([{
                name: "menu",
                type: "list",
                choices: [`Balance Inquiry`, `cash withdraw`, `Cash deposit`, `transfer`, `Utility bills`, `Exit`],
                message: "Please select the transaction type"
            }]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(`Your current balance is:${balance}`);
                break;
            case "cash withdraw":
                balance = await cashwithdraw(balance);
                console.log(`your transaction is successful new balance is ${balance}`);
                break;
            case "Cash deposit":
                balance = await cashDeposit(balance);
                console.log(`your transaction is successful new balance is ${balance}`);
                break;
            case "transfer":
                balance = await transfer(balance);
                console.log(`your transaction is successful new balance is ${balance}`);
                break;
            case "Utility bills":
                balance = await utility(balance);
                console.log(`your transaction is successful new balance is ${balance}`);
                break;
            case "Exit":
                anothertran = "N0";
                break;
        }
        var anothertran = await anotherTransaction();
    } while (anothertran != "No");
}
export default mainScreen;
