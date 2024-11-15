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