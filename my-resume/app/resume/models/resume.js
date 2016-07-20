"use strict";
// Imports
var contact_1 = require('./contact');
var social_1 = require('./social');
// Resume Model
var Resume = (function () {
    // Construtor
    function Resume() {
        this.contacts = new contact_1.Contact();
        this.social = new social_1.Social();
    }
    return Resume;
}());
exports.Resume = Resume;
//# sourceMappingURL=resume.js.map