const templateName = process.env.TEMPLATE || 'sensor';
const size = Number(process.env.SIZE || 10);

const moduleImport = import(`./templates/${templateName}`);

moduleImport.then((result: any) => {
  const template = result.default;

  const data = Array.from(Array(size).keys()).map((index: number) => {
    return template(index);
  });

  console.log(JSON.stringify(data, null, 2));
});

