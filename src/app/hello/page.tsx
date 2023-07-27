import React from 'react';

const Page: React.FC = () => {
const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt exercitationem voluptates, ipsum error alias qui possimus deserunt, unde minima ipsam natus, ad explicabo provident excepturi voluptatum ut ex consequuntur magni.';

  return (
    <div>
      <div className="collapse bg-base-200 mb-2 max-w-md">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>{text}</p>
        </div>
      </div>
      <div className="collapse bg-base-200 mb-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200 mb-2">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
