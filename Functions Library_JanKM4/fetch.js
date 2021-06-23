fetch('http://example.com/songs')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));