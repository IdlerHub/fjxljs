const HomeNavFilter = name => {
  switch(name) {
    case 'Home':
      return 0
    case 'Detail':
      return 1;
    case 'News':
      return 2;
    case 'SuccessDemo':
      return 3;
    case 'ContactUs':
      return 4;
    default:
    return 9999;
  }
  // 详情
  // if (currentPath1 === "detail") {
  //   return 2;
  // }
  // if (currentPath1 === "news") {
  //   return 3;
  // }
  // if (currentPath1 === "policy_building") {
  //   return 4;
  // }
  // if (currentPath1 === "old_age_education") {
  //   return 5;
  // }
  // if (currentPath1 === "special_report") {
  //   return 6;
  // }
  // if (currentPath1 === "information_open") {
  //   return 7;
  // }
  // if (currentPath1 === "online_service") {
  //   return 8;
  // }
};



export default {
  HomeNavFilter,
};