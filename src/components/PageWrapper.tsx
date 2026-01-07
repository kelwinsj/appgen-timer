import React from 'react';
import { DevLinkProvider } from '../site-components/DevLinkProvider';
import { Nav } from '../site-components/Nav';
import { Footer } from '../site-components/Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <DevLinkProvider>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </DevLinkProvider>
  );
}