import axios from 'axios'
import qs from 'qs'

let http = {
    get:'',
    post:''
}

http.post = function (api,data) {
   let parmas = qs.stringify(data)
   return new Promise((res,req)=>{
       axios.post(api,parmas).then(data=>{
           res(data)
       })
   })
}

http.get = function (api,data) {
    let parmas = qs.stringify(data)
    return new Promise((res,req)=>{
        axios.get(api,parmas).then(data=>{
            res(data)
        })
    })
 }

export default http