import fsp from 'fs/promises';

// BEGIN
export function reverse (filepath, callback) {
   return  fsp.readFile(filepath, 'utf8')
        .then(content => fsp.writeFile(filepath, content.split('\n').reverse().join('\n')))
}
// END