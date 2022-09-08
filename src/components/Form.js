import React from 'react'

export function Form({ className, children }){
    function submitHandler(e){
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler} className={ className }>
            { children }
        </form>
    )
}