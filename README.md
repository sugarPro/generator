### Generator 

>[MDN ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)


生成器函数在执行时能暂停，后面又能从暂停处继续执行。

调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的**迭代器**`iterator`对象。当这个迭代器的`next()`方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现`yield`的位置为止，`yield`后紧跟迭代器要返回的值。或者如果用的是` yield*`，则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。

`next()`方法返回一个对象，这个对象包含两个属性：`value` 和 `done`，`value` 属性表示本次` yield` 表达式的返回值，`done` 属性为布尔类型，表示生成器后续是否还有 `yield` 语句，即生成器函数是否已经执行完毕并返回。

调用` next()`方法时，如果传入了参数，那么这个参数会作为上一条执行的 ` yield` 语句的返回值

```javascript
function* createIterator() {
  yield 1;
  let x = yield 'foo';
  yield x + 1;
  return 'returned';
  yield 'unreadable';
}

let iterator = createIterator();

console.log(iterator.next())			//{ value: 1, done: false }
console.log(iterator.next())			//{ value: 'foo', done: false }
console.log(iterator.next(2))			//{ value: 3, done: false }
console.log(iterator.next())			//{ value: 'returned', done: true }
console.log(iterator.next())			//{ value: undefined, done: true }
```



> [Github learn-generators](https://github.com/isRuslan/learn-generators) 
>
> [Github co](https://github.com/tj/co): Generator 函数的自动执行库，通过`thunk` 或`promise`方式

```js

const fs = require('fs')
const readDir = path => cb => fs.readdir(path, cb)	// thunkify
const path = 'path'

// 目标：co封装后，用顺序编码方式可以执行异步逻辑
co(function*(){
	const result = yield readDir(path)
  console.log(result)
})

// thunk方式自执行generator，来实现co
function co(generator){
  const it = generator()
  const handler = (err, data) => {
    const result = it.next(data);
    if(!result.done){
			result.value(handler)
    }
  }
  
  handler()
}

```