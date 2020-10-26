import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "page2",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },

  {
    path: "page1",
    loadChildren: () =>
      import("./page1/page1.module").then((m) => m.Page1PageModule),
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./menu/menu.module").then((m) => m.MenuPageModule),
  },
  {
    path: "page2",
    loadChildren: () =>
      import("./page2/page2.module").then((m) => m.Page2PageModule),
  },
  {
    path: "modal-carro",
    loadChildren: () =>
      import("./modal-carro/modal-carro.module").then(
        (m) => m.ModalCarroPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
