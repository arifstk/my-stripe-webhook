import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center p-2 relative overflow-hidden font-sans">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />

      {/* Main Glass Card */}
      <div className="relative w-full max-w-2xl backdrop-blur-xl bg-white/3 border border-white/8 rounded-4xl p-5 md:p-10 shadow-2xl">
        
        {/* Status Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase">System Online</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-400 via-teal-400 to-yellow-400 tracking-tight">
            Stripe <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 animate-pulse">Webhook</span>
          </h1>
          
          <div className="h-1 w-50 bg-linear-to-r from-red-500 via-teal-400 to-yellow-500 mx-auto rounded-full" />

          <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
            Secure high-speed bridge between Stripe Payments and MongoDB. 
            Processing encrypted signals with 256-bit signature verification.
          </p>
        </div>

        {/* Info Grid (Static) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="p-4 rounded-2xl bg-white/2 border border-white/5">
            <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Architecture</p>
            <p className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-teal-400 to-yellow-400 font-medium">Next.js Edge</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/2 border border-white/5">
            <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">Version</p>
            <p className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-teal-400 to-yellow-400 font-medium">2026-03-25.dahlia</p>
          </div>
        </div>

        {/* Bottom Label */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs font-mono">
            ENDPOINT: app/api/webhook/route.ts
          </p>
          {/* <p className="text-slate-600 text-xs font-mono">
            whsec_lm9wvVbUzxBLPAbYDmFOtryIMVYK36h9
          </p> */}
          <p className=" text-xs font-mono text-transparent bg-clip-text bg-linear-to-r from-red-400 via-teal-400 to-yellow-400">
            Created by: Arif Hossain 
          </p>
        </div>
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}