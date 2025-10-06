import React, { useEffect, useState } from 'react'
import { useEffectEvent } from 'react'

const useOnlineStatus = () => {
 const [onlineStatus , setOnlineStatus] = useState(true)
    useEffect ( ()=>{
        handleOnlineStatus();
    } , [])
    const handleOnlineStatus =() =>{
        window.addEventListener('online' , ()=>{
            return setOnlineStatus(true)
        })
        window.addEventListener('offline' ,()=>{
            return setOnlineStatus(false)
        })
    }
    return onlineStatus ;
}

export default useOnlineStatus;
