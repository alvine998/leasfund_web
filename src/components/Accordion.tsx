import React from 'react'

const Accordion = ({ items, activeIndex, setActiveIndex, from }: any) => {

  const toggleAccordion = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`space-y-4 w-full max-w-full mx-auto px-4`}>
      {items.map((item: any, index: any) => (
        <div key={`${from}${index}`} className="border rounded-lg">
          <button
            className="flex justify-between items-center w-full px-4 py-2 bg-green-200 hover:bg-green-300 focus:outline-none"
            onClick={() => toggleAccordion(`${from}${index}`)}
          >
            <span className="text-lg font-medium text-gray-800">{item.title}</span>
            <span className='text-gray-700'>{activeIndex === `${from}${index}` ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeIndex === `${from}${index}` ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-gray-100">
            <p className='text-black text-left text-xs' dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br>') }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
