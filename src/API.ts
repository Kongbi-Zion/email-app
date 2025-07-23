/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  email: string,
  firstName: string,
  lastName: string,
  status?: UserStatus | null,
};

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
  PENDING = "PENDING",
}


export type Email = {
  __typename: "Email",
  userId?: string | null,
  messageId?: string | null,
  from?: string | null,
  fromName?: string | null,
  to?: string | null,
  subject?: string | null,
  direction?: Direction | null,
  entity?: ENTITY | null,
  date?: string | null,
  plainBody?: string | null,
  htmlBody?: string | null,
  attachments?:  Array<Attachment | null > | null,
  aiInsights?: AIInsight | null,
};

export enum Direction {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}


export enum ENTITY {
  USER = "USER",
  EMAIL = "EMAIL",
}


export type Attachment = {
  __typename: "Attachment",
  filename: string,
  s3_key: string,
};

export type AIInsight = {
  __typename: "AIInsight",
  summary?: string | null,
  category?: string | null,
  sentiment?: string | null,
  is_urgent?: boolean | null,
  keyDates?: Array< string | null > | null,
  amounts?: Array< string | null > | null,
  action_items?: Array< string | null > | null,
  entities?: Array< string | null > | null,
  summaryAudioUrl?: string | null,
  links?: Array< string | null > | null,
};

export type SendEmailInput = {
  userId: string,
  from: string,
  to: Array< string >,
  cc?: Array< string > | null,
  bcc?: Array< string > | null,
  subject?: string | null,
  plainBody?: string | null,
  htmlBody?: string | null,
  attachments?: Array< AttachmentInput | null > | null,
};

export type AttachmentInput = {
  filename: string,
  s3_key: string,
};

export type EmailInput = {
  userId?: string | null,
  messageId?: string | null,
  from?: string | null,
  fromName?: string | null,
  to?: string | null,
  subject?: string | null,
  direction?: Direction | null,
  entity?: ENTITY | null,
  date?: string | null,
  plainBody?: string | null,
  htmlBody?: string | null,
  attachments?: Array< AttachmentInput | null > | null,
  aiInsights?: AIInsightInput | null,
};

export type AIInsightInput = {
  summary?: string | null,
  category?: string | null,
  sentiment?: string | null,
  is_urgent?: boolean | null,
  keyDates?: Array< string | null > | null,
  amounts?: Array< string | null > | null,
  action_items?: Array< string | null > | null,
  entities?: Array< string | null > | null,
  links?: Array< string | null > | null,
};

export type EmailConnection = {
  __typename: "EmailConnection",
  items:  Array<Email >,
  nextToken?: string | null,
};

export type ListByCategoryInput = {
  emailId: string,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBySentimentInput = {
  limit?: number | null,
  nextToken?: string | null,
  emailId: string,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  userId: string,
  firstName: string,
  lastName: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  lastLogin?: string | null,
  status?: UserStatus | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser: string,
};

export type MarkAsReadMutationVariables = {
  emailId: string,
};

export type MarkAsReadMutation = {
  markAsRead?:  {
    __typename: "Email",
    userId?: string | null,
    messageId?: string | null,
    from?: string | null,
    fromName?: string | null,
    to?: string | null,
    subject?: string | null,
    direction?: Direction | null,
    entity?: ENTITY | null,
    date?: string | null,
    plainBody?: string | null,
    htmlBody?: string | null,
    attachments?:  Array< {
      __typename: "Attachment",
      filename: string,
      s3_key: string,
    } | null > | null,
    aiInsights?:  {
      __typename: "AIInsight",
      summary?: string | null,
      category?: string | null,
      sentiment?: string | null,
      is_urgent?: boolean | null,
      keyDates?: Array< string | null > | null,
      amounts?: Array< string | null > | null,
      action_items?: Array< string | null > | null,
      entities?: Array< string | null > | null,
      summaryAudioUrl?: string | null,
      links?: Array< string | null > | null,
    } | null,
  } | null,
};

export type SendEmailMutationVariables = {
  input: SendEmailInput,
};

export type SendEmailMutation = {
  sendEmail: boolean,
};

export type DeleteEmailMutationVariables = {
  emailId: string,
};

export type DeleteEmailMutation = {
  deleteEmail?:  {
    __typename: "Email",
    userId?: string | null,
    messageId?: string | null,
    from?: string | null,
    fromName?: string | null,
    to?: string | null,
    subject?: string | null,
    direction?: Direction | null,
    entity?: ENTITY | null,
    date?: string | null,
    plainBody?: string | null,
    htmlBody?: string | null,
    attachments?:  Array< {
      __typename: "Attachment",
      filename: string,
      s3_key: string,
    } | null > | null,
    aiInsights?:  {
      __typename: "AIInsight",
      summary?: string | null,
      category?: string | null,
      sentiment?: string | null,
      is_urgent?: boolean | null,
      keyDates?: Array< string | null > | null,
      amounts?: Array< string | null > | null,
      action_items?: Array< string | null > | null,
      entities?: Array< string | null > | null,
      summaryAudioUrl?: string | null,
      links?: Array< string | null > | null,
    } | null,
  } | null,
};

export type NotifyNewEmailMutationVariables = {
  email: EmailInput,
};

export type NotifyNewEmailMutation = {
  notifyNewEmail?:  {
    __typename: "Email",
    userId?: string | null,
    messageId?: string | null,
    from?: string | null,
    fromName?: string | null,
    to?: string | null,
    subject?: string | null,
    direction?: Direction | null,
    entity?: ENTITY | null,
    date?: string | null,
    plainBody?: string | null,
    htmlBody?: string | null,
    attachments?:  Array< {
      __typename: "Attachment",
      filename: string,
      s3_key: string,
    } | null > | null,
    aiInsights?:  {
      __typename: "AIInsight",
      summary?: string | null,
      category?: string | null,
      sentiment?: string | null,
      is_urgent?: boolean | null,
      keyDates?: Array< string | null > | null,
      amounts?: Array< string | null > | null,
      action_items?: Array< string | null > | null,
      entities?: Array< string | null > | null,
      summaryAudioUrl?: string | null,
      links?: Array< string | null > | null,
    } | null,
  } | null,
};

export type ListEmailsQueryVariables = {
  emailId: string,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmailsQuery = {
  listEmails?:  {
    __typename: "EmailConnection",
    items:  Array< {
      __typename: "Email",
      userId?: string | null,
      messageId?: string | null,
      from?: string | null,
      fromName?: string | null,
      to?: string | null,
      subject?: string | null,
      direction?: Direction | null,
      entity?: ENTITY | null,
      date?: string | null,
      plainBody?: string | null,
      htmlBody?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetEmailQueryVariables = {
  emailId: string,
  messageId: string,
};

export type GetEmailQuery = {
  getEmail?:  {
    __typename: "Email",
    userId?: string | null,
    messageId?: string | null,
    from?: string | null,
    fromName?: string | null,
    to?: string | null,
    subject?: string | null,
    direction?: Direction | null,
    entity?: ENTITY | null,
    date?: string | null,
    plainBody?: string | null,
    htmlBody?: string | null,
    attachments?:  Array< {
      __typename: "Attachment",
      filename: string,
      s3_key: string,
    } | null > | null,
    aiInsights?:  {
      __typename: "AIInsight",
      summary?: string | null,
      category?: string | null,
      sentiment?: string | null,
      is_urgent?: boolean | null,
      keyDates?: Array< string | null > | null,
      amounts?: Array< string | null > | null,
      action_items?: Array< string | null > | null,
      entities?: Array< string | null > | null,
      summaryAudioUrl?: string | null,
      links?: Array< string | null > | null,
    } | null,
  } | null,
};

export type ListEmailsByCategoryQueryVariables = {
  input: ListByCategoryInput,
};

export type ListEmailsByCategoryQuery = {
  listEmailsByCategory?:  {
    __typename: "EmailConnection",
    items:  Array< {
      __typename: "Email",
      userId?: string | null,
      messageId?: string | null,
      from?: string | null,
      fromName?: string | null,
      to?: string | null,
      subject?: string | null,
      direction?: Direction | null,
      entity?: ENTITY | null,
      date?: string | null,
      plainBody?: string | null,
      htmlBody?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type ListEmailsBySentimentQueryVariables = {
  input: ListBySentimentInput,
};

export type ListEmailsBySentimentQuery = {
  listEmailsBySentiment?:  {
    __typename: "EmailConnection",
    items:  Array< {
      __typename: "Email",
      userId?: string | null,
      messageId?: string | null,
      from?: string | null,
      fromName?: string | null,
      to?: string | null,
      subject?: string | null,
      direction?: Direction | null,
      entity?: ENTITY | null,
      date?: string | null,
      plainBody?: string | null,
      htmlBody?: string | null,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  userId: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    userId: string,
    firstName: string,
    lastName: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    lastLogin?: string | null,
    status?: UserStatus | null,
  } | null,
};

export type OnNewEmailSubscriptionVariables = {
};

export type OnNewEmailSubscription = {
  onNewEmail?:  {
    __typename: "Email",
    userId?: string | null,
    messageId?: string | null,
    from?: string | null,
    fromName?: string | null,
    to?: string | null,
    subject?: string | null,
    direction?: Direction | null,
    entity?: ENTITY | null,
    date?: string | null,
    plainBody?: string | null,
    htmlBody?: string | null,
    attachments?:  Array< {
      __typename: "Attachment",
      filename: string,
      s3_key: string,
    } | null > | null,
    aiInsights?:  {
      __typename: "AIInsight",
      summary?: string | null,
      category?: string | null,
      sentiment?: string | null,
      is_urgent?: boolean | null,
      keyDates?: Array< string | null > | null,
      amounts?: Array< string | null > | null,
      action_items?: Array< string | null > | null,
      entities?: Array< string | null > | null,
      summaryAudioUrl?: string | null,
      links?: Array< string | null > | null,
    } | null,
  } | null,
};
