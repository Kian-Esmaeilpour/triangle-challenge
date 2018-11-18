import { defineMessages } from 'react-intl';

import ErrorTypes from '../../constants/errorTypes';

const messages = defineMessages({
  [ErrorTypes.INPUT_EMPTY_LENGTH.toLowerCase()]: {
    id: 'side_length_input.' + ErrorTypes.INPUT_EMPTY_LENGTH.toLowerCase(),
    defaultMessage: 'Side length is required'
  },
  [ErrorTypes.INPUT_ZERO_OR_NEGATIVE_LENGTH.toLowerCase()]: {
    id: 'side_length_input.' + ErrorTypes.INPUT_ZERO_OR_NEGATIVE_LENGTH.toLowerCase(),
    defaultMessage: 'Side length must be greater than 0'
  }
});

export default messages;