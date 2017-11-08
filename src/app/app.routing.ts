import { RouterModule, Routes } from '@angular/router';
import { JobsListComponent } from "./jobs-list.component";
import { JobsCreateComponent } from "./jobs-create.component";
import { JobsEditComponent } from "./jobs-edit.component";

const routes:Routes = [
    { path:'', component: JobsListComponent},
    { path:'jobs-create', component: JobsCreateComponent},
    // ta sciezka bedzie oczekiwala parametru o nazwie "id"
    { path:'jobs-edit/:id', component: JobsEditComponent },

]
export const Routing = RouterModule.forRoot(routes)