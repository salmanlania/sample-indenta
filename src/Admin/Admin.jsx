import React, { useState } from 'react';

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex bg-gray-800">
        <button
          onClick={() => showTab('tab1')}
          className={`text-white py-2 px-4 focus:outline-none ${
            activeTab === 'tab1' ? 'bg-blue-500' : 'bg-gray-600'
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => showTab('tab2')}
          className={`text-white py-2 px-4 focus:outline-none ${
            activeTab === 'tab2' ? 'bg-green-500' : 'bg-gray-600'
          }`}
        >
          Tab 2
        </button>
        <button
          onClick={() => showTab('tab3')}
          className={`text-white py-2 px-4 focus:outline-none ${
            activeTab === 'tab3' ? 'bg-indigo-500' : 'bg-gray-600'
          }`}
        >
          Tab 3
        </button>
      </div>

      <div id="tab1Content" className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'}`}>
        <p className="text-gray-800">This is the content for Tab 1.</p>
      </div>
      <div id="tab2Content" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'}`}>
        <p className="text-gray-800">This is the content for Tab 2.</p>
      </div>
      <div id="tab3Content" className={`tab-content ${activeTab === 'tab3' ? '' : 'hidden'}`}>
        <p className="text-gray-800">This is the content for Tab 3.</p>
      </div>
    </div>
  );
};
