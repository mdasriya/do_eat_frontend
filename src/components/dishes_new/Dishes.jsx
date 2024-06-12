import React, { useContext, useEffect } from "react";
import "../FoodDisplay/FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";
import "./Dishes.css";
// import { menu_list } from "../../assets/assets";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dishes() {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedSortOption, setSelectedSortOption] = useState('');
  const { food_list } = useContext(StoreContext);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dishes, setDishes] = useState([]);
  const [temp, setTemp] = useState([]);
  const [productsPerPage] = useState(10);
  const [category, setCategory] = useState("All");
  const [menuItem, setMenuItem] = useState([]);

  const fetchDishes = () => {
    setFetchLoading(true);

    axios
      .get("https://do-eat-backen.onrender.com/yantra")
      .then((res) => {
        console.log(res.data);
        setDishes(res.data);
        setTemp(res.data);
        setFetchLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setFetchLoading(false);
      });
  };

  // Filter by category
  // const filteredProducts = selectedCategory
  //   ? food_list.filter((item) => item.category === selectedCategory)
  //   : [...food_list];

  const handleSort = (props) => {
    // Sort filtered products
    console.log("props", props);
    const sortProduct = dishes.filter((item) => item.veg == props);
    console.log("sort", sortProduct);
    setDishes(sortProduct);
  };

  const sortOptions = [
    { name: "veg", current: false },
    { name: "nonveg", current: false },
  ];

  const filters = [
    {
      id: "category",
      name: "Category",
      options: [
        { value: "chinese", label: "chinese", checked: false },
        { value: "biryani", label: "biryani", checked: false },
        { value: "pizza", label: "pizza", checked: false },
        { value: "breakfast", label: "breakfast", checked: false },
        { value: "maincourse", label: "maincourse", checked: false },
        { value: "burger", label: "burger", checked: false },
        { value: "combos", label: "combos", checked: false },
      ],
    },
  ];

  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dishes.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCategoryFilter = (props) => {
    // category filtered products
    console.log("props", props);
    const sortProduct = temp.filter(
      (item) => item.category == props.toLowerCase()
    );
    console.log("sort", sortProduct);
    setDishes(sortProduct);
  };

  const handleResetFilter = () => {
    fetchDishes();
  };

  const fetchMenu = () => {
    axios
      .get("https://do-eat-backen.onrender.com/menu")
      .then((res) => {
        console.log("menu", res.data);
        setMenuItem(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // setDishes(food_list);
    scrollToTop();
  }, []);

  useEffect(() => {
    fetchDishes();
    fetchMenu();
  }, []);

  // console.log("cat", category);
  // console.log("sort",selectedSortOption)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {temp.map((option, optionIdx) => (
                                  <div
                                    key={option._id}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${option.id}-${optionIdx}`}
                                      name={`${option.id}[]`}
                                      defaultValue={option.category}
                                      type="checkbox"
                                      checked={
                                        selectedCategory === option.category
                                      }
                                      onChange={() =>
                                        setSelectedCategory(option.category)
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${option._id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500 label"
                                    >
                                      {option.category}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="explore-menu -mt-16" id="explore-menu">
          <h1 className="text-2xl">Explore Our Menu</h1>

          {/* menu div code start here */}
          <div className="explore-menu-list">
            {menuItem.map((item, index) => {
              return (
                <div
                  onClick={() => handleCategoryFilter(item.title)}
                  key={index}
                  className="explore-menu-list-item"
                >
                  <img className="menu_image" src={item.image} alt="" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
          {/* menu div code end here */}
        </div>
       
        
{/* <div className="text-center">
        <span className="text-center p-2 bg-red-600 text-xl text-white animate-blink">Backend Server is Down</span>
</div> */}
     
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  {fetchLoading ? (
                    <button className="border-2 rounded-xl border-orange-500 p-2 ml-2 bg-orange-500 font-bold text-white">
                      loading...
                    </button>
                  ) : (
                    <button
                      onClick={handleResetFilter}
                      className="border-2 rounded-xl border-orange-500 p-2 ml-2 bg-orange-500 font-bold text-white"
                    >
                      Reset Filter
                    </button>
                  )}
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => handleSort(option.name)}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              {/* <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                ></ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-xl text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Your content */}
                <div className="food-display-list">
                  {dishes.map((item, index) => (
                    <>
                      {dishes.length > 0 ? (
                        <FoodItem
                        quantity1={item.quantity}
                          key={index}
                          cutprice={item.cutprice}
                          discount={item.discount}
                          id={item._id}
                          title={item.title}
                          description={item.description}
                          price={item.price}
                          image={item.image}
                        />
                      ) : (
                        "No Dishes Found"
                      )}
                    </>
                  ))}
                </div>
                {/* Pagination */}
                <div className="pagination">
                  <button
                    onClick={() =>
                      paginate(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button>{currentPage}</button>
                  <button
                    onClick={() =>
                      paginate(
                        currentPage <
                          Math.ceil(food_list.length / productsPerPage)
                          ? currentPage + 1
                          : currentPage
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(food_list.length / productsPerPage)
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
