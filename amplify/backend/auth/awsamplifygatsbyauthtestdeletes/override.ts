import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
    resources.userPoolClientWeb.accessTokenValidity = 80;
    resources.userPoolClientWeb.idTokenValidity = 80;
    resources.userPoolClientWeb.tokenValidityUnits = {
        "accessToken": "minutes",
        "idToken":"minutes"
    };

}
