import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(25);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  // Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-3 md:lg:xl:px-10 py-5">
      <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:xl:grid-cols-5 group bg-white ">
        {currentCountries.map(country => <Country country={country} key={country.cca3}></Country>)}
      </div>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation ">
      <ul className="space-x-2 py-6 flex items-center justify-center">
        <li>
          <button
            
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </button>
        </li>
        {pageNumbers.map(number => (
  <li key={number}>
    <button
      onClick={() => paginate(number)}
      className={`w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline ${currentPage === number ? 'text-white bg-indigo-600 border border-r-0' : 'text-indigo-600 hover:bg-indigo-100'}`}
    >
      {number}
    </button>
  </li>
))}
        <li>
          <button
            
            disabled={currentPage === Math.ceil(totalCountries / countriesPerPage)}
            className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 ${currentPage === Math.ceil(totalCountries / countriesPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Countries;
