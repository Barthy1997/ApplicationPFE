import { AuthentifiactionGuard } from './Authentification/authentifiaction.guard';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {AgGridModule} from 'ag-grid-angular';
import {MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import{GoogleMapsModule } from '@angular/google-maps'










import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ConnectionComponent } from './Authentification/connection/connection.component';
import { RegisterClientComponent } from './Authentification/register-client/register-client.component';
import { RegisterCommercialComponent } from './Authentification/register-commercial/register-commercial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionCompteComponent } from './ModuleGestion/gestion-compte/gestion-compte.component';
//import { RecherchePipe } from './Pipe/recherche.pipe';
import { ListePipe } from './Pipe/liste.pipe';
import { GestionCommercialComponent } from './ModuleGestion/gestion-commercial/gestion-commercial.component';
import { CamionnetteComponent } from './ModuleGestion/camionnette/camionnette.component';
import { TourneComponent } from './ModuleGestion/tourne/tourne.component';
import { ObjectifComponent } from './ModuleGestion/objectif/objectif.component';
import { RecouvrementComponent } from './ModuleGestion/recouvrement/recouvrement.component';
import { GestionArticleComponent } from './ModuleGestion/gestion-article/gestion-article.component';
import { CataloguePipe } from './Pipe/catalogue.pipe';
import { ZoneComponent } from './ModuleGestion/zone/zone.component';
import { GestionCommandeArticleComponent } from './ModuleGestion/gestion-commande-article/gestion-commande-article.component';
import { PanierComponent } from './ModuleGestion/panier/panier.component';
import { ClientComponent } from './ModuleGestion/client/client.component';
import { UpdateClientComponent } from './ModuleGestion/update-client/update-client.component';
import { ProfilComponent } from './ModuleGestion/profil/profil.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { CurrencyPipe } from '@angular/common';
import { AjoutUserComponent } from './ModuleGestion/ajout-user/ajout-user.component';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import { ClientPipe } from './Pipe/client.pipe';
import { UpdateCompteComponent } from './ModuleGestion/update-compte/update-compte.component';
import { UpdateProfilComponent } from './ModuleGestion/update-profil/update-profil.component';
import { StatComponent } from './ModuleGestion/stat/stat.component';
import { ForgotComponent } from './Authentification/forgot/forgot.component';
//import { CellCustom1Component } from './Authentification/cell-custom1/cell-custom1.component';
//import { CellCustomSpComponent } from './cell-custom-sp/cell-custom-sp.component';
import { DialogComponent } from './dialog/dialog.component';
import { StatistiqueComponent } from './ModuleGestion/statistique/statistique.component';
import { StatGeneralComponent } from './ModuleGestion/stat-general/stat-general.component';
import { StatsComponent } from './ModuleGestion/stats/stats.component';
import { StatLieuComponent } from './ModuleGestion/stat-lieu/stat-lieu.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GestionComponent,
    ConnectionComponent,
    RegisterClientComponent,
    RegisterCommercialComponent,
    GestionCompteComponent,
    CataloguePipe,
    ListePipe,
    GestionCommercialComponent,
    CamionnetteComponent,
    TourneComponent,
    ObjectifComponent,
    RecouvrementComponent,
    GestionArticleComponent,
    ZoneComponent,
    //GestionCamionnetteComponent,
    GestionCommandeArticleComponent,
    PanierComponent,
    ClientComponent,
    UpdateClientComponent,
    ProfilComponent,
    DialogExampleComponent,
    AjoutUserComponent,
    CellCustomComponent,
    ClientPipe,
    UpdateCompteComponent,
    UpdateProfilComponent,
    StatComponent,
    ForgotComponent,
    DialogComponent,
    StatistiqueComponent,
    StatGeneralComponent,
    StatsComponent,
    StatLieuComponent
  ],
  entryComponents:[DialogExampleComponent,DialogComponent],
  imports: [
    BrowserAnimationsModule,
    AgGridModule.withComponents([
     
    ]),
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSelectModule,
   // GoogleMapsModule,
    MatDialogModule,
    MatCardModule,
    MatTreeModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [AuthentifiactionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
