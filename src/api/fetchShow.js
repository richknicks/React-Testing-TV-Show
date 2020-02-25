import axios from 'axios';



export const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(response => {
          console.log(response)
          return response
       } )
       .catch(error => console.log('This is an error',error)) 
  }

  export default fetchShow