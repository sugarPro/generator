


function* createIterator(from: number, to: number): IterableIterator<number> {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

const iterator = createIterator(1, 5)
for (const val of iterator) {
  console.log(val)
}


function* factorial(n: number): IterableIterator<number> {
  // your code here
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
    yield result;
  }
}

for (const n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120


function* flat<T>(arr: T[]): IterableIterator<T> {
  // your code goes here
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flat(item);
    } else {
      yield item;
    }
  }
}

const A = [1, [2, [3, 4], 5], 6];
for (const f of flat(A)) {
  console.log(f);
}
// 1 2 3 4 5 6

function* upper(items: string[]): IterableIterator<string | null> {
  // your code goes here
  for (const item of items) {
    try {
      yield item.toUpperCase();
    } catch (e) {
      yield null;
    }
  }
}

const bad_items = ['a', 'B', 1, 'c'];

for (const item of upper(bad_items as string[])) {
  console.log(item);
}
// want to log: A, B, null, C



function askFoo() {
  return new Promise<string>((resolve, reject) => {
    resolve("foo");
  });
}

function co(func: () => IterableIterator<Promise<any>>) {
  // your code goes here
  const it = func()

  const handler = <T>(data?: T) => {
    const result = it.next(data);
    if (!result.done) {
      result.value.then(handler);
    }
  };

  handler()
}

function* genFunc(): IterableIterator<Promise<string>> {
  const foo = yield askFoo();
  console.log(foo);
}

co(genFunc);


console.log('hello')
