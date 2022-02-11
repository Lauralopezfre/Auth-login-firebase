import React from 'react';
import ReactDOM from 'react-dom';

import { JournalApp } from './JournalApp';
import './styles/styles.scss'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


ReactDOM.render(
  <JournalApp />,
  document.getElementById('root')
);

