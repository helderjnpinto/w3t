import type { Arguments, CommandBuilder } from 'yargs';
import { numberToHex } from 'web3-utils';
import { ExecUtils, UtilsLogs } from '../utils';

type Options = {
  string: string;
};

export const command: string = 'numberToHex <string>';
export const desc: string = 'Web3: Returns the HEX representation of a given number value.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: 'boolean' },
    })
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { string } = argv;

  const returnData = ExecUtils.executable(() => numberToHex(string));
  UtilsLogs.print(returnData);

  process.exit(0);
};