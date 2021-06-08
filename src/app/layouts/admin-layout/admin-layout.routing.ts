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
import { GestionCamionnetteComponent } from 'app/ModuleGestion/gestion-camionnette/gestion-camionnette.component';
import { GestionCommandeArticleComponent } from 'app/ModuleGestion/gestion-commande-article/gestion-commande-article.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'user',             component: UserComponent },
    { path: 'table',            component: TableComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'Gestion',          component: GestionComponent },
    { path: 'maps',             component: MapsComponent },
    { path: 'notifications',    component: NotificationsComponent },

    { path: 'objectifs',        component: ObjectifComponent },
    { path: 'Compte',           component: GestionCompteComponent },
    { path: 'CompteCommercial', component: GestionCommercialComponent },
    { path: 'recouvrement',     component: RecouvrementComponent },
    { path: 'camionnette',      component: GestionCamionnetteComponent },
    { path: 'AjoutCamionnette', component: CamionnetteComponent },
    { path: 'tourne',           component: TourneComponent },
    { path: 'Catalogue',        component: GestionArticleComponent },
    { path: 'inscripClient',    component: RegisterClientComponent },
    { path: 'article',          component: GestionCommandeArticleComponent},
    { path: 'inscripCommercial',component: RegisterCommercialComponent },
];
