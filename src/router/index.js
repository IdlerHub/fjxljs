import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Manage from "../views/Manage";
import News from "../views/News";
import SuccessDemo from "../views/SuccessDemo";
import Column from "../views/Column";
import Technology from "../views/Technology";
import ContactUs from "../views/ContactUs";
import NewsContent from "../views/NewsContent";
import ColumnDetail from "../views/ColumnDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/manage",
    name: "Manage",
    component: Manage,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/successDemo",
    name: "SuccessDemo",
    component: SuccessDemo,
  },
  {
    path: "/column",
    name: "Column",
    component: Column,
  },
  {
    path: "/technology",
    name: "Technology",
    component: Technology,
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/newsDetail",
    name: "NewsContent",
    component: NewsContent,
  },
  {
    path: "/columnDetail",
    name: "ColumnDetail",
    component: ColumnDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
