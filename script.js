const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.getElementById("search").value;
  
  const APIURL = `https://api.github.com/users/${userName}`;
  
  axios.get(APIURL)
  .then(response => {
    const userData = response.data;
    console.log(userData);
    
    const profile = document.getElementById("main");
    profile.innerHTML = `
      <section class="card">
        <img class="avatar" src=${userData.avatar_url}>
        <div class= "user-info">
          <h2>${userData.name}</h2>
          <p>${userData.bio || "This user has not submitted a bio."}</p>
          <ul>
            <li>${userData.followers} followers</li>
            <li>${userData.following} following</li>
            <li>${userData.public_repos} repositories</li>
          </ul>
          <a class= "repo" href=https://github.com/${userName}?tab=repositories>View repositories</a>
        </div>
      </section>
    `;
  });
});