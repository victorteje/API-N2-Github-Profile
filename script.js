const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.getElementById("search").value;
  
  const APIURL = `https://api.github.com/users/${userName}`;
  
  axios.get(APIURL).then(response => {
    const userData = response.data;
    console.log(userData);
    
      const profile = `
        <section class="card">
          <img class="avatar" src=${userData.avatar_url}>
          <div class= "user-info">
            <h2>${userData.login}</h2>
            <ul>
              <li>${userData.followers} followers</li>
              <li> - ${userData.following} following</li>
              <li> - ${userData.public_repos} repositories</li>
            </ul>
          </div>
        </section>
      `;
      const printProfile = document.getElementById("main")
      printProfile.innerHTML = profile;
  });
    
});