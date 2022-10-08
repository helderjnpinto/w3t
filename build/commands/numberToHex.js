"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const web3_utils_1 = require("web3-utils");
exports.command = 'numberToHex <string>';
exports.desc = 'Web3: Returns the HEX representation of a given number value.';
const builder = (yargs) => yargs
    .options({
    upper: { type: 'boolean' },
})
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { string } = argv;
    const result = (0, web3_utils_1.numberToHex)(string) || '';
    process.stdout.write(result + "\n");
    process.exit(0);
};
exports.handler = handler;
