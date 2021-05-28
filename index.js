const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.yellowBright("Lets Quiz on Bhagavat Gita! "));

const quesBank = [
  {
    question:`
    Who was the Charioteer of Arjuna in the final battle?
    a: Bhima
    b: Nakula
    c: Krishna
    d: Draupada
    `,
    answer:"c"
  },
  {
    question:`
    What was Arjuna's flag marked with?
    a: Fire-god
    b: Hanuman
    c: Goddess of fortune
    d: Sword
    `,
    answer:"b"
  },
  {
    question:`
    Who amoung the following is not a pandava?
    a: Sahadeva
    b: Dushasana
    c: Yudhisthira
    d: Bhima
    `,
    answer:"b"
  },
  {
    question:`
    Who is Drona's son?
    a: Iruvan
    b: Sutasoma
    c: Vrishaketu
    d: Ashwatthama`,

    answer: "d"

  },
  {
  question:`
  Bhagavad Gita has chapters?
  a: 12
  b: 18
  c: 19
  d: 10
  `,
  answer: "b"
  }
];

let questionIndex= 0;
let score = 0;

function question(){
  rl.question(quesBank[questionIndex].question, (answer)=> {
    console.log(`You answered: ${answer}`);

    if(answer.toLowerCase()==quesBank[questionIndex].answer.toLowerCase()){
      console.log(chalk.green('Right answer'))
      questionIndex++;
      score+=10;
      serve();
    } else{
      console.log(chalk.red('Wrong answer'))
      questionIndex++;
      serve();

    }

  });
}

function serve(){
  if(isQuesBankExhausted()){
    console.log("Thanks for playing.!");
    console.log(chalk.greenBright("Your Final Score: "+ score));
    rl.close();
  }else{
    question();
  }
}

function isQuesBankExhausted(){
  if(quesBank.length == questionIndex){
    return true;
  }
}

serve();