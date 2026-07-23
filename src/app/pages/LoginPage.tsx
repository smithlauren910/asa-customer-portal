import { useState } from 'react';
import imgLogo from "figma:asset/d6c973a49b3a11fd6b1f8226d69743e93a3fd1d8.png";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#f5f5f5] pt-12 sm:pt-20 px-4 sm:px-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-[68px] h-[38px] relative overflow-hidden mb-8">
        <img alt="aSa Software" className="absolute h-full left-0 top-0 max-w-none" style={{ width: '321.1%', filter: 'invert(1)' }} src={imgLogo} />
      </div>

      <h1 className="text-[24px] font-medium text-[#1a1a1a] mb-1">Log in to your account</h1>
      <p className="text-[14px] text-[#6b7280] mb-10">Enter your credentials to access the customer portal.</p>

      <form onSubmit={handleLogin} className="w-full max-w-[380px] bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#374151]">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-[#374151]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e]"
          />
        </div>

        <button
          type="submit"
          className="w-full px-5 py-2.5 rounded-full text-[14px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] transition-colors mt-2"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => {}}
          className="w-full px-5 py-2.5 rounded-full text-[14px] font-medium text-[#1a1a1a] border border-[#d0d0d0] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors"
        >
          Create an account
        </button>
      </form>
    </div>
  );
}
