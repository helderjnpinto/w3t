"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const web3_utils_1 = require("web3-utils");
const utils_1 = require("../utils");
exports.command = 'hexToNumber <string>';
exports.desc = 'Web3: Returns the number representation of a given HEX value as a string.';
const builder = (yargs) => yargs
    .options({
    upper: { type: 'boolean' },
})
    .positional('string', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { string } = argv;
    const returnData = utils_1.ExecUtils.executable(() => (0, web3_utils_1.hexToNumberString)(string));
    utils_1.UtilsLogs.print(returnData);
    process.exit(0);
};
exports.handler = handler;
