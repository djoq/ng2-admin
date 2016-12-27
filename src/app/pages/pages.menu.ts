export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'overview',
        data: {
          menu: {
            title: 'Overview',
            icon: 'fa fa-newspaper-o',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'plots',
        data: {
          menu: {
            title: 'Traffic',
            icon: 'fa fa-line-chart',
            selected: true,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];
