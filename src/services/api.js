
import axios from 'axios'
function getCity(){
  return axios.get('/api/cityList').then((response) => {
    // console.log(response.data)
        return response.data
      })
}
function getLocalCity(){
  return axios.get('/api/getLocation').then((res)=>{
    return res.data
  })
}
export {getCity,getLocalCity}