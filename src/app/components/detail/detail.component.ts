import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../models/contact';

@Component({
    selector: 'contact-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
    contact?: Contact;

    constructor(private service: ContactService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.getContact();
    }

    getContact() {
        const id = Number(this.route.snapshot.paramMap.get('id')).toString();
        this.service.getContact(id)
            .subscribe(c => this.contact = c);
    }

    updateContact(contact: Contact) {
        this.service.updateContact(contact).subscribe(i => {
        });
    }

    goBack() {
        this.location.back();
    }
}