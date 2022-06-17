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