/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onNewEmail = /* GraphQL */ `subscription OnNewEmail {
  onNewEmail {
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
` as GeneratedSubscription<
  APITypes.OnNewEmailSubscriptionVariables,
  APITypes.OnNewEmailSubscription
>;
