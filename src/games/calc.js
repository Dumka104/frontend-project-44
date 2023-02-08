import greeting from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { getOperator, basicMath, magicNumbers } from '../math.js';

const calc = () => {
  const username = greeting('What is the result of the expression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const currentOperator = getOperator(['+', '-', '*']);
    const x = magicNumbers(2, 15);
    const y = magicNumbers(2, 15);
    const problem = `${x} ${currentOperator} ${y}`;
    const userAnswer = answerForm(problem);
    const correctAnswer = basicMath(x, y, currentOperator);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

export default calc;
