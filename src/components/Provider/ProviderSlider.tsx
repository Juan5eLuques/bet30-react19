import { getProviders } from '@/lib/getProviders';
import { ListProviders } from '@/types/providers';
import React, { ReactNode } from 'react';
import { Provider } from './Provider';


interface ProviderSliderProps {
    IconElement?: ReactNode; // Define `children` para el icono u otros elementos
    showTitle?: boolean;
}


const providers: ListProviders = await getProviders()
export async function ProviderSlider({ IconElement, showTitle = true }: ProviderSliderProps) {
    return (

        <div >
            {showTitle ?
                <div className='flex gap-2 items-center pb-2 pt-2'>
                    {IconElement}
                    <h2 className="text-lg sm:text-2xl  text-white ">
                        Proveedores
                    </h2>
                </div> : <></>}
            <div className="flex gap-1 pt-1 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollba scrollbar-track-purple-900/10 scrollbar-none scrollbar-thumb-purple-600/50 hover:scrollbar-thumb-purple-600/70 ">
                {providers.map((provider) => (
                    <Provider code={provider.code} gameCode={provider.gameCode} name={provider.name} sortOrder={provider.sortOrder} key={provider.code}></Provider>
                ))}
            </div>
        </div >
    );
};

export default ProviderSlider;






