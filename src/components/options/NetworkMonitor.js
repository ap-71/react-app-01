import React, { useState } from 'react'
import { validationIP } from '../../utils/validations'
import { Form } from '../Form'
import { Input } from '../Input'
import { Toggle } from '../Toggle'

export function NetworkMonitor(){
    const [authToggle, setAuthToggle] = useState(false)

    

    return (
        <Form className="bg-white relative">
            <div>
                <div className='w-[100%] h-8  pt-1 mb-5 text-center bg-[#34515e] text-white font-sans'><span>Network Monitor</span></div>
                <Input className="mx-5" validation={ validationIP }>Сервер NM</Input>
                <Toggle id="toggle__nm" setToggle={ setAuthToggle }>Auth</Toggle>
                { authToggle && <>
                        <Input className="mx-5" >Логин</Input>
                        <Input className="mx-5" >Пароль</Input>
                    </>            
                }
            </div>
        </Form>
    )
}