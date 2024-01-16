import React from "react";
import PropTypes from 'prop-types';
import '../styles/listItem.css';

const ListItem = ({ id, avatar, name, email }) => {
    return (
      <div className="list-item">
            <img src={avatar} alt={name} className="list-avatar" />
            <div className="name">{name}</div>
            <div className="email">{email}</div>
      </div>
    );
  };
  
  ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };
  
  export default ListItem;