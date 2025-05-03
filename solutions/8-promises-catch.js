import fsp from 'fs/promises';
import path from "path";
import fs from "fs";

// BEGIN
export function touch (filepath) {
    return fsp.access(filepath, fs.constants.W_OK | fs.constants.R_OK)
        .catch(()=>{
            fsp.writeFile(filepath,'');
            })
}
// END