import React, { useState } from "react";
import Modal from '../modal/modal';

function Chat() {
  const [showModal, setShowModal] = useState(false);
  function showModalHandler() {
    setShowModal(true);
  }
  function closeModal () {
    setShowModal(false)
  }

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center relative">
      {showModal ? <Modal  closed={closeModal} /> : null}

      <span  className=" inline-block w-1/3 text-right bottom-[2rem] left-[-11.2rem] absolute cursor-pointer" onClick={showModalHandler}>
        <img
          className=" bg-blue-600 inline-block w-[80px] h-[80px] rounded-full mr-[10px]" src="" alt="Robot-icon">
        </img>
      </span>
    </div>
  );
}

export default Chat;
