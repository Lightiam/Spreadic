"use client";

import { useEffect, useState } from "react";

interface StaticFallbackProps {
  children: React.ReactNode;
  pageName: string;
}

export default function StaticFallback({ children, pageName }: StaticFallbackProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #9333ea 0%, #6366f1 50%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Spreadify AI
        </div>
        <h1 style={{
          fontSize: '1.5rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Loading {pageName}...
        </h1>
        <div style={{
          width: '60px',
          height: '60px',
          border: '5px solid #e2e8f0',
          borderTopColor: '#9333ea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg) }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
