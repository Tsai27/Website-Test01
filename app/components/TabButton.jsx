import React from 'react'

const TabButton = ( { active, selectTab, children } ) => {
    const buttonClasses = active 
    ? "text-white border-b-4 border-b-green-700"
    : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>  {/* 此处为反单引号*/}
            {children}                   {/* 思考：border-b出现在文字上方的原因！！！！ */}
            </p>      
        </button>
    )
    }

export default TabButton
