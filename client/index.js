const user = {
	firstName: 'Esteban',
	lastName: 'Borai',
	username: 'estebanborai',
	birthday: new Date(1995, 1, 30),
	bio: 'Software Development Enthusiast.',
	avatar: 'http://images.clipartpanda.com/paper-airplane-drawing-tumblr-10513698.jpg'
};

let avatar = document.getElementById('avatar');
avatar.setAttribute('src', user.avatar);

let bio = document.getElementById('bio');
bio.innerText = user.bio;

function getPosts() {
	fetch('/posts')
		.then(res => (console.log(res)))
		.catch(err => console.error(err));
};

getPosts();
