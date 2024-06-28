import React from "react";

function todoUI() {
  return (
    <>
      <div className="bg-blue-500 h-[100vh]  ">
        <div className="p-2 flex justify-center items-center ">
          <input
            type="text "
            placeholder="Add todo "
            className="w-[300px] h-[40px] rounded-md placeholder:p-2 text-md "
          />
          <button className="w[80px] rounded-md bg-slate-600 w-[100px]  h-[40px] ">
            Add
          </button>
        </div>
        <div className="flex flex-col justify-center gap-3 ">
          <div>
            <ul>
              <div className="text-gray-300 bg-blue-400 text-bold flex justify-around  ">
                <div>todo msg 1</div>
                <div>
                  <button>edit</button>
                  <button>delete</button>
                </div>
              </div>
              <div className="text-gray-300 bg-blue-400 text-bold flex justify-around  ">
                <div>todo msg 1</div>
                <div>
                  <button>edit</button>
                  <button>delete</button>
                </div>
              </div>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default todoUI;
