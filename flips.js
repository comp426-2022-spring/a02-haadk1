import minimist from 'minimist'
import{coinFlips, coinFlip, countFlips} from './modules/coin.mjs'


const args= minimist(process.argv.length.slice(2))
const num = args["number"] || 1

let flips = coinFlips(num)
console.log(flips)
console.log(countFlips(flips))
