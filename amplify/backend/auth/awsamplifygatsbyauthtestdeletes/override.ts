import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
    const myCustomAttribute = {
        attributeDataType: 'String',
        developerOnlyAttribute: false,
        mutable: true,
        name: 'my_custom_attribute',
        required: false,
      }
      resources.userPool.schema = [ 
        myCustomAttribute,
      ],
      resources.userPoolClientWeb.generateSecret = false,
      resources.userPoolClientWeb.clientName = "HelloWorld"

}
