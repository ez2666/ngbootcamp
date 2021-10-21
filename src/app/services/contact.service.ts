import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact } from "../models/contact";

const CONTACT_URL: string = "/api/contacts";
@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(CONTACT_URL);
    }

    getContact(id: string): Observable<Contact> {
        return this.http.get<Contact>(CONTACT_URL + "/" + id);
    }

    addContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(CONTACT_URL, contact, this.httpOptions);
    }

    updateContact(contact: Contact): Observable<any> {
        return this.http.put(CONTACT_URL, contact, this.httpOptions);
    }

    deleteContact(id: number): Observable<any> {
        return this.http.delete(CONTACT_URL + "/" + id);
    }
}