export interface Performance extends Document {
  departmentName: string;
  facaultyName: string;
  degreeDuringPeriod: string | null;
  msgCondition: string;
  lastMessage: string;
  lastMessageTime: string;
  userWhoAppliedForm: string | null;
  academicAppraisel: Appraisal[];
  publication: PublicationAndJournals;
  programsAttended: ProgramAttended[];
  progamsOrganized: ProgramsOrganized[];
  sponseredReasearch: SponseredReasearch[];
  consultancyServices: ConsultancyServices[];
  intelectualPropertyRights: IntelectualPropertyRights;
  examinationDuties: ExaminationDuties[];
  activities: Activities[];
  responsibilities: Responsibility[];
  achievement?: string[];
  year: string;
  grade: "OutStanding" | "Excellent" | "VeryGood" | "Satisfactory" | "Average";
}

export interface Responsibility extends Document {
  natureOfWork: string;
  level: "Department" | "Institute";
}
export interface Activities extends Document {
  name: string;
  duration: string;
  type: "Co-curricular" | "Extra-curricular";
}
export interface ExaminationDuties extends Document {
  dutyType:
    | "Exam Related"
    | "Evaluation of Answer Scripts"
    | "Question Paper Setting";
  assignedBy: "University" | "Institute";
}
export interface SponseredReasearch extends Document {
  scheme: string;
  agency: string;
  status: "Awarded" | "Submitted";
  dateOfSubmissionOrAwarded: Date;
  grantRecieved: string;
}
export interface IntelectualPropertyRights extends Document {
  patents: Patents[];
  copyRights: Patents[];
  tradeMarks: Patents[];
}
export interface ProgramsOrganized extends Document {
  title: string;
  duration: string;
}

export interface Patents extends Document {
  status: "Applied" | "Granted";
  dateOfApplication: Date;
  commercialized: boolean;
}
export interface ConsultancyServices extends Document {
  natureOfWork: string;
  agency: string;
  duration: string;
  amountRecieved: string;
}

export interface Appraisal extends Document {
  teachingAndLearning: AverageResult[];
  studentFeedback: StudentFeedback;
  peerFeedback: PeerFeedback;
  classEngagement: ClassEngagement;
}
export interface ClassEngagement extends Document {
  classEngagement: number;
}

export interface BooksArticleChapters extends Document {
  bookDetail: {
    title: string;
    editor: string;
    publisher: string;
  };
  articleDetail: {
    titleOfArticle: string;
    pageNo: number;
  };
  issnOrIssbnNo: string;
  detailOfCoAuthors: string;
  publishingMonthAndYear: string;
}
export interface PublicationAndJournals extends Document {
  paperTitle: string;
  level: string;
  name: string;
  issnOrIssbnNo: string;
  mainAuthor: boolean;
  indexing: "SCI" | "Scopus" | "UGC care" | "Peer reviewed" | null;
}
export interface Conference extends Document {
  conferenceTitle: string;
  level: string;
  name: string;
  issnOrIssbnNo: string;
  mainAuthor: boolean;
  indexing: "SCI" | "Scopus" | "UGC care" | "Peer reviewed" | null;
}
export interface AverageResult extends Document {
  nameOfSubject: string;
  academicYear: "Current" | "Previous";
  term: "I" | "II";
  level: "UG" | "PG";
  courseHead: "TH" | "PR" | "T";
  hoursAlloted: number;
  classConducted: number;
  result: number;
}
export interface StudentFeedback extends Document {
  studentFeedback: {
    termIIPreviousYear: number;
    termICurrentYear: number;
  };
}
export interface PeerFeedback extends Document {
  peerFeedback: {
    termIIPreviousYear: number;
    termICurrentYear: number;
  };
}
export interface Publications extends Document {
  journals: PublicationAndJournals;
  conference: Conference;
  booksArticleChapters: BooksArticleChapters;
}

export interface ProgramAttended extends Document {
  title: string;
  duration: string;
  place: string;
  organizer: string;
}
