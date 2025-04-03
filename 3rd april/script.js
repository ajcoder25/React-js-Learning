const strings = ["hello", "world", "javascript", "openai", "language"]

const reverseArray = strings.map((str => str.split("").reverse().join("")))

console.log(reverseArray)