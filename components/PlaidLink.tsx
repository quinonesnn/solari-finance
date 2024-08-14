import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation'
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.action'
import Image from 'next/image'

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter(); 
    const [token, setToken] = useState('')

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);

            setToken(data?.linkToken)
        }
        getLinkToken();
    }, [])
    
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token : string) => {
        await exchangePublicToken({
            publicToken: public_token,
            user,
        })
        router.push("/home")
    }, [user])
    
    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config)

  return (
    <>
        {variant === 'primary' ? (
            <Button className='plaidlink-primary'
                    onClick={() => open()}
                    disabled={!ready}
            >
                Connect bank
            </Button>
        ): variant === 'ghost' ? (
            <Button onClick={() => open()} className='plaidlink-ghost'>
                <Image src="/icons/connect-bank.svg" alt="connect-bank" height={24} width={24} />
                <p className='hidden text-[16px] font-semibold text-black-2 xl:block'>Connect bank</p>
            </Button>
        ): (
            <Button onClick={() => open()} className='plaidlink-default'>
                <Image src="/icons/connect-bank.svg" alt="connect-bank" height={24} width={24} />
                <p className='text-[16px] font-semibold text-black-2 sidebar-label '>Connect bank</p>
            </Button>)
        }
    </>
  )
}

export default PlaidLink