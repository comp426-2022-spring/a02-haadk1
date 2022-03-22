import { coinFlips, countFlips } from './modules/coin.mjs';
import minimist from 'minimist';


const args= minimist(process.argv.slice(2))
const num = args["number"] || 1

var result = []

if(num != null ) {
    result = coinFlips(num)
    console.log(result)
    console.log(countFlips(result))
}
else {
    result = coinFlips(1)
    console.log(result)
    console.log(countFlips(result))
}