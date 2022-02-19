import { coinFlips, countFlips } from './modules/coin.mjs';
import minimist from 'minimist';


const args= minimist(process.argv.length.slice(2))
const num = args["number"] || 1

const result = coinFlips(num)

console.log(result)
console.log(countFlips(result))