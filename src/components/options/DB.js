import React from 'react'
import { validationIP } from '../../utils/validations'
import { Form } from '../Form'
import { Input } from '../Input'

export function DB(){
    return (
        <Form className="bg-white">
            <div>
                <div className='w-[100%] h-8  pt-1 mb-5 text-center bg-[#34515e] text-white font-sans'><span>ДБ</span></div>
                <Input className="mx-5" validation={ validationIP }>Сервер ДБ</Input>
                <Input className="mx-5" >Логин</Input>
                <Input className="mx-5" >Пароль</Input>
            </div>
        </Form>
    )
}