import express from 'express';

import Movie from '../Models/movie';
import { UserDisplayName } from '../Util';

export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, contactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contact List', page: 'contact-list', bcontacts: contactsCollection, displayName: UserDisplayName(req)});
    });
}