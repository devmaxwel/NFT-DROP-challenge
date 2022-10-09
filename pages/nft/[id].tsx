import React from 'react'
import { ConnectWallet, useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {
    // functions
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();


  return (
    <div className='flex h-screen flex-col lg:grid grid-cols-10'>
        {/*left  */}
        <div className='lg:col-span-4 bg-gradient-to-br  from-cyan-800 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br from-yellow-400 to-purple-500 p-2 rounded-xl'>
                      <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://links.papareact.com/8sg" alt="" />
                </div>
              
                <div className="text-center p-5 space-y-2">
                    <h1 className='text-4xl font-bold text-white'>DEVMAX Apes</h1>
                    <h2 className='text-xl text-gray-300'>A collection of DEVMAX Apes who live and breathe React</h2>
                </div>
            </div>
        </div>
        {/* Right */}
        <div className='lg:col-span-6 flex flex-1 flex-col p-12'>
            {/* Header */}
            <header className='flex items-center justify-between'>
                <h1 className='w-52  cursor-pointer text-lg font-extralight sm:w-80 '>The{' '} <span className='font-extrabold underline decoration-pink-600/50'> DEVMAX </span>{' '} 
                NFT Markert Place</h1>
                <button onClick={() => address? disconnect(): connectWithMetamask()} className='rounded-full bg-rose-400 px-4 text-xs py-2 text-white font-bold  lg:px-5 lg:py-3 lg:text-base'>{address? 'Sign Out': 'Sign In'}</button>
            </header>
            {/* underline */}
            <hr className='my-2 border' />
            {address && <p  className='text-green-500 text-center text-sm'>
             You're logged in with Wallet of Address {address.substring(0,5)}...{address.substring(address.length -5)}
            </p>}
            {/* Content */}
            <div className='mt-10 flex flex-1  space-y-6 flex-col items-center lg:space-y-0 lg:justify-center'>
                <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />
                <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The DEVMAX Ape Coding Club | NFT DROP</h1>
                <p className='pt-2 text-xl text-green-500'> 13/21 NFT's claimed</p>
            </div>
            {/* Min Button */}
            <button className='h-16 bg-red-600/70 text-white rounded-full font-bold'>Mint NFT {0.01 }ETH</button>
        </div>
    </div>
  )
}

export default NFTDropPage;