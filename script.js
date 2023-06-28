// const APIURL = 'https://api.github.com/users/'

axios.get('https://api.github.com/users/')
.then((response)) => {
    
}

.catch((error)) => {
    console.log("No user with that name");
}