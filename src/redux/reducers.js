import { account, send } from 'balance-common';
import { combineReducers } from 'redux';

import transactionsToApprove from './transactionsToApprove';

export default combineReducers({
  account,
  send,
  transactionsToApprove,
});
