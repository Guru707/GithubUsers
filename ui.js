class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body">
        <div class="row">
        <div class="col-md-3">
        <figure><img src="${user.avatar_url}" class="img-fluid"></figure>
        <a href="${user.html_url}" class="btn btn-primary w-100">View user</a>
        </div>
        <div class="col-md-9">
        <span class="badge-primary badge "> Public Repo: ${user.public_repos}</span>
        <span class="badge-secondary badge "> Public Gist: ${user.public_gists}</span>
        <span class="badge-success badge "> Followers: ${user.followers}</span>
        <span class="badge-info badge "> Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Created At: ${user.created_at}</li>
            <li class="list-group-item">Email: ${user.email}</li>
        </ul>
      </div>
      </div>
        </div>`;
  }
  showrepos(repos) {
   let output = "";

    repos.forEach((repo) => {
      output += `<div class="card card-body">
            <div class="row">
                <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a> </div>
                <div class="col-md-6">
                     <span class="badge-primary badge "> Stargazers: ${repo.stargazers_count}</span>
                     <span class="badge-secondary badge "> Watcher: ${repo.watchers}</span>
                     <span class="badge-success badge "> Watcher Count: ${repo.watchers_count}</span>
                </div>            
            </div>
            </div>
            `;
    });
    document.getElementById('repos').innerHTML = output;
  }
  usernotFound(content, classname) {
    var self = this;
    this.usernotFoundClear();
    let div = document.createElement("div");
    div.className = classname;
    div.appendChild(document.createTextNode(content));

    let container = document.querySelector(".searchContainer");
    let search = document.querySelector(".search");
    console.log(div);
    container.insertBefore(div, search);
    setTimeout(function () {
      self.usernotFoundClear();
    }, 3000);
  }
  usernotFoundClear() {
    let Alertbox = document.querySelector(".alert");
    if (Alertbox) {
      Alertbox.remove();
    }
  }
  clearUser() {
    this.profile.innerHTML = "";
  }
}

const ui = new UI();
