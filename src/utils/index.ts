export class UtilsLogs {

    static checkStringResultAndPrintWarning(str: String) {
        if (str.trim().length === 0) {
            console.info('Warning: This result is returning a empty string')
        }
    }

    static printableError(error: any) {
        const msg = error?.message || error.toString();
        console.error("This command result in one error", msg)
    }

    static print(data: any) {
        process.stdout.write(data + "\n");
    }

}

type FunctionReturn<T> = () => T;


export class ExecUtils {

    static executable(argFunc: FunctionReturn<string>) {
        let returnData = '';
        try {
            returnData = argFunc();
            UtilsLogs.checkStringResultAndPrintWarning(returnData);
        } catch (error) {
            UtilsLogs.printableError(error);
        }
        return returnData;
    }
}