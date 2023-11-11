import { Routes } from "@angular/router";
import { PostService } from "../services/post.service";

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
    providers: [PostService]
  },
  {
    path: 'accordion',
    loadComponent: () =>
      import('../components/accordion/accordion.component')
        .then((m) => m.AccordionComponent),
  }
]

