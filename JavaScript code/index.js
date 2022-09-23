const objectA = {
	a: 10,
	b: true
}
const copy0fA = objectA
copy0fA.a = 20
console.log(objectA)
copy0fA.c = 'abc'
console.log(objectA)