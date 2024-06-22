import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import { CiHeart } from "react-icons/ci";
const Shop = () => {
     const [arts, setArts] = useState([]);
     useEffect(() => {
          fetch("https://antique-web.onrender.com/all-arts")
               .then((res) => res.json())
               .then((data) => setArts(data));
     });
     return (
          <div className="px-3 md:px-10 bg-gray-100">
               <h2 className="text-3xl md:text-5xl font-bold text-center">ALL ITEMS</h2>
               <div className="grid gap-3 my-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-row-3 grid-cols-1">
                    {arts.map((item, index) => {
                         
                         return (
                              <Link to={`/art/${item._id}`} key={index}>
                                   <div class="w-full px-3 py-2 max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-white group text-blue-950">
                                        <a href="#">
                                        <div className="min-w-[250px] md:w-[300px] lg:w-full ">
                                                  <img
                                                       src={item.image}
                                                       className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover group-hover:scale-105 duration-300 rounded-lg "
                                                  />
                                             </div>
                                        </a>
                                        <div class=" pb-5">
                                             <a href="#">
                                                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">
                                                       {item.title}
                                                  </h5>
                                             </a>
                                             <div class="flex items-center justify-between mt-2.5 mb-5">
                                                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                       <svg
                                                            class="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                       >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                       </svg>
                                                       <svg
                                                            class="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                       >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                       </svg>
                                                       <svg
                                                            class="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                       >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                       </svg>
                                                       <svg
                                                            class="w-4 h-4 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                       >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                       </svg>
                                                       <svg
                                                            class="w-4 h-4 text-gray-200 dark:text-gray-600"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                       >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                       </svg>
                                                       {/* <p>
                                                          
                                                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                                                 {item.seller.rating}
                                                            </span>
                                                       </p> */}
                                                  </div>
                                                  {/* <div className="flex items-center justify-between"> */}
                                                  <p>
                                                       {" "}
                                                       <span class="text-2xl font-bold text-gray-900 ">${item.price}</span>
                                                  </p>
                                                  {/* </div> */}
                                             </div>
                                             <div className="flex justify-between items-center mt-4 pb-2">
                                                  <CiHeart className="bg-black hover:bg-blue-600 min-h-full text-white text-[35px] rounded-sm p-[2px] hover:rounded-md duration-300" />
                                                  <button className="py-[5px] w-[85%] border border-gray-900 rounded-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:rounded-md duration-300" >
                                                       Add to cart
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </Link>
                         );
                    })}
               </div>
          </div>
      
     );
};

export default Shop;
