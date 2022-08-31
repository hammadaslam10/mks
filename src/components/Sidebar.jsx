/* eslint-disable indent */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
// import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { RiAdminFill } from 'react-icons/ri';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import {MdOutlineGolfCourse ,MdNotificationsActive,MdUnsubscribe} from 'react-icons/md'
import {GiHorseHead,GiTatteredBanner} from 'react-icons/gi'
import {AiFillCrown,AiFillSetting,AiFillDatabase} from 'react-icons/ai'
import {FaUserCheck ,FaMedal} from 'react-icons/fa'
import {ImStatsBars} from 'react-icons/im'

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  // eslint-disable-next-line no-unused-vars
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>MKS Racing</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <Navigation
            // you can use your own router's api to get pathname
            activeItemId=""
            onSelect={({ itemId }) => {
              // maybe push to the route
             navigate(itemId);
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/home',
                elemBefore: () => <RiAdminFill/>,
                // you can use your own custom Icon component as well
                // icon is optional
              },
              {
                title: 'Races',
                itemId: '/racecard',
                elemBefore: () => <BsCreditCard2FrontFill/>,
                subNav: [
                  // {
                  //   title: 'All Races',
                  //   itemId: '/racecard/all',
                  // },
                  {
                    title: 'Create Race',
                    itemId: '/racecard/create',
                  },
                ],
              },
              {
                title: 'Race Course',
                itemId: '/racecourse',
                elemBefore: () => <MdOutlineGolfCourse/>,
                subNav: [
                  // {
                  //   title: 'All Courses',
                  //   itemId: '/racecourse/all',
                  // },
                  {
                    title: 'Create Course',
                    itemId: '/racecourse/create',
                  },
                ],
              },
              {
                title: 'Matches',
                itemId: '/match',
                elemBefore: () => <GiHorseHead/>,
                subNav: [
                  {
                    title: 'Match Result',
                    itemId: '/matchresult/all',
                  },
                  {
                    title: 'Match Calander',
                    itemId: '/calendar',
                  },
                ],
              },
              {
                title: 'Sponsor',
                itemId: '/Sponsor',
                elemBefore: () => <AiFillCrown/>,

                subNav: [
                  // {
                  //   title: 'All Sponsors',
                  //   itemId: '/allponsor/all',
                  // },
                  {
                    title: 'Add Sponsor',
                    itemId: '/sponsor/create',
                  },
                ],
              },
              {
                title: 'Notifications',
                itemId: '/Notifications',
                elemBefore:() => <MdNotificationsActive/>,
                subNav: [
                  // {
                  //   title: 'All Notifications',
                  //   itemId: '/allponsor/all',
                  // },
                  {
                    title: 'Exclusive News',
                    itemId: '/News/create',
                  },
                ],
              },
              {
                title: 'Details Screen',
                itemId: '/detail',
                elemBefore:() => <AiFillDatabase/>,
                subNav: [
                  {
                    title: 'Horse Details',
                    itemId: '/horse/detail',
                  },
                  {
                    title: 'Owner Details',
                    itemId: '/ower/detail',
                  },
                  {
                    title: 'Owner Details',
                    itemId: '/ower/detail',
                  },
                  {
                    title: 'Trainer Details',
                    itemId: '/trainer/detail',
                  },
                  {
                    title: 'Jockey Details',
                    itemId: '/jockey/detail',
                  },
                ],
              },
              {
                title: 'Statistics ',
                itemId: '/statistics ',
                elemBefore:() => <ImStatsBars/>,
              },
              // {
              //   title: 'Competition ',
              //   itemId: '/competition ',
              //   elemBefore:() => <FaMedal/>,
              // },
              {
                title: 'Result ',
                itemId: '/result ',
                elemBefore:() => <GiTatteredBanner />,
              },
              {
                title: 'Users',
                itemId: '/user',
                elemBefore:() => <FaUserCheck/>,
              },
              {
                title: 'Subscriber',
                itemId: '/subscribe',
                elemBefore:() => <MdUnsubscribe/>,
              },
              {
                title: 'Theme Setting',
                itemId: '/changesetting',
                elemBefore:() => <AiFillSetting/>,
              },
            ]}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
