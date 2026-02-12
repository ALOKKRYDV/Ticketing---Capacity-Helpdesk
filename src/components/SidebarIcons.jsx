import React from 'react';
import { 
  FiGrid, 
  FiMessageSquare, 
  FiList, 
  FiSettings, 
  FiUser, 
  FiBarChart2, 
  FiFolder,
  FiCalendar 
} from 'react-icons/fi';

const SidebarIcons = () => {
  const navItems = [
    { icon: FiGrid, active: false },
    { icon: FiMessageSquare, active: false },
    { icon: FiList, active: true },
    { icon: FiSettings, active: false },
    { icon: FiUser, active: false },
    { icon: FiBarChart2, active: false },
    { icon: FiFolder, active: false },
    { icon: FiCalendar, active: false }
  ];

  return (
    <div className="w-16 bg-slate-800 flex flex-col items-center py-4 space-y-2">
      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
        <span className="text-white font-bold text-lg">H</span>
      </div>
      
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            item.active
              ? 'bg-blue-500 text-white'
              : 'text-slate-400 hover:bg-slate-700 hover:text-white'
          }`}
        >
          <item.icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};

export default SidebarIcons;
