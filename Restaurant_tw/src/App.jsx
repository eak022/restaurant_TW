import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <>
      <div className="title">
        <h1> Grap restaurant</h1>
      </div>
      <div className="searchbar">
        <input
          type="text"
          className="w-full px-4 py-2 outline-none border"
          placeholder="Search..."
        />
      </div>
      <div className="restaurant">
        <div class="flex flex-wrap">
            {data.map((item) => {
              const { id, name, img, rtype } = item;
              return (
                <article className="menu-item" key={id}>
                  <div class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg" src={img} />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {name}
                        </h3>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {rtype}
                      </p>
                      <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Order now
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
    </>
  );
}

export default App;
