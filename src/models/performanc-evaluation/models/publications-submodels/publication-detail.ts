import { Schema } from "mongoose";
import {
  BooksArticleChapters,
  Conference,
  PublicationAndJournals,
} from "../../../../utils/interface";

export const publicationAndJournals: Schema<PublicationAndJournals> =
  new Schema<PublicationAndJournals>({
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
export const conference: Schema<Conference> = new Schema<Conference>({
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

export const booksArticleChapters: Schema<BooksArticleChapters> =
  new Schema<BooksArticleChapters>({
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
