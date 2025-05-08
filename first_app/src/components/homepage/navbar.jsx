  import { useState, useEffect, useRef } from 'react';

  const Navbar = () => {
    
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navbarRef = useRef(null);
    
    const navItems = [
      { 
        name: 'Services', 
        dropdownItems: [
          'Tax Software Hosting',
          'Accounting Software Hosting',
          'Application Hosting'
        ]
      },
      { 
        name: 'Solutions', 
        dropdownItems: [
          'Industry Solutions',
          'Enterprise Solutions',
          'Custom Solutions'
        ]
      },
      { 
        name: 'Pricing', 
        dropdownItems: [
          'Standard Plans',
          'Enterprise Plans',
          'Pay-As-You-Go'
        ]
      },
      { 
        name: 'Resources', 
        dropdownItems: [
          'Integration Options',
          'API Documentation',
          'Developer Resources'
        ]
      }
    ];
    
    // Effect to handle clicks outside the navbar
    useEffect(() => {
      function handleClickOutside(event) {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
      
      // Add event listener when dropdown is open
      if (activeDropdown !== null) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      
      // Clean up event listener
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [activeDropdown]);
    
    // Simple chevron down arrow using SVG
    const ChevronDown = () => (
      <span className="inline-block ml-1 relative top-px">
        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </span>
    );
    
    const toggleDropdown = (index) => {
      if (activeDropdown === index) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(index);
      }
    };
    
    return (
      <div className="bg-gray-900 text-white p-4" ref={navbarRef}>
        {/* Main Navigation */}
        <div className="w-[520px] mx-auto relative">
          <div className="flex items-center justify-center space-x-8 border border-white/20 rounded-[14px] px-6 py-2 bg-white/5 backdrop-blur-md">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative">
                <div className="flex items-center cursor-pointer text-sm font-medium text-white/90 hover:text-white transition-colors px-3 py-1 rounded-full"
                onClick={() => toggleDropdown(index)}
                >
                <span className="mr-1">{item.name}</span>
                <ChevronDown />
                </div>
              </div>
            ))}
          </div>
          
          {/* Dropdown that appears only when an item is clicked */}
          {activeDropdown !== null && (
            <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-3 z-10">
              {navItems[activeDropdown].dropdownItems.map((item) => (
                <div 
                  key={item}
                  className=" flex items-center justify-between p-2 my-1 rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-200"
                >
                  <span>{item}</span>
                  <ChevronDown />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}
  export default Navbar