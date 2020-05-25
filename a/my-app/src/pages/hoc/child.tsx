import React, { useState, useEffect } from 'react';

const Bar = (props:any) => {
    const [name,useName] = useState('yulei')

    return(
        <div>
            {name}
        </div>
    )
}

export default Bar