let timer = null

const debounce = (func, delay) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    func()
  }, delay)
}

const hello = function (n) {
  console.log('hello', n)
}

// call hello() 5 times and expected only run the last one.
debounce(() => {
  hello(1)
}, 200)
debounce(() => {
  hello(2)
}, 200)
debounce(() => {
  hello(3)
}, 200)
debounce(() => {
  hello(4)
}, 200)
debounce(() => {
  hello(5)
}, 200)
