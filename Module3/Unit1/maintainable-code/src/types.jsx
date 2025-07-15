import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number
});