# CDK v1 Serverless Get Started Project

_Infrastructure as code framework used_: AWS CDK
_AWS Services used_: AWS Lambda, DynamoDB, API Gateway

## Summary of the demo

In this demo you will see:

- How to create a simple serverless application with AWS CDK v1 with AWS Lambda, DynamoDB and API Gateway

This demo is part of a video posted in FooBar Serverless channel. You can check the video to see the whole demo.

Important: this application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the AWS Pricing page for details. You are responsible for any AWS costs incurred. No warranty is implied in this example.

## Requirements

- AWS CLI already configured with Administrator permission
- AWS CDK - v1
- NodeJS 14.x installed
- CDK bootstrapped in your account

## Deploy this demo

Deploy the project to the cloud:

```
npm run build
cdk deploy
```

When asked about functions that may not have authorization defined, answer (y)es. The access to those functions will be open to anyone, so keep the app deployed only for the time you need this demo running.

To delete the app:

```
cdk destroy
```

## Links related to this code

- Video with more details:
- Launch blog post:
