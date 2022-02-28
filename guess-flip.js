import minimist from 'minimist'
import { flipACoin } from './modules/coin.mjs';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
var args= require('minimist')(process.argv.slice(2))
args['call']

if (args.call == null) {
    console.log("Error: no input.\nUsage: node guess-flip.js --call=[heads|tails]");
}
if( args.call != heads && args.call != tails){
    console.log("Error: incorrect input.\nUsage: node guess-flip.js --call=[heads|tails]")
}
else{
    console.log(flipACoin(args.call))
}