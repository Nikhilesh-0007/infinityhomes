import React, { useState, useEffect } from 'react';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center text-white transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4 animate-bounce">
        <img
          src="/Main_Logo_PNG.png"
          alt="Infinity Homes Logo"
          className="h-16 w-auto object-contain bg-white px-4 py-2 rounded-2xl shadow-xl"
        />
        <div className="text-center space-y-1">
          <p className="text-xs tracking-widest uppercase font-semibold text-gray-400">
            Luxury Real Estate Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
};
