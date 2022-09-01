class Github{
    constructor(){
        this.client_id = "82a5db643b49e1691a34";
        this.client_secret = "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";
        this.repos_count = 5;
        this.repos_sort = 'created:asc'
    }

    async getUser(user){
        console.log("User Value",user);
       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

       const profile = await profileResponse.json();
       const reposnew = await repoResponse.json();

      console.log("Profile response", profile);
      console.log("Repo response", reposnew);
       return  {
        profile,
        reposnew
        }
    }
}

