import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
      resources.userPoolClientWeb.generateSecret = false,
      resources.userPoolClientWeb.clientName = "HelloWorld2"

}
