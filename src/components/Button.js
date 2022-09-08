import React from 'react'

export function Button({ text, className }){
    return (
        <div className={ className }>
            <button className={ "bg-[#34515e] hover:bg-[#8eacbb] text-white font-sans py-2 px-4 right-0 bottom-0" }>{ text }</button>
        </div>
    )
}
