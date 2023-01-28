import user from "./users.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please enter your account number"
        },
        {
            name: "pin",
            type: "password",
            message: "please enter your pin"
        }
    ]);
    let users = user.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    if (typeof users != "undefined") {
        console.log(`Welcome ${users.name}`);
        mainScreen(users.balance);
    }
    else {
        console.log("please enter the valid account or pincode");
    }
}
export default login;
