import type { Arguments, CommandBuilder } from 'yargs';
import { sha3 } from 'web3-utils';

type Options = {
  string: string;
  upper: boolean | undefined;
};

export const command: string = 'sha3 <string>';
export const desc: string = 'Web3: Will calculate the sha3 of the input.';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: 'boolean' },
    })
    .positional('string', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { string, upper } = argv;
  const hash = sha3(string) || '';
  process.stdout.write(upper ? hash.toUpperCase() : hash);
  process.exit(0);
};