import React, { useState, useEffect } from 'react';
import { Home, FolderGit2, Briefcase } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const NavBar = () => {
  const activeSection = useActiveSection();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
  ];

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-transform ${
        isAtBottom ? 'translate-y-20' : 'translate-y-0'
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-lg border border-gray-200">
        <ul className="flex items-center gap-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex flex-col items-center gap-1 group relative ${
                  activeSection === id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{label}</span>
                {activeSection === id && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
