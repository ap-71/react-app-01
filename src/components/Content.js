import React from 'react'

export function Content({ className, children }){
    className = className ? className: 'bg-white m-5'
    return (
        <div className={"flex justify-around p-5 "+className}>
            { children }
        </div>
    )
}