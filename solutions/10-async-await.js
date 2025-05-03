import fsp from 'fs/promises';

// BEGIN
export async function exchange(file1, file2){
    let data1 =  await fsp.readFile(file1);
    let data2 = await fsp.readFile(file2);
    await fsp.writeFile(file1, data2);
    await fsp.writeFile(file2, data1);
}

// END