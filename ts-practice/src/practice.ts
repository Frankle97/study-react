let count = 0;
count += 1;
// count = '갑자기 분위기 문자열'; [X]

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// messages.push(1); // message type is string. cannot input number [X]

let mightBeUndefined: string | undefined = undefined; // string or undefined
let nullableNumber: number | null = null;


let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; [X] red, orange, yellow 만 입력 가능