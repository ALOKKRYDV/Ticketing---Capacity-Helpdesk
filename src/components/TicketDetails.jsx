import React from 'react';
import { 
  FiMail, 
  FiLink2, 
  FiTrash2, 
  FiMoreHorizontal, 
  FiChevronDown,
  FiX
} from 'react-icons/fi';
import ReplyBox from './ReplyBox';
import ConversationItem from './ConversationItem';
import { conversationData } from '../data/mockData';

const TicketDetails = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto scrollbar-thin">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Laudantium neque veritatis
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <span className="font-medium">ID:</span>
                  <span>OPIS-102</span>
                </span>
                <span>•</span>
                <span>Created 11/4/22 12:22 PST</span>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <FiX className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FiMail className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FiLink2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FiTrash2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FiMoreHorizontal className="w-4 h-4 text-gray-600" />
            </button>
            <div className="ml-auto">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                <span>To Do</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <ReplyBox />

          <div className="space-y-4">
            {conversationData.map((conversation) => (
              <ConversationItem key={conversation.id} conversation={conversation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
