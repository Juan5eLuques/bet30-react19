import { useState } from "react";

export default function PasswordChangeModal({ setIsPasswordModalOpen }: { setIsPasswordModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Cambio de contraseña:', { currentPassword, newPassword, confirmPassword });
        setIsPasswordModalOpen(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <form onSubmit={handlePasswordChange} className="bg-[#021b79] p-6 rounded-lg">
                <h3 className="text-lg font-semibold">Cambiar Contraseña</h3>
                <input value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Contraseña actual" type="password" className="w-full mt-2 p-2 rounded" />
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nueva contraseña" type="password" className="w-full mt-2 p-2 rounded" />
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar contraseña" type="password" className="w-full mt-2 p-2 rounded" />
                <button type="submit" className="mt-4 bg-[#5fa8d3] px-4 py-2 rounded">Guardar Cambios</button>
            </form>
        </div>
    );
}