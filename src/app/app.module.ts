import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
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
import { RecherchePipe } from './Pipe/recherche.pipe';
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


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GestionComponent,
    ConnectionComponent,
    RegisterClientComponent,
    RegisterCommercialComponent,
    GestionCompteComponent,
    RecherchePipe,
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
    DialogExampleComponent
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
    //GMapModule,
    MatSliderModule,
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
