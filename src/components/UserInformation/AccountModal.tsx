'use client'

import { User } from "lucide-react";
import BetList from "./BetList";
import PasswordChangeModal from "./PasswordChangeModal";
import SpinList from "./SpinList";
import TransactionList from "./TransactionList";
import { useState } from "react";

// Main AccountModal Component
export default function AccountModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'es'>('es');
    const [activeTab, setActiveTab] = useState<'apuestas' | 'spins' | 'transacciones'>('apuestas');

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className="px-3 py-2 rounded-full h-full bg-wallet-gradient">
                <User className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-[#363636] bg-opacity-75 flex items-center justify-center p-4 z-50">
                    <div className="bg-gradient-to-br from-[#030f2f] to-[#021b79] text-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-[#5fa8d3]">Cuenta</h2>
                                <button onClick={() => setIsOpen(false)} className="text-[#5fa8d3] hover:text-white transition duration-300">
                                    <span className="sr-only">Cerrar</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-[#021b79]">
                                {['Apuestas', 'Spins', 'Transacciones'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab.toLowerCase() as 'apuestas' | 'spins' | 'transacciones')}
                                        className={`px-4 py-2 text-sm font-medium ${activeTab === tab.toLowerCase() ? 'border-b-2 border-[#5fa8d3] text-[#5fa8d3]' : 'text-white hover:text-[#5fa8d3]'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            {activeTab === 'apuestas' && <BetList />}
                            {activeTab === 'spins' && <SpinList />}
                            {activeTab === 'transacciones' && <TransactionList />}

                            {/* Change Password Modal */}
                            {isPasswordModalOpen && <PasswordChangeModal setIsPasswordModalOpen={setIsPasswordModalOpen} />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}