import axios from '../middleware/server'

let Currentcity = () => {
  axios.get('/20/red').then(res=>{
    console.log(res)
  })
}

export {
    Currentcity
}


// 秘钥:4t3sdCf91cDj7bVknn2WmKVGKrpVPIej