"use client";

import React from 'react';

interface ButtonProps {
    action: () => void;
}

export default function ButtonVerMas({ action }: ButtonProps) {
    return (
        <div className='flex w-full justify-center items-center my-2'>
            <button onClick={() => {
                action();
            }} className='bg-wallet-gradient  px-2 py-1 w-full rounded-md'>Ver más</button>
        </div>
    );
}