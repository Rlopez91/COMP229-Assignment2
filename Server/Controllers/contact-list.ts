import express from 'express';

import Contact from '../Models/contacts';
import { UserDisplayName } from '../Util';

export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Contact.find(function(err, contactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contact List', page: 'contact-list', bcontacts: contactsCollection, displayName: UserDisplayName(req)});
    });
}

// Get route for displaying the update contact page
export function DisplayUpdateContact(req: express.Request, res: express.Response, next: express.NextFunction)
{    
    res.render('index', {title: 'Update Contact', page: 'update', displayName: UserDisplayName(req)});
        
}

//process Update contact page
export function ProcessUpdatePage(req: express.Request, res: express.Response, next: express.NextFunction)
{    
    let newContact = new Contact({
        "Name": req.body.Name,
        "Number": req.body.Number,
        "Email": req.body.Email
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    })
        
}

