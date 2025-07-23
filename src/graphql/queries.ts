/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listEmails = /* GraphQL */ `query ListEmails($emailId: String!, $limit: Int, $nextToken: String) {
  listEmails(emailId: $emailId, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      messageId
      from
      fromName
      to
      subject
      direction
      entity
      date
      plainBody
      htmlBody
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmailsQueryVariables,
  APITypes.ListEmailsQuery
>;
export const getEmail = /* GraphQL */ `query GetEmail($emailId: String!, $messageId: String!) {
  getEmail(emailId: $emailId, messageId: $messageId) {
    userId
    messageId
    from
    fromName
    to
    subject
    direction
    entity
    date
    plainBody
    htmlBody
    attachments {
      filename
      s3_key
      __typename
    }
    aiInsights {
      summary
      category
      sentiment
      is_urgent
      keyDates
      amounts
      action_items
      entities
      summaryAudioUrl
      links
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEmailQueryVariables, APITypes.GetEmailQuery>;
export const listEmailsByCategory = /* GraphQL */ `query ListEmailsByCategory($input: ListByCategoryInput!) {
  listEmailsByCategory(input: $input) {
    items {
      userId
      messageId
      from
      fromName
      to
      subject
      direction
      entity
      date
      plainBody
      htmlBody
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmailsByCategoryQueryVariables,
  APITypes.ListEmailsByCategoryQuery
>;
export const listEmailsBySentiment = /* GraphQL */ `query ListEmailsBySentiment($input: ListBySentimentInput!) {
  listEmailsBySentiment(input: $input) {
    items {
      userId
      messageId
      from
      fromName
      to
      subject
      direction
      entity
      date
      plainBody
      htmlBody
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmailsBySentimentQueryVariables,
  APITypes.ListEmailsBySentimentQuery
>;
export const getUser = /* GraphQL */ `query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    id
    email
    userId
    firstName
    lastName
    createdAt
    updatedAt
    lastLogin
    status
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
