"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksArticleChapters = exports.conference = exports.publicationAndJournals = void 0;
const mongoose_1 = require("mongoose");
exports.publicationAndJournals = new mongoose_1.Schema({
    paperTitle: { type: String, required: true },
    level: {
        type: String,
        required: true,
        enum: ["Local", "State", "Nactional", "International"],
    },
    name: {
        type: String,
        required: true,
    },
    issnOrIssbnNo: {
        type: String,
        required: true,
    },
    mainAuthor: {
        type: Boolean,
        required: true,
    },
    indexing: {
        type: String,
        required: true,
        enum: ["SCI", "Scopus", "UGC care", "Peer reviewed", null],
        default: null,
    },
});
exports.conference = new mongoose_1.Schema({
    conferenceTitle: { type: String, required: true },
    level: {
        type: String,
        required: true,
        enum: ["Local", "State", "Nactional", "International"],
    },
    name: {
        type: String,
        required: true,
    },
    issnOrIssbnNo: {
        type: String,
        required: true,
    },
    mainAuthor: {
        type: Boolean,
        required: true,
    },
    indexing: {
        type: String,
        required: true,
        enum: ["SCI", "Scopus", "UGC care", "Peer reviewed", null],
        default: null,
    },
});
exports.booksArticleChapters = new mongoose_1.Schema({
    bookDetail: {
        title: {
            type: String,
            required: true,
        },
        editor: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
    },
    articleDetail: {
        titleOfArticle: {
            type: String,
            required: true,
        },
        pageNo: {
            type: Number,
            required: true,
        },
    },
    issnOrIssbnNo: {
        type: String,
        required: true,
    },
    detailOfCoAuthors: {
        type: String,
        required: true,
    },
    publishingMonthAndYear: {
        type: String,
        required: true,
    },
});
