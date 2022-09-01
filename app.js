let github = new Github;

console.log(github);
var searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', function(){
    let usertext = this.value;
    

    if(usertext !== ''){
       
        github.getUser(usertext).then(function(data){
            if(data.profile.message === "Not Found"){
                ui.usernotFound('User not Found','alert alert-danger')
            }
            else{
                ui.showProfile(data.profile);
                ui.showrepos(data.reposnew);
            }
        })

       
    }else{
        ui.clearUser();          
    }

   
})

