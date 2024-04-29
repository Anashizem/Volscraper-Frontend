import { RouterLink } from "@angular/router";
import {
    faHome,
    faChartSimple,
    faUsers,
    faComment,
    faRightFromBracket,
  } from '@fortawesome/free-solid-svg-icons';

export const navbarData  = [
    {
        RouterLink : "/home",
        icon : faHome ,
        label : 'Home'
    },
    {
        RouterLink : "/dashboard-static",
        icon : faChartSimple ,
        label : 'Statistics'
    },
    {
        RouterLink : "/dashboard-users",
        icon :  faUsers ,
        label : 'User Mangement'
    },
    {
        RouterLink : "/dashboard-reviews",
        icon : faComment  ,
        label : 'Feedback'
    },
    {
        RouterLink : "/",
        icon : faRightFromBracket  ,
        label : 'Logout'
    }
];