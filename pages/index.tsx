import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Task from './components/Task';

type TodoList = {
  id: number;
  title: string;
  status: string;
};

export default function Home() {
  const [dataTask, setdataTask] = useState<TodoList[]>([]);
  const [inputTask, setinputTask] = useState('');

  const handlerInsertTask = () => {
    // setdataTask([...dataTask, inputTask]);
    setdataTask([
      ...dataTask,
      {
        id: Math.floor(Math.random() * 100),
        title: inputTask,
        status: 'progress',
      },
    ]);
    setinputTask('');
  };

  const handlerChangeStatus = (data: TodoList, e: any) => {
    let filter = dataTask.filter((item) => item.id === data.id);
    // console.log(e.target);
    setdataTask((prev) => {
      return prev.map((item) => {
        if (item.id === data.id) {
          item.status = e.target.value;
        }
        return item;
      });
    });
  };

  const handlerRemoveTask = (id: number) => {
    const remove = dataTask.filter((item) => item.id !== id);

    setdataTask(remove);
  };

  useEffect(() => {}, [dataTask]);

  return (
    <div className="relative bg-apps-background inset-0 min-h-screen max-h-full box-border">
      {/* Main Content */}
      <div className="relative mx-auto p-[99px]">
        {/* Heading */}
        <h1 className="text-[48px] font-[500] text-black leading-[58px]">
          TODO LIST
        </h1>

        {/* Form */}
        <div className="relative mt-[15px] flex gap-[9px]">
          {/* Input */}
          <Input
            value={inputTask}
            onChange={(e) => setinputTask(e.target.value)}
          />
          {/* Button */}
          <Button disabled={inputTask === ''} onClick={handlerInsertTask} />
        </div>

        {/* List */}
        <div className="relative box-border mt-[56px]">
          {/* List Flexbox */}
          <ul className="relative flex flex-wrap gap-[32px] transition-all duration-300">
            {/* map over and print items */}

            {dataTask?.length > 0 ? (
              // when data task is not empty
              dataTask?.map((item, index) => (
                // Data List Container
                <li
                  key={index}
                  className="relative flex-shrink-0 w-[370px] h-[202px] bg-white rounded-[16px] flex justify-center items-center">
                  {/* Button remove */}
                  <div
                    onClick={() => handlerRemoveTask(item.id)}
                    className="group absolute top-[20px] right-[20px] text-apps-danger cursor-pointer h-fit w-fit p-2">
                    <hr className="absolute top-0 h-[20px] border-[1px] rounded-full border-red-500 transform rotate-45 group-hover:border-red-700 transition-all duration-300" />
                    <hr className="h-[20px] border-[1px] rounded-full border-red-500 transform -rotate-45 absolute top-0 group-hover:border-red-700 transition-all duration-300" />
                  </div>
                  {/* Title Content */}
                  <div className="relative flex gap-5 items-center">
                    <div className="relative flex gap-4 flex-col">
                      <h1 className="text-[32px] leading-[39px] font-[400] text-center capitalize">
                        {item.title}
                      </h1>
                      <p>{item.status}</p>
                    </div>

                    <div className="relative mt-4">
                      <select
                        onChange={(e) => handlerChangeStatus(item, e)}
                        name="status"
                        className="w-32 border border-gray-200 py-2 px-4 rounded-md">
                        <option value="progress">Progress</option>
                        <option value="todo">To do</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              // when data task is empty
              <li className="relative flex justify-center items-center w-full p-4">
                <h1 className="text-[32px] leading-[39px] font-[400] text-center">
                  Belum ada data
                </h1>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
