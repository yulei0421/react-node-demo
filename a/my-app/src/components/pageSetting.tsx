import SettingComponents from './index'
import React from 'react';
interface SetItem {
    moudleName?:string, 
    moudleDate?:object
}
function PageSetting(props:any) {

    if (props.Moudle) {
        return(
            <div>
                {
                     props.Moudle.map((setitem:SetItem, index:number) => {
                        const SettingItem = SettingComponents[setitem.moudleName];
                        return (
                            <div key={index}> 
                                {
                                    SettingItem ? <SettingItem /> : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}


export default PageSetting