import React, { useEffect, useRef, useState } from 'react'
import h from "./Help.module.css"
import HelpItems from './HelpItems/HelpItems'
const Help = () => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const  toggleVisiblePopup = () =>{
        setVisiblePopup(!visiblePopup)
    };
    const sortRef = useRef();
    const handleOutsideClick = (e) =>{
        console.log(e)
    };
    useEffect(() => {
        document.body.addEventListener("click",handleOutsideClick);
        return () => {
            
        }
    }, [])
   
    return (
        <div>
            <p>Предоставляем услугу в помоще выбора кондиционера.</p>
            <div className={h.visib}>
                <span onClick={toggleVisiblePopup}>Фирмы кондиционеров:</span>
            </div>
            <HelpItems visiblePopup={visiblePopup} air={[
                "Hair",
                "Balu",
                "Mitsubishi",
                "Bosh"
            ]}/>
        </div>
    )
}

export default Help

