import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserRegistration } from '../entities/user-registration';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apprenticeUrl = environment.backUrl+'/api/apprentices/';
  public resLoginData: any;
  private token: string;

  /*
   * getToken() function to get token generated by server loopback from localStorage 
   * put in durign login process.
   */
  private getToken() {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  constructor(private http: HttpClient) { }

  /*
   * CRUD for mysql, pass by LoopBack api
   */
  getUsers(): Observable<UserRegistration[]> {
    this.getToken();
    return this.http.get<UserRegistration[]>(`${this.apprenticeUrl}?access_token=${this.token}`);
  }
  getUser(id: string): Observable<UserRegistration> {
    this.getToken();
    const url = `${this.apprenticeUrl}/${id}?access_token=${this.token}`;
    return this.http.get<UserRegistration>(url);
  }
  addUser(user: UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(`${this.apprenticeUrl}`, user);
  }
  deleteUser(user: UserRegistration | string): Observable<any> {
    this.getToken();
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.apprenticeUrl}/${id}?access_token=${this.token}`;

    return this.http.delete<UserRegistration>(url, httpOptions);
  }
  updateUser(user: UserRegistration): Observable<any> {
    this.getToken();
    return this.http.put(this.apprenticeUrl, user, httpOptions);
  }
  /*
   * Log in, log out, reset password
   */
  login(user: UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(`${this.apprenticeUrl}/login`, user);
  }
  logOut(): Observable<any> {
    this.getToken();
    return this.http.post(`${this.apprenticeUrl}/logout?access_token=${this.token}`, this.resLoginData)
      .pipe(tap(
        value => {
          localStorage.removeItem('token');
          this.token = null;
        }
      ));
  }
  resetPassword(sendRequestEmail) {
    return this.http.post(`${this.apprenticeUrl}/reset`, sendRequestEmail);
  }
  email(email) {
    console.log('---- email', email);
    return this.http.post('/email', email);
  }
}
