import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentifiationService } from '../../app/Services/authentifiation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentifiactionGuard implements CanActivate {
  constructor(private Auth:AuthentifiationService)
  {

  }
  canActivate() {
    if(localStorage.getItem('token'))
    {
      return true;
     
    }
    else{
      return false;
    }
  }
  
}
