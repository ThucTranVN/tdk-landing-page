const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/product/penguinpuzzle/privacy",
    exact: true,
    component: "Privacy",
  },
  {
    path: "/product/penguinpuzzle/termandcondition",
    exact: true,
    component: "TermsAndConditions",
  },
  {
    path: "/product/penguinpuzzle",
    exact: true,
    component: "PenguinPuzzle",
  },
  {
    path: "/product",
    exact: true,
    component: "Product",
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
