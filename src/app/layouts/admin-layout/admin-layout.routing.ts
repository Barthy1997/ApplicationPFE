import { AuthentifiactionGuard } from './../../Authentification/authentifiaction.guard';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { GestionComponent } from 'app/pages/gestion/gestion.component';
import { ConnectionComponent } from 'app/Authentification/connection/connection.component';
import { RegisterClientComponent } from 'app/Authentification/register-client/register-client.component';
import { GestionCompteComponent } from 'app/ModuleGestion/gestion-compte/gestion-compte.component';
import { RegisterCommercialComponent } from 'app/Authentification/register-commercial/register-commercial.component';
import { GestionCommercialComponent } from 'app/ModuleGestion/gestion-commercial/gestion-commercial.component';
import { GestionArticleComponent } from 'app/ModuleGestion/gestion-article/gestion-article.component';
import { ObjectifComponent } from 'app/ModuleGestion/objectif/objectif.component';
import { RecouvrementComponent } from 'app/ModuleGestion/recouvrement/recouvrement.component';
import { CamionnetteComponent } from 'app/ModuleGestion/camionnette/camionnette.component';
import { TourneComponent } from 'app/ModuleGestion/tourne/tourne.component';

import { GestionCommandeArticleComponent } from 'app/ModuleGestion/gestion-commande-article/gestion-commande-article.component';
import { ClientComponent } from 'app/ModuleGestion/client/client.component';
import { UpdateClientComponent } from 'app/ModuleGestion/update-client/update-client.component';
import { ProfilComponent } from 'app/ModuleGestion/profil/profil.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'user',             component: UserComponent ,canActivate:[AuthentifiactionGuard]},
    { path: 'table',            component: TableComponent ,canActivate:[AuthentifiactionGuard]},
    { path: 'typography',       component: TypographyComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'icons',            component: IconsComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'Gestion',          component: GestionComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'maps',             component: MapsComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'notifications',    component: NotificationsComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'Profil',           component: ProfilComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'Compte',           component: GestionCompteComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'CompteCommercial', component: GestionCommercialComponent ,canActivate:[AuthentifiactionGuard]},
    { path: 'recouvrement',     component: RecouvrementComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'AjoutCamionnette', component: CamionnetteComponent ,canActivate:[AuthentifiactionGuard] },
    { path: 'Client',           component: ClientComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'Catalogue',        component: GestionArticleComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'Commande',         component: GestionCommandeArticleComponent,canActivate:[AuthentifiactionGuard] },
    { path: 'article',          component: GestionCommandeArticleComponent,canActivate:[AuthentifiactionGuard]},
    { path: 'Update/:id',       component: UpdateClientComponent ,canActivate:[AuthentifiactionGuard]},
];
