import PropTypes from 'prop-types';

const questionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
});

export const electionPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(questionPropTypes),
});

export const electionsPropTypes = PropTypes.arrayOf(electionPropTypes);

