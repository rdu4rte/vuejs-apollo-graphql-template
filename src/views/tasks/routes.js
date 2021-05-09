export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./pages/Dashboard'),
    props: true,
    children: [
      {
        path: '/dashboard/tasks',
        name: 'Tasks',
        component: () => import('./components/Tasks')
      },
      {
        path: '/dashboard/done',
        name: 'DoneTasks',
        component: () => import('./components/DoneTasks')
      }
    ]
  }
]
