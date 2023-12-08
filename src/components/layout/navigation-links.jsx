import {
  ClockIcon,
  PaperAirplaneIcon,
  ReceiptRefundIcon,
  DocumentIcon,
  PlusCircleIcon,
  ListBulletIcon,
  DocumentTextIcon,
  CommandLineIcon,
  TicketIcon,
  HeartIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export const navigationLinks = [
  {
    name: "Artificial Intelligence",
    subLinks: [
      {
        name: "Natural Language Processing (NLP)",
        description: "Natural Language Processing (NLP)",
        link: "/NLP",
        color: "bg-teal-300 dark:bg-teal-700",
        icon: <ClockIcon />,
      },
      {
        name: "Computer Vision",
        description: "Computer Vision",
        link: "/ComputerVision",
        color: "bg-indigo-300 dark:bg-indigo-700",
        icon: <DocumentIcon />,
      },
      {
        name: "Speech Recognition",
        description: "Speech Recognition",
        link: "/SpeechRecognition",
        color: "bg-amber-300 dark:bg-amber-700",
        icon: <PaperAirplaneIcon />,
      },
      {
        name: "AI in Robotics",
        description: "AI in Robotics",
        link: "/AIRobotics",
        color: "bg-rose-300 dark:bg-rose-700",
        icon: <ReceiptRefundIcon />,
      },
      {
        name: "Other AI Applications",
        description: "Other AI Applications",
        link: "/OtherAIApps",
        color: "bg-rose-300 dark:bg-rose-700",
        icon: <ReceiptRefundIcon />,
      },
    ],
  },
  {
    name: "Machine Learning",
    subLinks: [
      {
        name: "Supervised Learning",
        description: "Supervised Learning",
        link: "/SupervisedLearning",
        color: "bg-green-300 dark:bg-green-700",
        icon: <PlusCircleIcon />,
      },
      {
        name: "Unsupervised Learning",
        description: "Unsupervised Learning",
        link: "/UnsupervisedLearning",
        color: "bg-blue-300 dark:bg-blue-700",
        icon: <ListBulletIcon />,
      },
      {
        name: "Deep Learning",
        description: "Deep Learning",
        link: "/DeepLearning",
        color: "bg-red-300 dark:bg-red-700",
        icon: <ReceiptRefundIcon />,
      },
    ],
  },
  {
    name: "Products",
    subLinks: [
      {
        name: "AI Products",
        description: "AI Products",
        link: "/AIProducts",
        color: "bg-green-300 dark:bg-green-700",
        icon: <PlusCircleIcon />,
      },
      {
        name: "ML Products",
        description: "ML Products",
        link: "/MLProducts",
        color: "bg-blue-300 dark:bg-blue-700",
        icon: <ListBulletIcon />,
      },
      {
        name: "Other Products",
        description: "Other Products",
        link: "/OtherProducts",
        color: "bg-red-300 dark:bg-red-700",
        icon: <ReceiptRefundIcon />,
      },
    ],
  },
  {
    name: "Demos",
    subLinks: [
      // {
      //   name: "Create",
      //   description: "Create a new employee",
      //   link: "/create-employee",
      //   color: "bg-green-300 dark:bg-green-700",
      //   icon: <PlusCircleIcon />,
      // },
      // {
      //   name: "Manage",
      //   description: "Manage employees",
      //   link: "/manage-employees",
      //   color: "bg-blue-300 dark:bg-blue-700",
      //   icon: <ListBulletIcon />,
      // },
      // {
      //   name: "Archive",
      //   description: "Manage all archived employees",
      //   link: "/archive-employees",
      //   color: "bg-red-300 dark:bg-red-700",
      //   icon: <ReceiptRefundIcon />,
      // },
    ],
  },
  // {
  //   name: "Demos",
  //   subLinks: [
  //     {
  //       name: "Paperwork",
  //       description: "Manage documents and consents",
  //       link: "/company-paperwork",
  //       color: "bg-teal-300 dark:bg-teal-700",
  //       icon: <DocumentTextIcon />,
  //     },
  //     {
  //       name: "Licenses",
  //       description: "Manage your software licenses and subscriptions",
  //       link: "/company-licenses",
  //       color: "bg-pink-300 dark:bg-pink-700",
  //       icon: <CommandLineIcon />,
  //     },
  //     {
  //       name: "Jira tickets",
  //       description: "Create and edit your Jira tickets",
  //       link: "/company-jira-tickets",
  //       color: "bg-sky-300 dark:bg-sky-700",
  //       icon: <TicketIcon />,
  //     },
  //     {
  //       name: "Perks and benefits",
  //       description: "Manage your company perks and benefits",
  //       link: "/company-perks-and-benefits",
  //       color: "bg-green-300 dark:bg-green-700",
  //       icon: <GiftIcon />,
  //     },
  //     {
  //       name: "Referrals and rewards",
  //       description: "Manage your company referrals and rewards",
  //       link: "/company-referrals-and-rewards",
  //       color: "bg-red-300 dark:bg-red-700",
  //       icon: <HeartIcon />,
  //     },
  //   ]
  //   ,
  //   extraLinks: [
  //     {
  //       name: "Company details",
  //       link: "/company-details",
  //     },
  //     {
  //       name: "Company structure",
  //       link: "/company-structure",
  //     },
  //     {
  //       name: "Company blog",
  //       link: "/company-blog",
  //     },
  //     {
  //       name: "Company social media",
  //       link: "/company-social-media",
  //     },
  //   ],
  // },
];
