const chalk = require('chalk');

const byeList = [
  'have a nice day',
  'farewell',
  'server stopped',
  'goodbye',
  'see you later'
];

const emojiList = [
  '😄',
  '😎',
  '🤪',
  '🤩',
  '😁',
  '🐱',
  '🤣'
]

function getRandomBye() {
  const seed = (Math.random() * 100).toFixed(0) % byeList.length;
  return byeList[seed];
}

function getRandomEmoji() {
  const seed = (Math.random() * 100).toFixed(0) % emojiList.length;
  return emojiList[seed];
}

const log = {
  info(str) {
    console.log(chalk.bgGreen.bold(" INFO ") + ' ✨ ' + str);
  },
  warn(str) {
    console.log(chalk.bgYellow.bold(" WARN ") + ' ⚠️ ' + str);
  },
  error(str) {
    console.log(chalk.bgRed.bold(" ERR! ") + ' ❌ ' + str);
  },
  title(str) {
    console.log(chalk.bgBlueBright.bold(`  --- ${str} ---  `));
  },
  bye() {
    console.log(chalk.bgBlueBright.bold(" BYE~ ") + '  ' + getRandomBye() + ' ' + getRandomEmoji());
  },
  dbLine(title, description) {
    console.log(`※ ${chalk.cyan(title)}: \n   ${description}`);
  },
  help() {
    console.log(chalk.bgBlueBright.bold(" INFO ") +  '  we need your help to fix this bug 😭');
    console.log(
      chalk.bgBlueBright.bold(" INFO ") +
      `  please submit an issue at ${chalk.underline('https://github.com/ShawnZhou2000/@vinejs/issues')}`
    );
  }
}

module.exports = log;