const HomeNavFilter = (name) => {
  switch (name) {
    case "Home":
      return 0;
    case "Detail":
      return 1;
    case "Manage":
      return 2;
    case "News":
    case "NewsContent":
      return 3;
    case "SuccessDemo":
      return 4;
    case "Column":
    case "ColumnDetail":
      return 5;
    case "Technology":
      return 6;
    case "ContactUs":
      return 7;
    default:
      return 0;
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
