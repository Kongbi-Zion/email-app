/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input)
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const markAsRead = /* GraphQL */ `mutation MarkAsRead($emailId: ID!) {
  markAsRead(emailId: $emailId) {
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
` as GeneratedMutation<
  APITypes.MarkAsReadMutationVariables,
  APITypes.MarkAsReadMutation
>;
export const sendEmail = /* GraphQL */ `mutation SendEmail($input: SendEmailInput!) {
  sendEmail(input: $input)
}
` as GeneratedMutation<
  APITypes.SendEmailMutationVariables,
  APITypes.SendEmailMutation
>;
export const deleteEmail = /* GraphQL */ `mutation DeleteEmail($emailId: ID!) {
  deleteEmail(emailId: $emailId) {
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
` as GeneratedMutation<
  APITypes.DeleteEmailMutationVariables,
  APITypes.DeleteEmailMutation
>;
export const notifyNewEmail = /* GraphQL */ `mutation NotifyNewEmail($email: EmailInput!) {
  notifyNewEmail(email: $email) {
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
` as GeneratedMutation<
  APITypes.NotifyNewEmailMutationVariables,
  APITypes.NotifyNewEmailMutation
>;
