// ButtonVerMas.tsx
"use client";
import React from 'react';

interface ButtonProps {
    callback: () => void;
}

export default function ButtonVerMas({ callback }: ButtonProps) {
    return (
        <div className='flex w-full justify-center items-center my-2'>
            <button onClick={() => {
                callback();
            }} className='bg-wallet-gradient px-2 py-1 w-64 rounded-xl'>Ver más</button>
        </div>
    );
}