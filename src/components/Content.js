import React from 'react'

export function Content({ children }){
    return (
        <div className="m-5 flex justify-between p-5 bg-white">
            { children }
        </div>
    )
}