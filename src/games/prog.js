#!/usr/bin/env node

import greeting from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { magicNumbers, prog, progressionSolver } from '../math.js';

const progression = () => {
  const username = greeting('What number is missing in the progression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const n = magicNumbers();
    const a = magicNumbers(2, 25);
    const problem = prog(n, a);
    const userAnswer = answerForm(problem, 'string');
    const correctAnswer = progressionSolver(problem);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

export default progression;
