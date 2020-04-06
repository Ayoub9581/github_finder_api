class Github {
    constructor() {
        this.client_id     = '3722899042c8f2959bf1';
        this.client_secret = 'fb50c5a95b50fde2679c218a7979f5ad3c48c084';
        this.repos_count   = 5; 
        this.repos_sort = 'created_at : asc' 
    }

    // GET SINGLE USER
    async getUser(user) {
        // todo: fetch a single user 
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // todo: fetch repos of this user 
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json()

        return {
            profile,
            repos
        }
    }
}