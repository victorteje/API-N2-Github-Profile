

let getData = () => {
axios.get("https://api.github.com/users")
.then(response => {
  const gitUsers = response.data;
  console.log(gitUsers);
  
  gitUsers.forEach(user => {
    const profile = `
      <section class="card">
        <img class="avatar" src=${user.avatar_url}>
        <div class= "user-info">
          <h2>${user.login}</h2>
          <ul>
            <li>${user.followers_url}</li>
            <li>${user.following_url}</li>
            <li>${user.repos_url}</li>
          </ul>
        </div>
      </section>
    `;
    let printProfile = document.getElementById("main")
    printProfile.innerHTML = profile;
  });
})
.catch(err => {
  console.log(err);
})
}

getData();