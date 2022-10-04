const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt
})

const firstPost = {
	id: 1,
	autor: 'Alex'
}

newPost(firstPost)