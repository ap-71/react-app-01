import React from 'react'
import { Content } from '../components/Content'
import { DB } from '../components/options/DB'
import { NetworkMonitor } from '../components/options/NetworkMonitor'
import { UserManager } from '../components/options/UserManager'

export function OptionsPage(){
    return (
        <>
            <Content className="bg-[#546e7a]">
                <DB></DB>
                <NetworkMonitor></NetworkMonitor>
                <UserManager></UserManager>
            </Content>
        </>
    )
} 