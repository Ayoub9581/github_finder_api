class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    // ? show user github profils
    showProfile(user) {
        this.clearAlert();
        this.profile.innerHTML = `
        
    
        <div class="card mb-4">
          
          <div class="row">
    
            <div class="col-md-6">
              <img class="img-fluid rounded-left" src="${user.avatar_url}" alt="project image">
              <ul class="list-group-horizontal list-unstyled font-small mt-5 mb-0 ">
             
            </div>
    
            <div class="col-md-6 p-5 ">
    
              <h5 class="font-weight-normal mb-3">
                <a href="${user.html_url}" target="_blank"> github account </a>
              </h5>
    
              <div class="d-flex justify-content-between">
           
              <ul class="list-group-horizontal list-unstyled font-small mt-5 mb-0 ">
                <li>
                  <p class="text-uppercase mb-2"><strong>Public Repos</strong></p>
                  <p class="text-muted mb-4">
                  <span class="badge badge-primary badge-pill"> ${user.public_repos} </span>
                  </p>
                </li>
    
                <li>
                  <p class="text-uppercase mb-2"><strong>Public Gists</strong></p>
                  <p class="text-muted mb-4">
                  <span class="badge badge-primary badge-pill">14${user.public_gists}</span>
                  </p>
                </li>
    
                <li>
                  <p class="text-uppercase mb-2"><strong>Followers</strong></p>
                  <p class="text-muted mb-4">
                  <span class="badge badge-primary badge-pill">${user.followers} </span>
                  </p>
                </li>
    
                <li>
                  <p class="text-uppercase mb-2"><strong>following</strong></p>
                  <p class="text-uppercase mb-2">
                  <span class="badge badge-primary badge-pill">${user.following} </span>
                  </p>
                </li>
    
            
    
              </ul>

              <ul class="list-group-horizontal list-unstyled font-small mt-5 mb-0">
              <li class="px-2">
              <p class="text-uppercase mb-2"><strong>Company</strong></p>
              <p class="text-muted mb-4 ">
              <span class="badge badge-primary badge-pill"> ${user.company} </span>
              </p>
            </li>

            <li class="px-2">
              <p class="text-uppercase mb-2"><strong>Website</strong></p>
              <p class="text-muted mb-4 ">
              <span class="badge badge-primary badge-pill"> ${user.blog} </span>
              </p>
            </li>

            <li class="px-2">
              <p class="text-uppercase mb-2"><strong>Location</strong></p>
              <p class="text-muted mb-4 ">
              <span class="badge badge-primary badge-pill"> ${user.location} </span>
              </p>
            </li>

            <li class="px-2">
              <p class="text-uppercase mb-2"><strong>Created</strong></p>
              <p class="text-muted mb-4 ">
              <span class="badge badge-primary badge-pill"> ${user.created_at} </span>
              </p>
            </li>
            </ul>
            </div>
              
    
            </div>
    
          </div>
    
        </div> `
    } 

    showRepos(repos) {
        let output = '';

        // create ul 
        // let ul = document.createElement('ul');
        // ul.className = 'list-group';

        repos.forEach((repo) => {
            output += `
            <li class="list-group-item active">
              <div class="md-v-line">
              </div>
              <i class="fas fa-laptop mr-4 pr-3"></i> 
              <a href="${repo.html_url}" target="_blank" class="text-white"> ${repo.name} </a>
            </li>
            `
        });

        // ul.innerHTML = output
        // console.log(ul);
        

        document.getElementById('repos').innerHTML = output;
    }

    // ? 
    showAlert(message, className) {
        this.clearAlert();
        const div  = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        document.getElementById('messagealert').appendChild(div);

        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }


    // ? Clear Alert Message
    clearAlert() {
        const curentAllert  = document.querySelector('.alert');
        if(curentAllert) {
            curentAllert.remove();
        }
    }
    
    // ? Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

}