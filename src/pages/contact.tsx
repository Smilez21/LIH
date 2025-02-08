import React from "react";
import Header from "../components.tsx/header";
import Footer from "../components.tsx/footer";

const contact = () => {
  return (
    <div>
      <div className=" pr-[4.69rem] relative pl-[3.88rem] pb-[6.06rem] pt-[2.44rem]  bg-[linear-gradient(270deg_,_#ED712E_0%_,_#F4623A_100%)]">
        <Header />
        <div className=" absolute top-28 left-[4.94rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <circle opacity="0.4" cx="30.5" cy="30.5" r="30.5" fill="white" />
          </svg>
        </div>
        <div className="mt-[5.38rem] text-center">
          <h2 className="text-[2.8125rem]  font-semibold leaing-0">
            Contact us
          </h2>
          <p className="common-body-text max-w-[40.5rem] mx-auto !opacity-100">
            Have a queston? why not get in touch with us
          </p>
        </div>
        <div className="absolute top-[15rem] right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="174"
            viewBox="0 0 87 174"
            fill="none"
          >
            <circle opacity="0.6" cx="87" cy="87" r="87" fill="white" />
          </svg>
        </div>
      </div>
      <div className="pt-24 flex gap-12 items-center justify-center">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  text-black px-6 py-28">
          <div className="flex flex-col items-center">
            <img src="/usa.png"></img>
          </div>
          <div className="flex flex-col items-center">
            <p className="pt-2">USA </p>
            <p className="text-base">8 The Green, Set R,Dover, DE 19901</p>
          </div>
        </div>

        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  text-black px-6 py-24">
          <div className="flex flex-col items-center pb-2">
            <img src="/senegal.png" className="pb-2"></img>
          </div>
          <div className="flex flex-col items-center">
            <p className="pt-2">Senegal</p>
            <p className="text-base">
              Point E, Rue Ambassades Immeuble Djaraf,
            </p>
            <p className="">DER Hub, Dakar</p>
            <p className="text-orange-500 pt-2">+221 78 580 15 61</p>
          </div>
        </div>

        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  text-black px-4 py-24">
          <div className="flex flex-col items-center">
            <img src="/nigeria.png"></img>
          </div>
          <div className="flex flex-col items-center">
            <p className="pt-2">Nigeria </p>
            <p className="text-base">
              1A Akin Osiyemi Street, Allen AvenueIkeja
            </p>
            <p className="">-lagos </p>
            <p className="text-orange-500 pt-2">
              +23480 6708 2203, +234 70 3503 9214{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-24 flex justify-center gap-12">
        <div className="mb-6">
          <img src="/map.png" alt="Map Image" />
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          style={{ width: "545px", height: "365px" }}
        >
          <div className="mb-4">
         +
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-50"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label> */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-50"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Write a message
            </label> */}
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-orange-50"
              id="message"
              placeholder="Write your message here"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="text-black pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default contact;
