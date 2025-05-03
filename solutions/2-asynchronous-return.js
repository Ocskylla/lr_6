import fs from 'fs';

// BEGIN
export default function  write (filepath, data, callback) {
    fs.writeFile(filepath, data, 'utf8',(err) => {
        callback(null);
    })
}
// END