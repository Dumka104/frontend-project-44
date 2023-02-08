import readlineSync from 'readline-sync';

export default (description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have youe name? ');
  console.log(`Hello, ${name}`);
  if (description !== undefined) console.log(description);
  return name;
};
