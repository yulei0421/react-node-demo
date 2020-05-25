/*
 * @Author: 余磊
 * @Date: 2020-05-25 15:58:19
 * @LastEditTime: 2020-05-25 16:29:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/util/urlParmas/index.js
 */ 
export function getParams () {
	let obj:any = {

	}
	let url = window.location.href
	if(url.indexOf('?')!=-1){
		const urlObj = url.split('?')[1].split('&')
		urlObj.forEach(res => {
			let item = res.split('=')
			obj[item[0]] = item[1]
		})
	}
	return obj
}


