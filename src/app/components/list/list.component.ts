import { Component, OnInit } from "@angular/core"
import { Contact } from "../../models/contact";
import { ContactService } from "../../services/contact.service";

@Component({
    selector: "contact-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
    contacts: Contact[] = [];

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts(): void {
        this.contactService.getContacts().subscribe(data => {
            this.contacts = data;
        });
    }

    updateContact(contact: Contact) {
        this.contactService.updateContact(contact);
    }

    add(name: string, phoneNumber: string): void {
        name = name.trim();
        phoneNumber = phoneNumber.trim();
        if (!name) { return; }
        this.contactService.addContact({ name, phoneNumber } as Contact)
            .subscribe(contact => {
                this.contacts.push(contact);
            });
    }

    delete(contact: Contact): void {
        this.contactService.deleteContact(contact.id).subscribe(() => {
            this.contacts = this.contacts.filter(c => c !== contact);
        });
    }
}