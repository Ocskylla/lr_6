import fs from 'fs';
import stats from "lodash";

// BEGIN
export const compareFileSizes = (filepath1, filepath2, callback) => {
    fs.stat(filepath1,  (err1, stats1) => {
        fs.stat(filepath2, (err2, stats2) => {
            callback(null, Math.sign(stats1.size - stats2.size));
        });
    });
};
// END