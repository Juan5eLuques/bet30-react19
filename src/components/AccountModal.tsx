'use client'

import { User } from 'lucide-react'
import { useState } from 'react'


interface Transaction {
  id: string
  type: 'Depósito' | 'Retiro'
  amount: number
  balance: number
  date: string
}

interface Bet {
  id: string
  type: 'Combinada'
  status: 'Ganado' | 'Perdido'
  quota: number
  date: string
  amount: number
  lostAmount: number
  matches: {
    status: 'Ganado' | 'Perdido'
    teams: string
    startTime: string
    bet: string
  }[]
}

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
    console.log('Cambio de contraseña:', { currentPassword, newPassword, confirmPassword })
    setIsPasswordModalOpen(false)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const transactions: Transaction[] = [
    { id: '2260809', type: 'Depósito', amount: 2000.00, balance: 2052.77, date: '9/17, 11:04' },
    { id: '1572417', type: 'Depósito', amount: 2000.00, balance: 2000.17, date: '8/15, 16:21' },
  ]

  const bets: Bet[] = [
    {
      id: '23339',
      type: 'Combinada',
      status: 'Perdido',
      quota: 1.85,
      date: '8/22, 20:01',
      amount: 1616.00,
      lostAmount: 1616,
      matches: [
        {
          status: 'Perdido',
          teams: 'Belgrano VS Athletico Paranaense',
          startTime: '8/22, 20:01',
          bet: '1X2Belgrano(1.54)'
        },
        {
          status: 'Ganado',
          teams: 'Sao Paulo SP VS Nacional Montevideo',
          startTime: '8/22, 20:01',
          bet: '1X2Sao Paulo SP(1.2)'
        }
      ]
    },
    {
      id: '14127',
      type: 'Combinada',
      status: 'Perdido',
      quota: 7.47,
      date: '7/15, 14:48',
      amount: 107.33,
      lostAmount: 107.33,
      matches: [
        {
          status: 'Ganado',
          teams: 'Instituto Cordoba VS CA Independiente',
          startTime: '7/15, 14:48',
          bet: '1X2Instituto Cordoba(2.49)'
        }
      ]
    }
  ]

  const spins: Spin[] = [
    {
      id: '1211198824',
      game: 'Cosmic Cash',
      date: '9/19, 22:37',
      amount: 9.6,
      balanceBefore: 337.57,
      balanceAfter: 327.97,
      status: 'Perdido'
    },
    {
      id: '1211198563',
      game: 'Cosmic Cash',
      date: '9/19, 22:37',
      amount: 9.6,
      balanceBefore: 347.17,
      balanceAfter: 337.57,
      status: 'Perdido'
    },
    {
      id: '1211198288',
      game: 'Cosmic Cash',
      date: '9/19, 22:37',
      amount: 9.6,
      balanceBefore: 356.77,
      balanceAfter: 347.17,
      status: 'Perdido'
    },
    {
      id: '1211198018',
      game: 'Cosmic Cash',
      date: '9/19, 22:37',
      amount: 12.0,
      balanceBefore: 356.77,
      balanceAfter: 368.77,
      status: 'Ganado'
    }
  ]

  return (
    <div className='flex'>
      <button onClick={() => setIsOpen(true)} className="px-3 py-2 rounded-full h-full bg-wallet-gradient">
        <User className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#363636] bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-[#030f2f] to-[#021b79] text-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-purple-900/10 scrollbar-thumb-purple-600/50 hover:scrollbar-thumb-purple-600/70 ">
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

                  {activeTab === 'apuestas' && (
                    <div className="mt-4 space-y-4">
                      <h3 className="text-lg font-semibold text-[#5fa8d3]">Últimas Apuestas</h3>
                      {bets.map((bet) => (
                        <div key={bet.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                              <span className={`px-2 py-1 text-xs font-semibold rounded ${bet.type === 'Combinada' ? 'bg-[#0575e6] text-white' : 'bg-[#021b79] text-[#5fa8d3]'
                                }`}>
                                {bet.type}
                              </span>
                              <span className={`px-2 py-1 text-xs font-semibold rounded ${bet.status === 'Ganado' ? 'bg-green-600 text-white' : 'bg-[#dc2626] text-white'
                                }`}>
                                {bet.status}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-[#5fa8d3]">#{bet.id}</span>
                          </div>
                          <div className="text-sm">
                            <p>Cuota({bet.quota})</p>
                            <p>Tiempo de Apuesta: {bet.date}</p>
                            <p>Monto: ${bet.amount.toFixed(2)}</p>
                            <p>Cantidad Perdida: ${bet.lostAmount.toFixed(2)}</p>
                          </div>
                          <div className="space-y-2">
                            {bet.matches.map((match, index) => (
                              <div key={index} className="bg-[#021b79] p-2 rounded">
                                <div className={`text-xs font-semibold ${match.status === 'Ganado' ? 'text-[#4ade80]' : 'text-[#f87171]'
                                  }`}>
                                  {match.status}
                                </div>
                                <div className="text-sm">{match.teams}</div>
                                <div className="text-xs text-[#5fa8d3]">Hora de Inicio: {match.startTime}</div>
                                <div className="text-sm font-medium">{match.bet}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'spins' && (
                    <div className="mt-4 space-y-4">
                      <h3 className="text-lg font-semibold text-[#5fa8d3]">Spins Recientes</h3>
                      {spins.map((spin) => (
                        <div key={spin.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                          <div className="flex justify-between items-center">
                            <span className={`px-2 py-1 text-xs font-semibold rounded ${spin.status === 'Ganado' ? 'bg-[#16a34a] text-white' : 'bg-[#dc2626] text-white'
                              }`}>
                              Spin
                            </span>
                            <span className="text-sm font-medium text-[#5fa8d3]">#{spin.id}</span>
                          </div>
                          <div className="text-sm">
                            <p>{spin.game}</p>
                            <p>Tiempo de Spin: {spin.date}</p>
                            <p>Spin: ${spin.amount.toFixed(2)}</p>
                            <p>Saldo: ${spin.balanceBefore.toFixed(2)} -&gt; ${spin.balanceAfter.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'transacciones' && (
                    <div className="mt-4 space-y-4">
                      <h3 className="text-lg font-semibold text-[#5fa8d3]">Transacciones Recientes</h3>
                      {transactions.map((transaction) => (
                        <div key={transaction.id} className="bg-[#030f2f] rounded-lg p-4 flex items-center justify-between border border-[#021b79]">
                          <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.type === 'Depósito' ? 'bg-[#22c55e]' : 'bg-red-500'
                              }`}>
                              {transaction.type === 'Depósito' ? (
                                <span className="text-white text-lg">+</span>
                              ) : (
                                <span className="text-white text-lg">-</span>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-[#5fa8d3]">{transaction.type} #{transaction.id}</p>
                              <p className="text-sm text-white">
                                Monto: ${transaction.amount.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-[#5fa8d3]">${transaction.balance.toFixed(2)}</p>
                            <p className="text-sm text-white">{transaction.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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