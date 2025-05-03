import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export  function getDirectorySize(directory, callback) {
    let size = 0;

    fs.readdir(directory, (err, fileNames) => {
        if (err) {
            callback(err);
            return;
        }

        const fullPaths = fileNames.map(name => path.join(directory, name));

        async.map(fullPaths, fs.stat, (err, stats) => {
            if (err) {
                callback(err);
                return;
            }

            size = _.sumBy(stats, item => item.isFile() ? item.size : 0);
           callback(null, size);
        });
    });
};

// END

