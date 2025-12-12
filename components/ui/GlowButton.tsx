import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ children, className = '', fullWidth = false, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group px-8 py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-300
        bg-transparent border-2 border-neon-cyan text-neon-cyan
        hover:bg-neon-cyan hover:text-dark-bg
        animate-pulse-glow
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Background glow effect behind text */}
      <div className="absolute inset-0 rounded-xl bg-neon-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};