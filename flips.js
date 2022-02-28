import { coinFlips, countFlips } from './modules/coin.mjs';
import { createRequire } from "module"
import minimist from 'minimist';

const require = createRequire(import.meta.url);
const args= require('minimist')(process.argv.slice(2))
args['number']

if(args.number == null) {
    var result = coinFlips(1);
    console.log(result);
    console.log(countFlips(result))
}
else{
    console.log(countFlips(coinFlips(args.number)))
}