#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkServerlessGetStartedStack } from '../lib/cdk-serverless-get-started-stack';

const app = new cdk.App();
new CdkServerlessGetStartedStack(app, 'CdkServerlessGetStartedStack');
