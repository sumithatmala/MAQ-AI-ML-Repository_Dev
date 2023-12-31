import { createAction } from "kbar";
import {
  ClockIcon,
  PaperAirplaneIcon,
  ReceiptRefundIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

export const initialActions = [
  // -------------------basic---------------------
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back home main dashboard",
    section: "Basic",
    perform: () => (window.location.href = "/"),
    //icon: // ClockIcon,
    subtitle: "Subtitles can help add more context.",
  },

  // -------------------Artificial Intelligence (AI)-------------------
  {
    id: "workTimeAction",
    name: "Natural Language Processing (NLP)",
    shortcut: ["a", "w"],
    keywords: "",
    section: "Artificial Intelligence (AI)",
    subtitle: "Natural Language Processing (NLP)",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "vacationAction",
    name: "Computer Vision",
    shortcut: ["a", "v"],
    keywords: "",
    section: "Artificial Intelligence (AI)",
    subtitle: "Computer Vision",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "invoiceAction",
    name: "Speech Recognition",
    shortcut: ["a", "i"],
    keywords: "",
    section: "Artificial Intelligence (AI) ",
    subtitle: "Speech Recognition",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "documentsAction",
    name: "AI in Robotics",
    shortcut: ["a", "d"],
    keywords: "",
    section: "Artificial Intelligence (AI)",
    subtitle: "AI in Robotics",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "documentsAction",
    name: "Other AI Applications",
    shortcut: ["a", "d"],
    keywords: "",
    section: "Artificial Intelligence (AI)",
    subtitle: "Other AI Applications",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // -------------------Machine Learning (ML)---------------------
  {
    id: "projectCreateAction",
    name: "Supervised Learning",
    shortcut: ["p", "c"],
    keywords: "project create",
    section: "Machine Learning (ML)",
    subtitle: "Supervised Learning",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "projectManageAction",
    name: "Unsupervised Learning",
    shortcut: ["p", "m"],
    keywords: "project manage",
    section: "Machine Learning (ML)",
    subtitle: "Unsupervised Learning",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "projectArchiveAction",
    name: "Deep Learning",
    shortcut: ["p", "a"],
    keywords: "",
    section: "Machine Learning (ML)",
    subtitle: "Deep Learning",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // -----------------Products-----------------------
  {
    id: "clientCreateAction",
    name: "AI Products",
    shortcut: ["l", "c"],
    keywords: "",
    section: "Products",
    subtitle: "AI Products",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "clientManageAction",
    name: "ML Products",
    shortcut: ["l", "m"],
    keywords: "client manage",
    section: "Products",
    subtitle: "ML Products",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "clientArchiveAction",
    name: "Other Products",
    shortcut: ["l", "a"],
    keywords: "client archive",
    section: "Products",
    subtitle: "Other Products",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // ---------------employee-------------------------
  // {
  //   id: "employeeCreateAction",
  //   name: "Create employee",
  //   shortcut: ["e", "c"],
  //   keywords: "employee create",
  //   section: "Employee",
  //   subtitle: "Create new employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "employeeManageAction",
  //   name: "Manage employee",
  //   shortcut: ["e", "m"],
  //   keywords: "employee manage",
  //   section: "Employee",
  //   subtitle: "Manage employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "employeeArchiveAction",
  //   name: "Archive employee",
  //   shortcut: ["e", "a"],
  //   keywords: "employee archive",
  //   section: "Employee",
  //   subtitle: "Archive employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // // ---------------employee-------------------------
  // {
  //   id: "employeeCreateAction",
  //   name: "Create employee",
  //   shortcut: ["e", "c"],
  //   keywords: "employee create",
  //   section: "Employee",
  //   subtitle: "Create new employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "employeeManageAction",
  //   name: "Manage employee",
  //   shortcut: ["e", "m"],
  //   keywords: "employee manage",
  //   section: "Employee",
  //   subtitle: "Manage employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "employeeArchiveAction",
  //   name: "Archive employee",
  //   shortcut: ["e", "a"],
  //   keywords: "employee archive",
  //   section: "Employee",
  //   subtitle: "Archive employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // // ---------------employee-------------------------
  // {
  //   id: "employeeCreateAction",
  //   name: "Create employee",
  //   shortcut: ["e", "c"],
  //   keywords: "employee create",
  //   section: "Employee",
  //   subtitle: "Create new employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "employeeManageAction",
  //   name: "Manage employee",
  //   shortcut: ["e", "m"],
  //   keywords: "employee manage",
  //   section: "Employee",
  //   subtitle: "Manage employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "employeeArchiveAction",
  //   name: "Archive employee",
  //   shortcut: ["e", "a"],
  //   keywords: "employee archive",
  //   section: "Employee",
  //   subtitle: "Archive employee.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // // ---------------company-------------------------
  // {
  //   id: "paperworkAction",
  //   name: "Paperwork",
  //   shortcut: ["c", "p"],
  //   keywords: "paperwork",
  //   section: "Company",
  //   subtitle: "Paperwork.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "licensesAction",
  //   name: "Licenses",
  //   shortcut: ["c", "l"],
  //   keywords: "licenses",
  //   section: "Company",
  //   subtitle: "Licenses.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "jiraAction",
  //   name: "Jira tickets",
  //   shortcut: ["c", "j"],
  //   keywords: "jira tickets",
  //   section: "Company",
  //   subtitle: "Jira tickets.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "perksBenefitsAction",
  //   name: "Perks and Benefits",
  //   shortcut: ["c", "b"],
  //   keywords: "perks benefits",
  //   section: "Company",
  //   subtitle: "Perks and Benefits.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },
  // {
  //   id: "referralsRewardsAction",
  //   name: "Referrals and Rewards",
  //   shortcut: ["c", "r"],
  //   keywords: "referrals rewards",
  //   section: "Company",
  //   subtitle: "Referrals and Rewards.",
  //   perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  // },

  createAction({
    name: "This repo on GitHub",
    shortcut: ["g", "h"],
    keywords: "github repo source code",
    section: "Links",
    perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
  }),
];
