import { defineMessages } from 'react-intl';

import ErrorTypes from '../../constants/errorTypes';
import TriangleTypes from '../../constants/triangleTypes';

const messages = defineMessages({
  [ErrorTypes.FORM_EMPTY_LENGTH.toLowerCase()]: {
    id: 'triangle_type_determiner.' + ErrorTypes.FORM_EMPTY_LENGTH.toLowerCase(),
    defaultMessage: 'Triangle needs 3 sides length'
  },
  [ErrorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH.toLowerCase()]: {
    id: 'triangle_type_determiner.' + ErrorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH.toLowerCase(),
    defaultMessage: 'All triangle\'s Side length must be greater than 0'
  },
  [ErrorTypes.INVALID_TRIANGLE_SIDES.toLowerCase()]: {
    id: 'triangle_type_determiner.' + ErrorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH.toLowerCase(),
    defaultMessage: 'Sum of each two sides must be greater than the third side'
  },
  not_a_triangle: {
    id: 'triangle_type_determiner.not_a_triangle',
    defaultMessage: 'Not a Triangle'
  },
  [TriangleTypes.SCALENE.toLowerCase()]: {
    id: 'triangle_type_determiner.' + TriangleTypes.SCALENE.toLowerCase(),
    defaultMessage: 'Scalene'
  },
  [TriangleTypes.ISOSCELES.toLowerCase()]: {
    id: 'triangle_type_determiner.' + TriangleTypes.ISOSCELES.toLowerCase(),
    defaultMessage: 'Isosceles'
  },
  [TriangleTypes.EQUILATERAL.toLowerCase()]: {
    id: 'triangle_type_determiner.' + TriangleTypes.EQUILATERAL.toLowerCase(),
    defaultMessage: 'Equilateral'
  }
});

export default messages;