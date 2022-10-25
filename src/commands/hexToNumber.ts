import type { Arguments, CommandBuilder } from 'yargs';
import { hexToNumberString } from 'web3-utils';
import { ExecUtils, UtilsLogs } from '../utils';

type Options = {
  string: string;
};

export const command: string = 'hexToNumber <string>';
export const desc: string = 'Web3: Returns the number representation of a given HEX value as a string.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: 'boolean' },
    })
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { string } = argv;
  
  const returnData = ExecUtils.executable(() => hexToNumberString(string));
  UtilsLogs.print(returnData);

  process.exit(0);
};