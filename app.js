// Search Input 
const searchUser = document.getElementById('searchUser');
const github = new Github;
const ui  = new UI;

// todo: Search input event listener
searchUser.addEventListener('keyup',(e) => {
    /* ** GET INPUT TEXT  */
    const userText = e.target.value;

    if(userText !== '') {
        console.log('it works');

        // todo : Make http call 
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found") {
                // Show alert 
                ui.showAlert('User Not Found ','alert alert-danger')
                ui.clearProfile()
                
            } else {
                // todo: Show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos);

            }
            
        })
        .catch(err => console.log(err))
    } else {
        // ** Clear profile
        ui.clearProfile()
    }


} )
