import React, { useState } from "react";

const Modal = (props) => {
  const [showList, setShowList] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState([]);

  function showListHandler() {
    setShowList(!showList);
  }

  function messageHandler(event) {
    setMessage(event.target.value);
  }

  function sendMessage() {
    if (message !== "") {
      const messages = [...sentMessage, message];
      setSentMessage(messages);
      setMessage("");
    }
    console.log(sentMessage);
  }

  return (
    <div className="bg-white w-3/5 h-3/4 rounded-xl relative flex flex-col">
      <header className="w-full text-white h-[60px] rounded-t-xl bg-green-medium flex flex-row-reverse justify-between items-center">
        <div className="w-1/4">
          <span className="inline-block w-2/3 text-right">دکتر بای</span>
          <span className="inline-block w-1/3 text-right">
            <img
              className=" bg-blue-600 inline-block w-[40px] h-[40px] rounded-full mr-[10px]"
              src=""
              alt="Robot-icon"
            />
          </span>
        </div>
        <div className="w-1/4">
          <span
            className="material-icons text-4xl ml-1 text-red-600 cursor-pointer"
            onClick={props.closed}
          >
            close
          </span>
          <span
            className="material-icons text-4xl ml-1 cursor-pointer"
            onClick={showListHandler}
          >
            menu
          </span>
        </div>
        {showList ? (
          <ul className="text-sm text-black absolute bg-white top-[3rem] left-[3rem] border-[1px] border-gray-600 border-solid rounded-md">
            <li className="border-b-[1px] border-gray-600 border-solid py-1 px-7">
              درخواست های من
            </li>
            <li className="border-b-[1px] border-gray-600 border-solid py-1 px-7">
              لیست دستورات
            </li>
            <li className="border-b-[1px] border-gray-600 border-solid py-1 px-7">
              {" "}
              تاریخچه بیام ها
            </li>
            <li className="border-b-[1px] border-gray-600 border-solid py-1 px-7">
              {" "}
              تاریخچه بیام ها
            </li>
            <li className="border-b-[1px] border-gray-600 border-solid py-1 px-7">
              {" "}
              تاریخچه بیام ها
            </li>
            <li className="py-1 px-7"> تاریخچه بیام ها</li>
          </ul>
        ) : null}
      </header>
      <main className="w-full h-full rounded-b-xl flex flex-col">
        <div className="w-full h-5/6">
          {sentMessage.map((item) => {
            return (
              <div
                className="w-auto h-[50px] rounded-lg shadow-md  m-3 flex flex-row-reverse items-center justify-start"
                key={item.index}
              >
                <span className="inline-block w-1/12 text-right">
                  <img
                    className=" bg-blue-600 inline-block w-[30px] h-[30px] rounded-full mr-[10px]"
                    src=""
                    alt="Robot-icon"
                  />
                </span>
                <span className="w-10/12 h-[40px]  text-end bg-gradient-to-r from-green-lightest from-10% via-sky-500 via-30% to-green-700 to-90% flex items-center justify-end rounded-3xl">
                  <span className="rounded-3xl bg-gray-300 mr-1 text-sm p-1 px-5">
                    {item}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
        <div className=" h-[50px] border-t-[1px] border-dark-100 border-solid text-end rounded-b-xl flex flex-row-reverse w-full absolute bottom-0">
          <input
            className="w-11/12 pr-3 placeholder:text-black outline-none text-end rounded-b-xl"
            type="text"
            value={message}
            onChange={messageHandler}
            placeholder="بیام خود را وارد کنید ..."
          />
          <span className="w-[90px]">
            <span
              onClick={sendMessage}
              className="material-icons cursor-pointer h-full w-1/2 text-center pl-1 bg-green-medium rounded-bl-xl text-3xl text-white"
            >
              ios_share
            </span>
            <span className="material-icons cursor-pointer h-full w-1/2 text-center pl-1 bg-green-medium text-3xl text-white">
              mic
            </span>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Modal;



