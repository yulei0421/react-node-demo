import React from 'react'
import SettingItem from '../../components/pageSetting'



class studentClass extends React.Component {
    // constructor(){
    //     super()
    // }
    public distance = {
        say: '你好',
    }
}


class stu extends studentClass {
    constructor(props: any) {
        super(props)
        

    }
    componentDidMount(){
        // console.log(SettingItem(this.props))
        this.sun()
    }

    private Moudle = [
        {
            moudleName: 'input',
            input: {
                moudleDate: {
    
                }
            }
        },
        {
            moudleName: 'checkout',
            input: {
                moudleDate: {
    
                }
            }
        },
    
    ]
    sun() {
        console.log(this.distance)
    }
    render() {
        return(
            <div>
                {
                   <SettingItem Moudle={this.Moudle}/>
                }
            </div>
        )
    }
    
}
export default stu