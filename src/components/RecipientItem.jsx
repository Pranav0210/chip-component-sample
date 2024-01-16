import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipientItem.css';

const RecipientItem = ({ id, avatar, name, email, onRemove }) => {
  return (
    <div className="recipient-item">
        <img src={avatar} alt={name} className="avatar" />
        <div className="details">
            <div className="name">{name}</div>
        </div>
        <span className="remove-icon" onClick={() => onRemove(id)}>
            &times;
        </span>
    </div>
  );
};

RecipientItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default RecipientItem;
