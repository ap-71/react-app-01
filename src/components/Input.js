import React, { useState } from 'react'

export function Input({ className, children, validation }){
    const [value, setValue] = useState('')
    
    function onChange(e){
        let validValue = e.target.value
        if (validation !== undefined) {
            validValue = validation(validValue)
        }
        setValue(validValue)
    }
    return (
        <div className={'flex '+className}>
            <div className='w-[100px]'>
                <span>{ children }</span>
            </div>
            
            <input 
                type='text'
                className='border ml-3 outline-0 px-3 mb-3'
                onChange={onChange}
                value={value}
            ></input>
        </div>
        
    )
}