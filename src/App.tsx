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

const categoryList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m17.502 12.033l-4.241-2.458l2.138-5.131A1.003 1.003 0 0 0 14.505 3a1 1 0 0 0-.622.214l-.07.06l-7.5 7.1a1.002 1.002 0 0 0 .185 1.592l4.242 2.46l-2.163 5.19a.999.999 0 0 0 1.611 1.11l7.5-7.102a1.002 1.002 0 0 0-.186-1.591"
        />
      </svg>
    ),
    label: "Primary",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"
        />
      </svg>
    ),
    label: "Alert",
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
          d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
        />
      </svg>
    ),
    label: "All",
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
          d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
        />
      </svg>
    ),
    label: "Notifications",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.175 22q-.375 0-.75-.15t-.675-.45L2.6 14.25q-.3-.3-.438-.663t-.137-.737t.138-.75t.437-.675L11.4 2.6q.275-.275.65-.438T12.825 2H20q.825 0 1.413.587T22 4v7.175q0 .4-.15.763t-.425.637L12.6 21.4q-.3.3-.675.45t-.75.15M17.5 8q.625 0 1.063-.437T19 6.5t-.437-1.062T17.5 5t-1.062.438T16 6.5t.438 1.063T17.5 8"
        />
      </svg>
    ),
    label: "Pinned",
  },
];

const categoryList2 = [
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
  },
  {
    icon: (
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
    ),
    label: "Dots",
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
  },
];

const pinnedList = [
  {
    id: 1,
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    date: "Mar 29",
    active: false,
    names: ["Ali from Baked"],
    subject: "New design review",
    actions: [3],
    messageCount: 9,
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    date: "Jul 21",
    active: true,
    names: ["Netflix Support"],
    subject: "New feature rollout",
    actions: [3],
    messageCount: 5,
  },
  {
    id: 5,
    image: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // GitHub
    date: "Jul 20",
    active: false,
    names: ["GitHub Bot"],
    subject: "Security scan completed",
    actions: [1, 2],
    messageCount: 3,
  },
  {
    id: 6,
    image: "https://stripe.com/img/v3/home/twitter.png", // Stripe
    date: "Jul 19",
    active: true,
    names: ["Stripe"],
    subject: "Invoice payment failed",
    actions: [2, 3],
    messageCount: 2,
  },
];

const primaryList = [
  {
    id: 9,
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    date: "Mar 28",
    active: true,
    names: ["Ali"],
    subject: "Security alert: Critical vulnerability",
    actions: [1, 2, 3],
    messageCount: 8,
  },
  {
    id: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    date: "Jul 18",
    active: true,
    names: ["Amazon Support"],
    subject: "Your AWS bill is ready",
    actions: [1],
    messageCount: 10,
  },
  {
    id: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    date: "Jul 17",
    active: false,
    names: ["Microsoft Teams"],
    subject: "Weekly sync reminder",
    actions: [3],
    messageCount: 1,
  },
  {
    id: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    date: "Jul 16",
    active: true,
    names: ["Meta Security"],
    subject: "Account sign-in attempt",
    actions: [1],
    messageCount: 2,
  },
  {
    id: 13,
    image: "https://logo.clearbit.com/paypal.com", // Replaced PayPal SVG
    date: "Jul 15",
    active: true,
    names: ["PayPal"],
    subject: "Transaction receipt",
    actions: [2],
    messageCount: 4,
  },
  {
    id: 14,
    image: "https://logo.clearbit.com/google.com", // Google logo via Clearbit
    date: "Jul 14",
    active: false,
    names: ["Google Workspace"],
    subject: "Shared document updated",
    actions: [3],
    messageCount: 7,
  },
  {
    id: 15,
    image: "https://logo.clearbit.com/twitter.com", // Twitter logo
    date: "Jul 13",
    active: false,
    names: ["Twitter Notifications"],
    subject: "New login from iPhone",
    actions: [1, 3],
    messageCount: 6,
  },
  {
    id: 16,
    image: "https://logo.clearbit.com/slack.com", // Slack logo
    date: "Jul 12",
    active: true,
    names: ["Slack Channel"],
    subject: "New message in #design",
    actions: [3],
    messageCount: 11,
  },

  {
    id: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    date: "Jul 11",
    active: false,
    names: ["Apple ID"],
    subject: "Apple ID changed",
    actions: [1],
    messageCount: 1,
  },
  {
    id: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    date: "Jul 10",
    active: false,
    names: ["Instagram"],
    subject: "2FA Code: 123456",
    actions: [2],
    messageCount: 3,
  },
];

interface List {
  icon: JSX.Element;
  label: string;
  count: number;
}

interface ListCats {
  icon: JSX.Element;
  label: string;
}

interface ListUser {
  id: number;
  image: string;
  date: string;
  active: boolean;
  names: string[];
  subject: string;
  actions: number[];
  messageCount: number;
}

function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [leftMenuChip, setLeftMenuChip] = useState<string>("B");
  const [selected, setSelected] = useState<string>("Inbox");
  const [selectedCat, setSelectedCat] = useState<string>("Primary");
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const [showManag, setShowManag] = useState<boolean>(false);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [core] = useState<List[]>(coreList);
  const [management] = useState<List[]>(managementList);
  const [bottom] = useState<List[]>(bottomList);
  const [categories] = useState<ListCats[]>(categoryList);
  const [pinned] = useState<ListUser[]>(pinnedList);
  const [primary] = useState<ListUser[]>(primaryList);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <main className="h-screen p-2 bg-zinc-950 text-gray-200 w-full flex gap-1.5 transition-all ease-in-out duration-700">
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
                  } flex justify-between hover:bg-zinc-900 items-center  p-2 rounded-md hover:cursor-pointer`}
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
                  } flex justify-between hover:bg-zinc-900 items-center  p-2 rounded-md hover:cursor-pointer`}
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

        <div className="bg-zinc-950 mt-3">
          <div className="w-full space-y-3 mt-3.5 text-sm">
            {bottom.map((item) => (
              <div
                className={`${
                  selected === item.label && "bg-zinc-900"
                } flex hover:bg-zinc-900 justify-between items-center  p-2 rounded-md hover:cursor-pointer`}
                onClick={() => setSelected(item.label)}
              >
                <div className="inline-flex items-center gap-2">
                  <span
                    className={`${selected !== item.label && "text-zinc-600"}`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </div>
                <div className={`text-zinc-600 ${item.count == 0 && "hidden"}`}>
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg h-full w-full max-w-sm border border-zinc-800 overflow-y-auto hide-scrollbar">
        <div className="border-b border-zinc-800 h-14 flex items-center justify-between px-4 font-light text-sm">
          <div>
            <div className="inline-flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-zinc-600"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-2h7V5h-7z"
                />
              </svg>
              <p>{selected}</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-zinc-600">
            <div className="inline-flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                />
              </svg>
              <p>Select</p>
            </div>
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-zinc-800"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M7.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5"
                viewBox="0 0 21 21"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.5 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m4 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m12-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-1 2h-11m16 0h-3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full p-4 h-full">
          <form className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-zinc-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-9 text-sm text-zinc-500 bg-zinc-950 rounded-lg outline-0"
                placeholder="Search"
              />
              <button
                type="submit"
                className="text-zinc-700 hover:cursor-pointer absolute end-1 bottom-1 bg-zinc-900 font-medium rounded text-sm p-1"
              >
                ⌘K
              </button>
            </div>
          </form>

          <div className="w-full pt-5 flex gap-2">
            {categories.map((item) => (
              <div
                className={`flex justify-center hover:cursor-pointer items-center rounded gap-1 h-8 font-sm font-light ${
                  item.label === selectedCat
                    ? "bg-blue-500 text-gray-200 w-full max-w-[200px]"
                    : "bg-zinc-800 text-zinc-500 w-8 aspect-square hover:bg-zinc-950"
                }`}
                onClick={() => setSelectedCat(item.label)}
              >
                <div className="inline-flex gap-1 items-center">
                  {item.icon}
                  {selectedCat === item.label && <p>{item.label}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-zinc-600">Pinned [{pinned.length}]</p>
            <div className="w-full space-y-3 mt-3.5 text-sm">
              {pinned.map((item) => (
                <div
                  className={`${
                    selectedUser === item.id && "bg-zinc-800"
                  } w-full inline-flex text-sm gap-3 hover:cursor-pointer hover:bg-zinc-800 rounded-md p-2.5`}
                  onClick={() => setSelectedUser(item.id)}
                >
                  <div className="relative">
                    <img
                      className="min-w-10 min-h-10 w-10 h-10 max-w-10 max-h-10 rounded-full"
                      src={item.image}
                      alt=""
                    />
                    {item.active && (
                      <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-blue-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    )}
                  </div>
                  <div className="w-full">
                    <div className="w-full inline-flex items-center justify-between">
                      <div>
                        {item.names.map((name, index) => (
                          <span key={index}>
                            {name}
                            {index < pinnedList[0].names.length - 1 ? ", " : ""}
                          </span>
                        ))}
                        {item.messageCount > 1 && (
                          <span className="pl-1 text-zinc-600">
                            [{item.messageCount}]
                          </span>
                        )}
                      </div>
                      <div className="text-zinc-600">{item.date}</div>
                    </div>
                    <div className="w-ful text-zinc-600 pt-1 flex gap-5 items-center justify-between">
                      <div
                        className="truncate max-w-[210px] overflow-hidden whitespace-nowrap"
                        title={item.subject}
                      >
                        {item.subject}
                      </div>

                      <div className="inline-flex justify-center gap-1 items-center wrap-normal">
                        {item.actions.map((action) => (
                          <div>
                            {action === 1 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 text-orange-400"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"
                                />
                              </svg>
                            )}
                            {action === 2 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 text-purple-500"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
                                />
                              </svg>
                            )}

                            {action === 3 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 text-green-500"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                                />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-zinc-600">Primary [{primary.length}]</p>
            <div className="w-full space-y-3 mt-3.5 text-sm">
              {primary.map((item) => (
                <div
                  className={`${
                    selectedUser === item.id && "bg-zinc-800"
                  } w-full inline-flex text-sm gap-3 hover:cursor-pointer hover:bg-zinc-800 rounded-md p-2.5`}
                  onClick={() => setSelectedUser(item.id)}
                >
                  <div className="relative">
                    <img
                      className="min-w-10 min-h-10 w-10 h-10 max-w-10 max-h-10 rounded-full"
                      src={item.image}
                      alt=""
                    />
                    {item.active && (
                      <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-blue-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    )}
                  </div>
                  <div className="w-full">
                    <div className="w-full inline-flex items-center justify-between">
                      <div>
                        {item.names.map((name, index) => (
                          <span key={index}>
                            {name}
                            {index < pinnedList[0].names.length - 1 ? ", " : ""}
                          </span>
                        ))}
                        {item.messageCount > 1 && (
                          <span className="pl-1 text-zinc-600">
                            [{item.messageCount}]
                          </span>
                        )}
                      </div>
                      <div className="text-zinc-600">{item.date}</div>
                    </div>
                    <div className="w-ful text-zinc-600 pt-1 flex gap-5 items-center justify-between">
                      <div
                        className="truncate max-w-[210px] overflow-hidden whitespace-nowrap"
                        title={item.subject}
                      >
                        {item.subject}
                      </div>

                      <div className="inline-flex justify-center gap-1 items-center wrap-normal">
                        {item.actions.map((action) => (
                          <div>
                            {action === 1 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 text-orange-400"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"
                                />
                              </svg>
                            )}
                            {action === 2 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 text-purple-500"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
                                />
                              </svg>
                            )}

                            {action === 3 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 text-green-500"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                                />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg h-full w-full border border-zinc-800 overflow-y-auto hide-scrollbar">
        <div className="border-b border-zinc-800 h-14 flex items-center justify-between px-4 font-light text-sm">
          <div className="inline-flex items-center gap-1 text-zinc-600">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 hover:cursor-pointer text-zinc-700"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                />
              </svg>
            </div>
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-zinc-800"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M7.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 hover:cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 -rotate-180 hover:cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
                />
              </svg>
            </div>
          </div>

          <div className="inline-flex items-center gap-2">
            <div
              className={`flex justify-center w-7 aspect-square hover:cursor-pointer items-center rounded gap-1 h-7 font-sm font-light bg-zinc-800 text-zinc-500 hover:bg-zinc-950`}
            >
              <div className="inline-flex gap-1 items-center -rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 text-yellow-600 rotate-45"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.447 9.559a1.8 1.8 0 0 1-.25.82a2 2 0 0 1-.56.63a.7.7 0 0 1-.34.13l-1.76.23a1 1 0 0 0-.52.26c-.53.51-1.07 1-1.81 1.78l-.85.84a.93.93 0 0 0-.23.41l-.94 3.78a.6.6 0 0 1 0 .12a2 2 0 0 1-1.44 1.15h-.36a2.3 2.3 0 0 1-.58-.08a1.94 1.94 0 0 1-.81-.49l-2.54-2.53l-4.67 4.67a.75.75 0 0 1-1.06-1.06l4.67-4.67l-2.5-2.5a2 2 0 0 1-.48-.82a1.8 1.8 0 0 1-.05-.95a1.94 1.94 0 0 1 .39-.85a2 2 0 0 1 .75-.58h.12l3.74-1a1 1 0 0 0 .44-.25c1.39-1.37 1.87-1.85 2.63-2.67a.86.86 0 0 0 .23-.5l.24-1.77a.7.7 0 0 1 .13-.35a2 2 0 0 1 2.28-.69a2 2 0 0 1 .72.46l4.88 4.9a2 2 0 0 1 .57 1.55z"
                  />
                </svg>
              </div>
            </div>

            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-zinc-800"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M7.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>

            <div
              className={`flex justify-center w-24 aspect-square hover:cursor-pointer items-center rounded gap-1 h-7 font-sm font-light bg-zinc-800 text-zinc-500 hover:bg-zinc-950`}
            >
              <div className="inline-flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    color="currentColor"
                  >
                    <path d="M13 6H8.5a4.5 4.5 0 0 0 0 9H20" />
                    <path d="M17 12s3 2.21 3 3s-3 3-3 3" />
                  </g>
                </svg>
                <p>Reply all</p>
              </div>
            </div>

            {categoryList2.map((item) => (
              <div
                className={`flex justify-center w-7 aspect-square hover:cursor-pointer items-center rounded gap-1 h-7 font-sm font-light ${
                  item.label === "Bin"
                    ? "text-red-900 bg-red-400"
                    : "bg-zinc-800 text-zinc-500 hover:bg-zinc-950"
                }`}
                onClick={() => setSelectedCat(item.label)}
              >
                <div className="inline-flex gap-1 items-center">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full p-4">
          <div>
            <div>
              <p>
                Re: Design review feedback{" "}
                <span className="text-zinc-700">[5]</span>
              </p>
            </div>
            <p className="font-light pt-2 inline-flex items-center gap-1 text-sm text-zinc-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
                />
              </svg>{" "}
              March 25 - March 29
            </p>

            <div className="border border-purple-600 my-5 rounded-lg p-1">
              <div className="p-2">
                <div
                  className="inline-flex text-sm gap-2 hover:cursor-pointer items-center text-zinc-600"
                  onClick={() => setShowSummary((prev) => !prev)}
                >
                  <p className="">Attachments</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`${
                      !showSummary && "rotate-180"
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
                <div className="overflow-hidden ">
                  <p className="text-zinc-300 font-light text-sm pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum ex, aliquid repellat illo consequuntur expedita rem
                    ipsum perferendis voluptatem nostrum eaque qui est ipsam
                    beatae eius repudiandae soluta obcaecati. Tenetur. Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos iure unde maiores voluptas dolorum quae, ipsa
                    obcaecati accusamus vero numquam temporibus officiis minus
                    velit facere, odit, rem impedit assumenda reiciendis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-5">
            {[1, 2, 3, 4].map((item) => (
              <div className="space-y-4 pt-5">
                <div
                  className={`w-full inline-flex text-sm gap-3 hover:cursor-pointer hover:bg-zinc-800 rounded-md`}
                >
                  <div className="relative">
                    <img
                      className="min-w-10 min-h-10 w-10 h-10 max-w-10 max-h-10 rounded-full"
                      src={"https://stripe.com/img/v3/home/twitter.png"}
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-full inline-flex items-center justify-between">
                      <div>Stripe support</div>
                      <div className="text-zinc-600">March 25, 105AM</div>
                    </div>
                    <div className="w-ful text-zinc-600 pt-1 flex gap-5 items-center justify-between">
                      <div className="truncate max-w-[210px] overflow-hidden whitespace-nowrap">
                        To:Alex, Serah
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-light text-zinc-200">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci itaque totam, ipsam architecto est fuga saepe, ut
                  libero eos omnis sapiente earum quasi ipsum atque nisi
                  blanditiis, velit deserunt assumenda.
                </p>
                <p className="text-sm font-light text-zinc-200">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Adipisci itaque totam, ipsam architecto est fuga saepe, ut
                  libero eos omnis sapiente earum quasi ipsum atque nisi
                  blanditiis, velit deserunt assumenda.
                </p>

                <div className="flex pt-2 items-center text-sm mb-3 gap-2">
                  <div
                    className={`flex justify-center px-1 w-fit hover:cursor-pointer items-center rounded-md gap-1 h-7 font-sm font-light bg-zinc-800 `}
                  >
                    <div className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 text-purple-700"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m8.5 13.5l2.5 3l3.5-4.5l4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
                        />
                      </svg>
                      <p className="inline-flex gap-2">
                        image.png{" "}
                        <span className="text-zinc-500 text-sm">21MB</span>
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center px-1 w-fit hover:cursor-pointer items-center rounded-md gap-1 h-7 font-sm font-light bg-zinc-800 `}
                  >
                    <div className="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 text-purple-700"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m8.5 13.5l2.5 3l3.5-4.5l4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
                        />
                      </svg>
                      <p className="inline-flex gap-2">
                        image.png{" "}
                        <span className="text-zinc-500 text-sm">21MB</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex pt-2 items-center text-sm gap-2">
                  <div
                    className={`flex justify-center w-20 aspect-square hover:cursor-pointer items-center rounded gap-1 h-7 font-sm font-light bg-zinc-800 text-zinc-500 hover:bg-zinc-950`}
                  >
                    <div className="inline-flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 rotate-180"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          color="currentColor"
                        >
                          <path d="M13 6H8.5a4.5 4.5 0 0 0 0 9H20" />
                          <path d="M17 12s3 2.21 3 3s-3 3-3 3" />
                        </g>
                      </svg>
                      <p>Reply</p>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center w-24 aspect-square hover:cursor-pointer items-center rounded gap-1 h-7 font-sm font-light bg-zinc-800 text-zinc-500 hover:bg-zinc-950`}
                  >
                    <div className="inline-flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 "
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path
                            stroke-dasharray="16"
                            stroke-dashoffset="16"
                            d="M5 12h13.5"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.2s"
                              values="16;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="10"
                            stroke-dashoffset="10"
                            d="M19 12l-5 5M19 12l-5 -5"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.2s"
                              dur="0.2s"
                              values="10;0"
                            />
                          </path>
                        </g>
                      </svg>
                      <p>Forward</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
