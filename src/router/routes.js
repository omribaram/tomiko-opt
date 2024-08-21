const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/timetable", component: () => import("pages/time-table.vue") },
    ],
  },
];

export default routes;
