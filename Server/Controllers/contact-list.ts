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
    //res.render('index', {title: 'Update Contact', page: 'update', displayName: UserDisplayName(req)});
        
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    //res.render('index', {title: 'Update Contact', page: 'update', displayName: UserDisplayName(req)});
        
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{    
    //res.render('index', {title: 'Update Contact', page: 'update', displayName: UserDisplayName(req)});
        
}

