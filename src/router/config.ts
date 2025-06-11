const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/privacy",
    exact: true,
    component: "Privacy",
  },
  {
    path: "/resources",
    exact: true,
    component: "Resources",
  },
  {
    path: "/termandcondition",
    exact: true,
    component: "TermsAndConditions",
  },
  {
    path: "*",
    component: "NotFound",
  },
];

export default routes;
