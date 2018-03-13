const user = {
	firstName: 'Esteban',
	lastName: 'Borai',
	username: 'estebanborai',
	socialNetworks: [
		{
			network: 'facebook',
			link: 'https://www.facebook.com/'
		},
		{
			network: 'twitter',
			link: 'https://twitter.com/'
		},
		{
			network: 'tumblr',
			link: 'https://www.tumblr.com/'
		}
	],
	birthday: new Date(1995, 1, 30),
	bio: 'Software Development Enthusiast.',
	avatar: 'http://js.gabzreveur.com/images/logo.jpg'
};

let avatar = document.getElementById('avatar');
avatar.setAttribute('src', user.avatar);

let bio = document.getElementById('bio');
bio.innerText = user.bio;

function renderSocialNetworks() {
	// Selecciona un elemento HTML con id 'social-networks'
	let socialNetwors = document.getElementById('social-networks');
	for (let i = 0; i < user.socialNetworks.length; i++) {
		// Crea un elemento HTML <li>
		let listItem = document.createElement('li');
		// Crea un elemento <a>
		let archor = document.createElement('a');
		// Toma el elemento <a> y asigna el atributo href con valor correspondiente
		// a el que se encuenta en user.socialNetwork[i].link
		archor.setAttribute('href', user.socialNetworks[i].link);
		// Crea un elemento <i>
		let icon = document.createElement('i');
		// Asigna una clase al elemento <i>
		icon.className = `fab fa-${user.socialNetworks[i].network}`;
		// Agrega el elemento <i> como hijo del elemento <a>
		archor.appendChild(icon);
		// Agrega el elemento <a> a el <li>
		listItem.appendChild(archor);
		// Agrega el elemento <li> a el <ul> con id "social-networks"
		socialNetwors.appendChild(listItem);
	}
}
// Llama a la funcion que renderiza las redes sociales
renderSocialNetworks();

function getPosts() {
	return fetch('/posts')
		.then(res => {
			if (res.ok) {
				return res;
			}})
		.catch(err => console.error(err));
};

posts = getPosts();
console.log(posts);
