const parseJSON = async (filePath) => {
  const start = Date.now();
  const fileContent = await Bun.file(filePath).text();
  JSON.parse(fileContent);
  return Date.now() - start;
};

const readTextFile = async (filePath) => {
  const start = Date.now();
  await Bun.file(filePath).text();
  return Date.now() - start;
};

let totalTimeJson = 0;

totalTimeJson += await parseJSON('./json/test.json');
totalTimeJson += await parseJSON('./json/test2.json');
totalTimeJson += await parseJSON('./json/test3.json');
totalTimeJson += await parseJSON('./json/test4.json');
totalTimeJson += await parseJSON('./json/test5.json');

console.log('Node average time - JSON -->', totalTimeJson / 5);

let totalTimeTxt = 0;

totalTimeTxt += await readTextFile('./txt/test.txt');
totalTimeTxt += await readTextFile('./txt/test2.txt');
totalTimeTxt += await readTextFile('./txt/test3.txt');
totalTimeTxt += await readTextFile('./txt/test4.txt');
totalTimeTxt += await readTextFile('./txt/test5.txt');

console.log('Node average time - TXT -->', totalTimeTxt / 5);
