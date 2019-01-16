export const SAVE_GEOHASH_ACTION = 'SAVE_GEOHASH_ACTION';
export const SAVE_LATLNT_ACTION = 'SAVE_LATLNT_ACTION';

// export function saveGeohashAction(geohash) {
//     return {
//       type: 'SAVE_GEOHASH_ACTION',
//       data:[1,2,3,4] 
//     }
//   }
export const saveGeohashAction=(geohash)=>({
    type:SAVE_GEOHASH_ACTION,
    saveGeohashAction:
    {
      geohash
   }
  }
)