import React from 'react';
import { BsCurrencyDollar, BsShield, BsHouseDoor, BsArrowRightShort, BsCardList } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import avatar3 from './avatar3.png';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.
      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
export const myColor = {
  primaryColor:'#121212',
  themeColor:'#43607c',
  primaryFont:'#4248c4',
  supportcolor:'#4c4444',
  secondaryfont: "#121212"
}
export const ColorData = [
  {  primaryColor:'#121212'},
  {  themeColor:'#4248c4'},
  {  primaryFont:'#4248c4'},
  {  supportcolor:'#4c4444'},
  {  secondaryfont: "#121212"},
]
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        link: 'home',
        name: 'MKS',
        icon: <BsHouseDoor />,
      }],
  },

  {
    title: 'Race Card',
    links: [
      {
        link: 'racecard',
        name: 'All RaceCards',
        icon: <BsCardList />,
      },
      {
        link: 'createracecard',
        name: 'Create RaceCard',
        icon: <BsCardList />,
      }],
  },
  {
    title: 'Race Course',
    links: [
      {
        link: 'racecourse',
        name: 'All RaceCourses',
        icon: <BsCardList />,
      },
      {
        link: 'createracecourse',
        name: 'Create RaceCourse',
        icon: <BsCardList />,
      }],
  },
  {
    title: 'Matches',
    links: [
      {
        link: 'matchresult',
        name: 'Match Result',
        icon: <BsCardList />,
      },
      {
        link: 'calendar',
        name: 'Match Calander',
        icon: <BsCardList />,
      }],
  },
  {
    title: 'Sponsor',
    links: [
      {
        link: 'allponsor',
        name: 'All Sponsors',
        icon: <BsCardList />,
      },
      {
        link: 'addsponsor',
        name: 'Add Sponsor',
        icon: <BsCardList />,
      }],
  },
  {
    title: 'Notifications',
    links: [
      {
        link: 'Notifications',
        name: 'All Notifications',
        icon: <RiContactsLine />,
      },
      {
        link: 'News',
        name: 'Exclusive News',
        icon: <RiContactsLine />,
      }],
  },
  {
    title: 'Slider',
    links: [
      {
        link:"slider",
        name: 'View Slider',
        icon: <RiContactsLine />,
      },
      {
        link:"addslider",
        name: 'Add Slider',
        icon: <RiContactsLine />,
      }
    ],
  },
  {
    title: 'Setting',
    links: [
      {
        link: 'changesetting',
        name: 'Change Theme',
        icon: <RiContactsLine />,
      },
    ],
  }];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  }];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar3,
  }];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  }];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const allData = [
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale2",
    parentId: "123",
    campaignType: "Inapp",
    status: "Failed",
    channel: "iOS",
    action: ":"
  },
  {
    name: "Sale34",
    parentId: "45",
    campaignType: "Email",
    status: "sent",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  },
  {
    name: "Sale",
    parentId: "12",
    campaignType: "Push",
    status: "Failed",
    channel: "android",
    action: ":"
  }
];
