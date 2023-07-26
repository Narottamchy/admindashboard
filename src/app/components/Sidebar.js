import React,{useState} from 'react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (sectionName) => {
      setActiveSection(activeSection === sectionName ? null : sectionName);
    };
  
    
  
    const contents = [
      "Commarce",
      "Analytics",
      "Crypto",
      "Helpdesk",
      "Monitoring",
      "Fitness",
    ];
  
    const sections = [
      {
        name: "Dashboard",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
      {
        name: "Application",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
      {
        name: "Elements",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
      {
        name: "Forms",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
      {
        name: "Plugins",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
      {
        name: "Datagrid",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
      {
        name: "Settings",
        content: contents.map((content, index) => (
          <button key={index} className="mt-2 block">
            {content}
          </button>
        )),
      },
    ];

  return (
    <div className="w-64 h-full">
        
      {/* Sidebar */}
      
      <aside className=" bg-neutral-900 h-full text-white p-4">
        {/* Sidebar column button */}
        <button className="block w-full bg-white text-black font-bold focus:outline-none hover:bg-gray-200 py-2 p-4 rounded">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="mr-2"
            >
              <path
                d="M19 11.5H13V5.5C13 5.23478 12.8946 4.98043 12.7071 4.79289C12.5196 4.60536 12.2652 4.5 12 4.5C11.7348 4.5 11.4804 4.60536 11.2929 4.79289C11.1054 4.98043 11 5.23478 11 5.5V11.5H5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5C4 12.7652 4.10536 13.0196 4.29289 13.2071C4.48043 13.3946 4.73478 13.5 5 13.5H11V19.5C11 19.7652 11.1054 20.0196 11.2929 20.2071C11.4804 20.3946 11.7348 20.5 12 20.5C12.2652 20.5 12.5196 20.3946 12.7071 20.2071C12.8946 20.0196 13 19.7652 13 19.5V13.5H19C19.2652 13.5 19.5196 13.3946 19.7071 13.2071C19.8946 13.0196 20 12.7652 20 12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5Z"
                fill="#171717"
              />
            </svg>
            New Item
          </div>
        </button>

        {/* Sidebar content */}
        <ul className="space-y-2 ml-4 mt-4">
          {sections.map((section) => (
            <li key={section.name}>
              <div className=" border-b border-black mb-4" />
              <button
                onClick={() => handleSectionClick(section.name)}
                className={`flex items-center w-full text-left text-white focus:outline-none hover:text-gray-300 ${
                  activeSection === section.name ? "font-semibold" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="4.5" height="4.5" rx="1" />
                  <rect x="3" y="10.5" width="4.5" height="4.5" rx="1" />
                  <rect x="10.5" y="10.5" width="4.5" height="4.5" rx="1" />
                  <rect x="10.5" y="3" width="4.5" height="4.5" rx="1" />
                </svg>
                <span>{section.name}</span>
                {/* Add expand-up and expand-down SVG icons */}
                {activeSection === section.name ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="white" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M13.5 6.75L9 11.25L4.5 6.75" stroke="white" strokeWidth="2"/>
</svg>
                )}
              </button>

              {activeSection === section.name && (
                <div className="pl-6 mt-2">
                  {section.content}
                  {/* Add the horizontal black bar */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;