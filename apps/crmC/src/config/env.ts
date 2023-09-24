import { getEnv } from "../utils/env";

export const env = {
  OAUTH_DOMAIN: getEnv('OAUTH_DOMAIN'),
  OAUTH_ID: getEnv('OAUTH_ID'),
  HASURA_GRAPHQL_URL: getEnv('HASURA_GRAPHQL_URL'),
  IS_AUTH_DISABLED: getEnv(
    'IS_AUTH_DISABLED', 
    {
      isRequired: false
    }
  ),
  IS_MSW_ON: getEnv(
    'IS_MSW_ON',
    {
      isRequired: false
    }
  )
}

