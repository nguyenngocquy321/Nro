import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function SelectInput({ data, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Tìm label dựa trên value để hiển thị trong nút
  const selectedLabel = data.find((item) => item.value === value)?.label || 'Chọn đường dẫn...';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 transition outline-none hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      >
        {selectedLabel}
        <FaChevronDown
          className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-xl">
          <ul className="p-2 text-sm text-gray-700">
            {data.map((item) => (
              <li key={item.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(item.value);
                    setIsOpen(false);
                  }}
                  className="w-full rounded-md p-2 text-left hover:bg-gray-100"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default SelectInput;
