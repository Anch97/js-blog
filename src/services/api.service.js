class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {      
        try {
            const request = new Request(this.url + '/posts.json', {
                // set of options
                // method 'post' is for creation objects in database (REST API rule)
                // body is for transimitting data in JSON form (simple js objects cannot be transfered via network)
                method: 'post',
                body: JSON.stringify(post)
            })
            // use fetch method to speak with server
            return useRequest(request)
        }   catch (error) {
            console.error(error)
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                // get method to get data (default method)
                method: 'get'
            })
            return useRequest(request)
        } catch (error) {
            console.error(error)
        }
    }

    async fetchPostById(id) {
        try {
            const request = new Request(`${this.url}/posts/${id}.json`, {
                // get method to get data (default method)
                method: 'get'
            })
            return useRequest(request)
        } catch (error) {
            console.error(error)
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    return await response.json() // .json() is for parsing
}

export const apiService = new ApiService('https://wfm-js-first-project-b0c3e-default-rtdb.europe-west1.firebasedatabase.app')