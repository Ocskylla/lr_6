import fs from 'fs';

// BEGIN
export default function watch (filepath, interval, callback) {
    const nowTime = Date.now();
   let timerID = setInterval(() => {
       fs.stat(filepath, (err, stats) => {
       if(err){
           clearInterval(timerID);
           callback(err);
           return;
       }
        let change = stats.mtimeMs;
       if(change > nowTime){
           callback(null);
       }
   })
   }, interval);
    return timerID;
}
// END
