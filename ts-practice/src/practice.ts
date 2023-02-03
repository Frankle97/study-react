function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}