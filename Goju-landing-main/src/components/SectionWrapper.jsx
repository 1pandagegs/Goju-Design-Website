import React from "react";

const SectionWrapper = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="px-6 md:px-20">
      {childrenArray.map((child, index) => (
        <div key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper;