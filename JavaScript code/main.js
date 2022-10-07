const fnWidthError = () => {
	throw new Error('Some error')
}

try {
	fnWidthError()
} catch (error) {
	console.error(error)
	console.log(error.message)
}

console.log('Continue...')