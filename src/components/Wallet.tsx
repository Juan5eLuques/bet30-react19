import React from "react";
import { Wallet } from "lucide-react";

const WalletComponent: React.FC = () => {
  const balance = 300000;

  return (
    <div className="flex items-center gap-2 rounded-full px-4 py-2 transition-colors bg-wallet-gradient cursor-pointer">
      <Wallet className="w-4 h-4 text-[white] bg-wallet" />
      <span className="text-[white] font-medium">$300,000.00</span>
    </div>
  );
};

export default WalletComponent;
