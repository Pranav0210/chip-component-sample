/**
 import React from "react";
import PropTypes from 'prop-types';
import '../styles/listItem.css';

const ListItem = ({ id, avatar, name, email }) => {
    return (
      <div className="list-item">
            <img src={avatar} alt={name} className="list-avatar" />
            <div className="details">
              <div className="name">{name}</div>
              <div className="email">{email}</div>
            </div>
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
 */
  import React from "react";
  import PropTypes from 'prop-types';
  import '../styles/listItem.css';
  
  interface ListItemProps {
    id: number;
    avatar: string;
    name: string;
    email: string;
  }
  
  const ListItem: React.FC<ListItemProps> = ({ id, avatar, name, email }) => {
    return (
      <div className="list-item">
        <img src={avatar} alt={name} className="list-avatar" />
        <div className="details">
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
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
  