  // We will use this 
  import React from 'react'
  import AppsIcon from '@mui/icons-material/Apps';
  import StarIcon from '@mui/icons-material/Star';
  import TimelineIcon from '@mui/icons-material/Timeline';
  import MovieIcon from '@mui/icons-material/Movie';
  import ManageSearchIcon from '@mui/icons-material/ManageSearch';
  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

  export const  SidebarData = [
    {
        title: "Streaming Services",
        icon: <AppsIcon />,
        icon_dropdown: <KeyboardArrowDownIcon />
        //dropdownitems:
    },

    {
        title: "Genre",
        icon: <ManageSearchIcon />,
        icon_dropdown: <KeyboardArrowDownIcon />
        //dropdownitems:
    },

    {
        title: "Ratings",
        icon: <StarIcon />,
        icon_dropdown: <KeyboardArrowDownIcon />
        //dropdownitems:
    },

    {
        title: "Release Time",
        icon: <TimelineIcon />,
        icon_dropdown: <KeyboardArrowDownIcon />
        //dropdownitems:
    },

    {
        title: "Movies/Shows",
        icon: <MovieIcon />,
        icon_dropdown: <KeyboardArrowDownIcon />
        //dropdownitems:
    }
  ]
  