import React from 'react';

const ExperienceItem = ({ jobTitle, company, location, date, description, tags, isLeft }) => {
  return (
    <div className={`md:flex ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full mb-8`}>
      <div className={`md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className={`bg-white rounded-lg shadow-xl p-6 relative border hover:border-blue-500 transition ease-in-out duration-200`}>
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{jobTitle}</h3>
          <h4 className="mb-3 font-semibold text-gray-700">{company}</h4>
          <p className="text-sm text-gray-600 mb-2">{location} | {date}</p>
          <p className="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{exp.date.split('-')[0]}</h1>
              </div>
              <div className="order-1 w-5/12"></div>
            </div>
            <ExperienceItem {...exp} isLeft={index % 2 === 0} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
