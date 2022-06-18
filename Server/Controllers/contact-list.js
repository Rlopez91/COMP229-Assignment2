"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessUpdatePage = exports.DisplayUpdateContact = exports.DisplayContactList = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayContactList(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'contact-list', bcontacts: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactList = DisplayContactList;
function DisplayUpdateContact(req, res, next) {
    res.render('index', { title: 'Update Contact', page: 'update', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayUpdateContact = DisplayUpdateContact;
function ProcessUpdatePage(req, res, next) {
    let newContact = new contacts_1.default({
        "Name": req.body.Name,
        "Number": req.body.Number,
        "Email": req.body.Email
    });
    contacts_1.default.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contact-list');
        }
    });
}
exports.ProcessUpdatePage = ProcessUpdatePage;
//# sourceMappingURL=contact-list.js.map