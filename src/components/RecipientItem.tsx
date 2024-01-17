/**
 * 
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipientItem.css';

const RecipientItem = ({ id, avatar, name, onRemove }) => {
  return (
    <div className="recipient-item">
        <img src={avatar} alt={name} className="avatar" />
        <div className="name">{name}</div>
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
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipientItem.css';

interface RecipientItemProps {
  id: number;
  avatar: string;
  name: string;
  email: string;
  onRemove: (id: number) => void;
}

const RecipientItem: React.FC<RecipientItemProps> = ({ id, avatar, name, onRemove }) => {
  return (
    <div className="recipient-item">
      <img src={avatar} alt={name} className="avatar" />
      <div className="name">{name}</div>
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
