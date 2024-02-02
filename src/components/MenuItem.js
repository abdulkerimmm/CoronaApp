import { useContext, useState } from "react";
import { context1 } from "../contextApi/Store";

const MenuItem = () => {
  const [key, setKey] = useContext(context1);

  const menuItems = [
    {
      title: "Coronavirus Values by Countries",
      value: 1,
    },
    {
      title: "Recorded History of All Coronavirus Values",
      value: 2,
    },
    {
      title: "Coronavirus Values by Continents",
      value: 3,
    },
  ];

  return (
    <div className="w-auto block">
      <ul className="flex flex-row  mt-4 font-semibold text-xs space-x-8 mt-0 ">
        {menuItems.map((item) => {
          return (
            <li key={item.value}>
              <a
                onClick={() => {
                  setKey(item.value);
                }}
                className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${
                  item.value === key ? "text-blue-300" : "text-gray-400"
                } hover:text-sky-200`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
