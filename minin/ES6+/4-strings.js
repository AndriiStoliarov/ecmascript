// const title = 'Hello!';

// const isVisible = () => Math.random() > 0.5;

// const template = `<h1 id='demo' style="color: red">${title}</h1>`;

// const template = `
//     ${isVisible() ? `<p>Visible</p>` : ``}
//     <h1 id='demo' style="color: red">${title}</h1>
// `;

// console.log('template :>> ', template);


//* Methods

const str = 'Hello';

console.log('str.startsWith :>> ', str.startsWith('He'));
console.log('str.startsWith :>> ', str.startsWith('e'));
console.log('str.endsWith :>> ', str.endsWith('lo'));
console.log('str.endsWith :>> ', str.endsWith('e'));

console.log('str.includes :>> ', str.includes('llo'));

console.log('str.repeat :>> ', str.repeat(3));

console.log('str.trim :>> ', str.trim());
console.log('str.trimEnd :>> ', str.trimEnd());
console.log('str.trimStart :>> ',str.trimStart());

console.log('str.padStart :>> ', str.padStart(10));
console.log('str.padStart :>> ', str.padStart(10, '1234'));
console.log('str.padStart :>> ', str.padEnd(8, 'abc'));