import { Routes } from "@angular/router";

export const appRouting: Routes = [
  {
    path: 'posts',
    loadComponent: () =>
      import('../components/post/post-list/post-list.component')
        .then((m) => m.PostListComponent),
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('../components/post/post-detail/post-detail.component')
                .then((m) => m.PostDetailComponent),
          },
        ],
  },
  {
    path: 'accordion',
    loadComponent: () =>
      import('../components/accordion/accordion.component')
        .then((m) => m.AccordionComponent),
  }
]
