import { Schema } from "mongoose";
import { Publications } from "../../../../utils/interface";
import {
  booksArticleChapters,
  conference,
  publicationAndJournals,
} from "./publication-detail";

export const publication: Schema<Publications> = new Schema<Publications>({
  journals: [publicationAndJournals],
  conference: [conference],
  booksArticleChapters: [booksArticleChapters],
});
