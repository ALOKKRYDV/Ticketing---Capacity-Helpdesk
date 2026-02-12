import React from 'react';
import { FiPaperclip } from 'react-icons/fi';

const ConversationItem = ({ conversation }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-semibold text-gray-900">{conversation.name}</h4>
            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            <span className="font-medium">To:</span> {conversation.email}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">{conversation.message}</p>

          {conversation.attachments.length > 0 && (
            <div className="space-y-2">
              {conversation.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                    <FiPaperclip className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {attachment.name}
                    </p>
                    <p className="text-xs text-gray-500">{attachment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
