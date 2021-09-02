//sanity test
//console.log("hello")

// try some loop stuff

//for-used the most
//while-used the most
//do-while-will only iterate once


//Question? Which loop do i use and when?
//for - when I know how many
//while - just keep doing it until i'm done
//loop until we reach 10
// for (let idx = 1; idx <= 10; idx++)
// {
//     // we have the code we want repeat
//     console.log(`Current iteration is ${idx}`);
// }

// // this line of code will run when we exit the loop
// alert(`Done with the loop thingy`);

//let whileNotEddie = true; //flag or boolean.
//keep asking the user for a cool name until they enter Eddie
//while(whileNotEddie)
// {
//     let coolName = prompt("Enter a cool name!");
//     //did they enter eddie?
//     if (coolname === "Eddie") 
//     {
//      whileNotEddie === false;   
//     }
// }

//Write the JavaScript code to display BREAK OFF THE ATTACK! Their shields are still up! 
//then after 3 seconds (3000 ms) in the console display IT'S A TRAP! using a one off timer.
console.log('BREAK OFF THE ATTACK! Their shields are still up!')
setTimeout(itsATrap,5000); // call the function itsatrap after 3 seconds

//this is our callback function
function itsATrap()
{
    const msg = "IT'S A TRAP!";
    console.log(msg);
    alert(msg);
}