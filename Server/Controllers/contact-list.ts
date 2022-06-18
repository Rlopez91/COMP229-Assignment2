import express from 'express';

import Contact from '../Models/contacts';
import { UserDisplayName } from '../Util';

export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction): void
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
export function DisplayUpdatePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    let id = req.params.id;
    Contact.findById(id, {},{}, function(err, contactToEdit){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Update', page: 'update', bcontacts: contactToEdit, displayName: UserDisplayName(req)});
    })   
        
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    res.render('index', {title: 'Add', page: 'update', bcontacts: '', displayName: UserDisplayName(req)});
        
}

export function ProcessUpdatePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    let id = req.params.id;
    //instantiate a new contact to edit
    let updateContact = new Contact({
        "_id": id,
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail,
    });

    //update the info in the database
    Contact.updateOne({_id: id}, updateContact, function(err: ErrorCallback){
        if(err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    })                 
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    //instantiate a new contact to add
    let newContact = new Contact({
        "Name": req.body.contactName,
        "Number": req.body.contactNumber,
        "Email": req.body.contactEmail
    });

    //insert the new contact object into the database
    Contact.create(newContact, function(err: ErrorCallback){
        if(err){
            console.error(err);
            res.end(err);
        }
        //refresh the contact list
        res.redirect('/contact-list');
    })
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    //res.render('index', {title: 'Update Contact', page: 'update', displayName: UserDisplayName(req)});
        
}

