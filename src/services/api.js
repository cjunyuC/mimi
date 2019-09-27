
import axios from 'axios'
// function getCity(){
//   return axios.get('/api/cityList').then((response) => {
//         return response.data
//       })
// }
function getCity(){
  return new Promise((resolve,reject)=>{
    let arr = localStorage.getItem('arr')
  if(arr){
    resolve(JSON.parse(arr))
  }else{
    axios.get('/api/cityList').then((res) => {
      console.log(111111111)
      console.log(res.data)
     localStorage.setItem('arr',JSON.stringify(res.data))
      resolve(res.data)
    })
  }
  })
}
function getLocalCity(){
  return axios.get('/api/getLocation').then((res)=>{
    return res.data
  })
}

export {getCity,getLocalCity



}