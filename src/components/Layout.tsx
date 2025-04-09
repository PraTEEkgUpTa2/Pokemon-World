import { ReactNode } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-gray-900 dark:text-white transition-colors relative"
      style={{ backgroundImage: "url('/pokemon.jpg')" }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-0" />

      {/* Content sits above the overlay */}
      <div className="relative z-10">
        <Navbar />
        <main className="px-4 pt-40 max-w-6xl mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

