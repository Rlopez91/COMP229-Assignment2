"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessUpdatePage = exports.DisplayAddPage = exports.DisplayUpdatePage = exports.DisplayContactList = void 0;
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
function DisplayUpdatePage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, function (err, contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update', page: 'update', bcontacts: contactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', bcontacts: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessUpdatePage(req, res, next) {
}
exports.ProcessUpdatePage = ProcessUpdatePage;
function ProcessAddPage(req, res, next) {
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact-list.js.map