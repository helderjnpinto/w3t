import type { Arguments, CommandBuilder } from 'yargs';
import { hexToAscii } from 'web3-utils';
import { ExecUtils, UtilsLogs } from '../utils';

type Options = {
  string: string;
  upper: boolean | undefined;
};

export const command: string = 'hexToAscii <string>';
export const desc: string = 'Web3: Returns the ASCII string representation of a given HEX value.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: 'boolean' },
    })
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { string, upper } = argv;
  
  const returnData = ExecUtils.executable(() => hexToAscii(string));
  UtilsLogs.print(upper ? returnData.toUpperCase() : returnData);

  process.exit(0);
};