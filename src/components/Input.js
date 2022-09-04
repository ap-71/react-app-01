import React from 'react'

export function Input({ children }){
    function submitHandler(e){
        e.preventDefault()
    }
    return (
        <>  
        <form onSubmit={submitHandler}>
            <span>{children}</span>
            <input 
                type='text'
                className='border ml-3 outline-0 px-3'
            ></input>
        </form>
        </>
    )
}