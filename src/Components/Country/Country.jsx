import React from "react";

const Country = (props) => {
  const { area, region, name, flags, capital } = props.country;

  return (
    <div className="rounded-xl shadow-lg shadow-gray-200 bg-white duration-300 hover:-translate-y-1 border">
      <div>
        <figure className="px-5 pt-5">
          <img
            src={flags.png}
            className="rounded-xl w-full h-1/2 max-h-2/3 object-cover"
          />
        </figure>
        <div className="h-30 p-4">
         
          <hr className="border border-gray-300 mt-4" />
          <h1 className="text-lg mb-2 text-center font-bold leading-relaxed text-black">
            {name.common}
          </h1>
        </div>
        <div className="p-4 flex justify-between">
          <div className="">
            <h1 className="text-lg mb-2 font-bold leading-relaxed text-black">
              Area: {area}
            </h1>
            <h1 className="text-lg mb-2 font-bold leading-relaxed text-black">
            Region: {region}
            </h1>
          </div>
          <div className="">
            <h1 className="text-lg mb-2 font-bold leading-relaxed text-black">
            Capital: {capital}
            </h1>
            <h1 className="text-lg mb-2 font-bold leading-relaxed text-black">
            Region: {region}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
