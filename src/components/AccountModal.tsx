'use client'

import { User } from 'lucide-react'
import { useState } from 'react'
import TransactionList from './UserInformation/TransactionList'
import BetList from './UserInformation/BetList'
import SpinsList from './UserInformation/SpinList'

interface Spin {
  id: string
  game: string
  date: string
  amount: number
  balanceBefore: number
  balanceAfter: number
  status: 'Ganado' | 'Perdido'
}

export default function AccountModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'es'>('es')
  const [activeTab, setActiveTab] = useState('apuestas')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    setIsPasswordModalOpen(false)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='flex'>
      <button onClick={() => setIsOpen(true)} className="px-3 py-2 rounded-full h-full bg-wallet-gradient">
        <User className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#363636] bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="scrollbar-none bg-gradient-to-br from-[#030f2f] to-[#021b79] text-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-purple-900/10 scrollbar-thumb-purple-600/50 hover:scrollbar-thumb-purple-600/70 ">
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

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#5fa8d3]">Nombre:</p>
                    <p className="text-sm">Demoo</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5fa8d3]">Usuario:</p>
                    <p className="text-sm">Demo01</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setLanguage('es')}
                      className={`px-3 py-1 text-sm rounded-md flex items-center transition duration-300 ${language === 'es'
                        ? 'bg-[#0575e6] text-white'
                        : 'bg-[#030f2f] text-[#5fa8d3] hover:bg-[#021b79]'
                        }`}
                    >
                      <span className="mr-2">🇪🇸</span> Español
                    </button>
                  </div>
                  <button
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="px-3 py-1 text-sm bg-[#030f2f] text-[#5fa8d3] rounded-md hover:bg-[#021b79] hover:text-white transition duration-300">
                    Cambiar Contraseña
                  </button>
                </div>

                <div>
                  <div className="flex border-b border-[#021b79]">
                    {['Apuestas', 'Spins', 'Transacciones'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-4 py-2 text-sm font-medium transition duration-300 ${activeTab === tab.toLowerCase()
                          ? 'border-b-2 border-[#5fa8d3] text-[#5fa8d3]'
                          : 'text-white hover:text-[#5fa8d3]'
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {activeTab === 'apuestas' && <BetList />}

                  {activeTab === 'spins' && <SpinsList />}

                  {activeTab === 'transacciones' && (
                    <TransactionList />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-[#000719] bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-[#030f2f] to-[#021b79] text-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#5fa8d3]">Cambiar Contraseña</h3>
                <button onClick={() => setIsPasswordModalOpen(false)} className="text-[#5fa8d3] hover:text-white transition duration-300">
                  <span className="sr-only">Cerrar</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-[#5fa8d3] mb-1">
                    Contraseña Actual
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-[#030f2f] border border-[#021b79] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#5fa8d3]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-[#5fa8d3] mb-1">
                    Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-[#030f2f] border border-[#021b79] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#5fa8d3]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#5fa8d3] mb-1">
                    Confirmar Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-[#030f2f] border border-[#021b79] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#5fa8d3]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#021b79] to-[#0575e6] text-white rounded-md hover:from-[#021b79] hover:to-[#0466c8] focus:outline-none focus:ring-2 focus:ring-[#5fa8d3] focus:ring-offset-2 transition duration-300 ease-in-out"
                >
                  Cambiar Contraseña
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}