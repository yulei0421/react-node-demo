import {saveGeohashAction} from '../action'

export default(state={},action)=>{
    // console.log(action)
    // console.log(window.localStorage)
    // console.log(state)
    switch (action.type){
        case "SAVE_GEOHASH_ACTION":
        let a = {...state,saveGeohashAction:action.saveGeohashAction}
        var b = JSON.stringify(a)
        window.localStorage.setItem("a",b)
        let c = JSON.parse(window.localStorage.getItem("a"))
        // console.log(window.localStorage)
        return c
        default:
          state = JSON.parse(window.localStorage.getItem("a"))
        return state
    }
}

