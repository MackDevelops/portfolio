// This is just an example,
// so you can safely delete all default props below

import date from './date';

export default {
  ...date,
  "lbl_hi": "I'm $[name].",
  "lbl_aFrontEndDeveloper":"A Front-end Developer.",
  "lbl_imAlsoText":"I also meddle with back-end development and a detail-oriented person when creating engaging UI and seamless user experience.",

  navbar:{
    lbl_lightMode: "Light Mode",
    lbl_darkMode: "Dark Mode"
  },
  home:{
    lbl_skills: 'Skills'
  }
};
