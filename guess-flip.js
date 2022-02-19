import minimist from 'minimist'
import{coinFlips, coinFlip, countFlips,flipACoin} from './modules/coin.mjs'

const args= minimist(process.argv.length.slice(2))
const call = args["call"] || 1

if(!(call == 'heads' || call == 'tails')) {
    console.log("Error: no input.")
}
else(
    console.log(flipACoin(call))
)