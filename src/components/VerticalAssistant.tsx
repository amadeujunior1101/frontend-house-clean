import React from "react";

interface User {
    name: string;
    pos: number
}

interface Route {
    data: User[]
}

const VerticalAssistant: React.FC<Route> = ({data}) => {

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="relative">
        {data.map((step, index) => (
          <div key={index} className="mb-4 flex">
            <div className="flex-shrink-0 relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white`}
              >
                {index + 1}
              </div>
              {index !== data.length - 1 && (
                  <div className={`h-full bg-blue-500 absolute top-9 bottom-9 left-4`} style={{ width: 1.5 }} />
              )}
            </div>
            <div className="ml-4">
              <div className={`text-lg font-semibold text-gray-700'}`}>
                {step.name}
              </div>
              <div className={`text-gray-600 text-gray-700'}`}>
                {step.pos}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { VerticalAssistant };
