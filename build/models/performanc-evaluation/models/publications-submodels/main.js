"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publication = void 0;
const mongoose_1 = require("mongoose");
const publication_detail_1 = require("./publication-detail");
exports.publication = new mongoose_1.Schema({
    journals: [publication_detail_1.publicationAndJournals],
    conference: [publication_detail_1.conference],
    booksArticleChapters: [publication_detail_1.booksArticleChapters],
});
