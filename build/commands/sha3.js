"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const web3_utils_1 = require("web3-utils");
exports.command = 'sha3 <string>';
exports.desc = 'Web3: Will calculate the sha3 of the input.';
const builder = (yargs) => yargs
    .options({
    upper: { type: 'boolean' },
})
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { string, upper } = argv;
    const hash = (0, web3_utils_1.sha3)(string) || '';
    process.stdout.write(upper ? hash.toUpperCase() : hash);
    process.exit(0);
};
exports.handler = handler;
