"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecUtils = exports.UtilsLogs = void 0;
class UtilsLogs {
    static checkStringResultAndPrintWarning(str) {
        if (str.trim().length === 0) {
            console.info('Warning: This result is returning a empty string');
        }
    }
    static printableError(error) {
        const msg = (error === null || error === void 0 ? void 0 : error.message) || error.toString();
        console.error("This command result in one error", msg);
    }
    static print(data) {
        process.stdout.write(data + "\n");
    }
}
exports.UtilsLogs = UtilsLogs;
class ExecUtils {
    static executable(argFunc) {
        let returnData = '';
        try {
            returnData = argFunc();
            UtilsLogs.checkStringResultAndPrintWarning(returnData);
        }
        catch (error) {
            UtilsLogs.printableError(error);
        }
        return returnData;
    }
}
exports.ExecUtils = ExecUtils;
