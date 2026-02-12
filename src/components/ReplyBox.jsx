import React, { useState } from 'react';
import { 
  FiBold, 
  FiItalic, 
  FiPaperclip, 
  FiLink, 
  FiImage,
  FiCode,
  FiList,
  FiSend
} from 'react-icons/fi';

const ReplyBox = () => {
  const [activeTab, setActiveTab] = useState('public');

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex items-center space-x-4 mb-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('public')}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            activeTab === 'public'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Public Reply
        </button>
        <button
          onClick={() => setActiveTab('private')}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            activeTab === 'private'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Private Comment
        </button>
      </div>

      <div className="mb-3">
        <div className="text-xs text-gray-600 mb-2">
          <span className="font-medium">To:</span>{' '}
          <span className="bg-gray-100 px-2 py-0.5 rounded inline-flex items-center">
            Allison Westervelt &lt;awestie@gmail.com&gt;
            <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
          </span>
          <button className="ml-2 text-gray-400 hover:text-gray-600 text-xs">Cc</button>
        </div>
      </div>

      <textarea
        placeholder="Add a reply..."
        className="w-full h-24 p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      ></textarea>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-1">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiBold className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiItalic className="w-4 h-4 text-gray-600" />
          </button>
          <div className="w-px h-5 bg-gray-300 mx-1"></div>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiLink className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiImage className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiPaperclip className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiCode className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FiList className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Add to KB
          </button>
          <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1">
            <FiSend className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyBox;
