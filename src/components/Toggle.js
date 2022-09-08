import React from 'react'

export function Toggle({ id, setToggle, children }){

    function forToggle(e){
        setToggle( e.target.checked )
    }

    return (
        <label htmlFor={ id } className="inline-flex relative items-center ml-5 cursor-pointer">
            <input type="checkbox" id={ id } className="sr-only peer" onChange={ forToggle }/> 
            <div className="w-11 h-6 bg-gray-200 
                peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white 
                after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all 
                dark:border-gray-600 peer-checked:bg-[#607d8b]"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 ">{ children }</span>
        </label> 
    )
}