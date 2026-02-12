import React from 'react';
import { FiChevronDown, FiChevronRight, FiPlus } from 'react-icons/fi';

const RightPanel = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto scrollbar-thin">
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Create
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiChevronDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Priority
          </label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-700">Medium</span>
            </span>
            <FiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-gray-700">
              Assigned To
            </label>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              Assign to me
            </button>
          </div>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Allie Harmon</span>
            </span>
            <FiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Project
          </label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="text-sm text-gray-700">Administrative</span>
            <FiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Ticket Type
          </label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="text-sm text-gray-700">Task</span>
            <FiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Due Date
          </label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="text-sm text-gray-500">mm/dd/yyyy</span>
            <FiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Reporter
          </label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Allie Harmon</span>
            </span>
            <FiChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Tags
          </label>
          <button className="w-full flex items-center justify-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm text-gray-600">
            <span>Add Tag</span>
            <FiPlus className="w-4 h-4" />
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4 space-y-2">
          <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-sm font-medium text-gray-700">TASKS</span>
            <FiChevronRight className="w-4 h-4 text-gray-500" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-sm font-medium text-gray-700">COLLECTED FIELDS</span>
            <FiChevronRight className="w-4 h-4 text-gray-500" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">LINKED TICKETS</span>
              <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded-full font-medium">
                2
              </span>
            </div>
            <FiChevronRight className="w-4 h-4 text-gray-500" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-sm font-medium text-gray-700">HISTORY</span>
            <FiChevronRight className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
