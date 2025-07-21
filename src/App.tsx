import { HtmlHTMLAttributes, useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

const coreList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="h-5"
      >
        <path
          fill="currentColor"
          d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5a1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"
        />
      </svg>
    ),
    label: "Inbox",
    count: 281,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5"
      >
        <path
          fill="currentColor"
          d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
        />
      </svg>
    ),
    label: "Favorites",
    count: 0,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5"
      >
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
        />
      </svg>
    ),
    label: "Draft",
    count: 0,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-5"
      >
        <path
          fill="currentColor"
          d="M7.262 4.244c-1.787-.893-3.765.812-3.146 2.711L8.13 19.26a2 2 0 0 0 1.573 1.352l15.86 2.643c.835.14.835 1.34 0 1.48L9.704 27.378a2 2 0 0 0-1.573 1.352L4.116 41.042c-.62 1.9 1.359 3.605 3.146 2.712l35.494-17.742c1.659-.83 1.659-3.197 0-4.026z"
        />
      </svg>
    ),
    label: "Sent",
    count: 0,
  },
];

const managementList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5"
      >
        <path
          fill="currentColor"
          d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5"
        />
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="m20.069 8.5l.431-.002V13c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V8.498l.431.002zM9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.541c.184-.076.417-.076.883-.076h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12"
          clip-rule="evenodd"
        />
      </svg>
    ),
    label: "Archive",
    count: 0,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
          clip-rule="evenodd"
        />
      </svg>
    ),
    label: "Span",
    count: 24,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z"
        />
      </svg>
    ),
    label: "Bin",
    count: 0,
  },
];

const bottomList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5"
      >
        <path
          fill="currentColor"
          d="M14.647 4.081a.724.724 0 0 0 1.08.448c2.439-1.485 5.23 1.305 3.745 3.744a.724.724 0 0 0 .447 1.08c2.775.673 2.775 4.62 0 5.294a.724.724 0 0 0-.448 1.08c1.485 2.439-1.305 5.23-3.744 3.745a.724.724 0 0 0-1.08.447c-.673 2.775-4.62 2.775-5.294 0a.724.724 0 0 0-1.08-.448c-2.439 1.485-5.23-1.305-3.745-3.744a.724.724 0 0 0-.447-1.08c-2.775-.673-2.775-4.62 0-5.294a.724.724 0 0 0 .448-1.08c-1.485-2.439 1.305-5.23 3.744-3.745a.722.722 0 0 0 1.08-.447c.673-2.775 4.62-2.775 5.294 0M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
        />
      </svg>
    ),
    label: "Settings",
    count: 0,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4.724l-4.762 2.857a1 1 0 0 1-1.508-.743L7 21v-2H6a4 4 0 0 1-3.995-3.8L2 15V7a4 4 0 0 1 4-4zm-4 9H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m2-4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2"
        />
      </svg>
    ),
    label: "Support",
    count: 0,
  },
];

function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [leftMenuChip, setLeftMenuChip] = useState<string>("B");
  const [selected, setSelected] = useState<string>("Inbox");
  const [showManag, setShowManag] = useState<boolean>(false);
  const [core] =
    useState<{ icon: JSX.Element; label: string; count: number }[]>(coreList);
  const [management] =
    useState<{ icon: JSX.Element; label: string; count: number }[]>(
      managementList
    );
  const [bottom] =
    useState<{ icon: JSX.Element; label: string; count: number }[]>(bottomList);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <main className="h-screen p-2 bg-zinc-950 text-gray-200">
      <main className="h-full w-full flex gap-1.5 transition-all ease-in-out duration-700">
        <div className="bg-zisnc-900 flex flex-col justify-between h-full min-w-80 p-2 overflow-y-auto hide-scrollbar">
          <div className="w-full">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                {["B", "A", "+"].map((item) => (
                  <div
                    className={`relative rounded hover:cursor-pointer h-7 w-7 bg-zinc-900 flex justify-center items-center ${
                      leftMenuChip === item && "border border-blue-500"
                    }`}
                    onClick={() => {
                      if (item == "+") return;
                      setLeftMenuChip(item);
                    }}
                  >
                    {item}
                    {item === leftMenuChip && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="absolute h-3.5 w-3.5 -bottom-2 -right-2 text-blue-500"
                      >
                        <path
                          fill="currentColor"
                          d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <div className="hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
                  />
                </svg>
              </div>
            </div>
            <div className="py-5">
              <p>Baked Design</p>
              <p className="font-light text-sm text-zinc-600">
                work@baked.design
              </p>
            </div>
            <div className="bg-zinc-900 rounded-lg flex justify-center h-10 hover:cursor-pointer">
              <div className="inline-flex items-center gap-2 text-sm">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 text-zinc-600"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                    />
                  </svg>
                </span>
                New email
              </div>
            </div>
            <div className="mt-6">
              <p className="text-zinc-600 pl-2">Core</p>
              <div className="w-full space-y-3 mt-3.5 text-sm">
                {core.map((item) => (
                  <div
                    className={`${
                      selected === item.label && "bg-zinc-900"
                    } flex justify-between items-center  p-2 rounded-md hover:cursor-pointer`}
                    onClick={() => setSelected(item.label)}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={`${
                          selected !== item.label && "text-zinc-600"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
                    <div
                      className={`text-zinc-600 ${item.count == 0 && "hidden"}`}
                    >
                      {item.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
            <div className="mt-6">
              <div
                className="inline-flex gap-2 hover:cursor-pointer items-center text-zinc-600"
                onClick={() => setShowManag((prev) => !prev)}
              >
                <p className="pl-2">Management</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={`${
                    !showManag && "rotate-180"
                  } h-5 transition-all ease-in-out duration-300`}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m6 15l6-6l6 6"
                  />
                </svg>
              </div>
              <div
                className={`w-full space-y-3 mt-3.5 text-sm transition-all ease-in-out duration-700 overflow-hidden ${
                  showManag ? "h-32" : "h-0"
                }`}
              >
                {management.map((item) => (
                  <div
                    className={`${
                      selected === item.label && "bg-zinc-900"
                    } flex justify-between items-center  p-2 rounded-md hover:cursor-pointer`}
                    onClick={() => setSelected(item.label)}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={`${
                          selected !== item.label && "text-zinc-600"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
                    <div
                      className={`text-zinc-600 ${item.count == 0 && "hidden"}`}
                    >
                      {item.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-950">
            <div className="w-full space-y-3 mt-3.5 text-sm">
              {bottom.map((item) => (
                <div
                  className={`${
                    selected === item.label && "bg-zinc-900"
                  } flex justify-between items-center  p-2 rounded-md hover:cursor-pointer`}
                  onClick={() => setSelected(item.label)}
                >
                  <div className="inline-flex items-center gap-2">
                    <span
                      className={`${
                        selected !== item.label && "text-zinc-600"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  <div
                    className={`text-zinc-600 ${item.count == 0 && "hidden"}`}
                  >
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-lg h-full w-full max-w-sm border border-zinc-800">
          <div className="border-b border-zinc-800 h-14"></div>
        </div>
        <div className="bg-zinc-900 rounded-lg h-full w-full border border-zinc-800">
          {" "}
          <div className="border-b border-zinc-800 h-14"></div>
        </div>
      </main>
    </main>
  );
}

export default App;
