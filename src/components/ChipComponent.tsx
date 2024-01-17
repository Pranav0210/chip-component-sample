/**
import React, { useState } from 'react';
import RecipientItem from './RecipientItem';
import ListItem from './ListItem';
import userList from '../data';
import '../styles/chip.css';

const Chip = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [suggestedItems, setSuggestedItems] = useState([]);
  const [showSuggestedList, setShowSuggestedList] = useState(false);
  const [readyDelete, setReadyDelete] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggested items based on the input value
    const filteredItems = userList.filter(
      item => item.name.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase())
    ).filter(
        item => !chips.includes(item)
    );
    setSuggestedItems(filteredItems);
    
    if(value.trim() === '') {
        setInputValue('');
    }
    // Show suggested list when input is not empty
    setShowSuggestedList(value.trim() !== '');
  };

  const handleDeleteByBackspace = async (e) => {
      
    const chipsList = await document.getElementsByClassName('recipient-item')
    const lastChip = await chipsList[chipsList.length - 1]
    console.log(lastChip)

    if(e.keyCode !== 8 && lastChip) {
        setReadyDelete(false);
        lastChip.style["boxShadow"] = 'none'
    }
    if(readyDelete === true && e.keyCode === 8 && inputValue === '') {
      console.log('Backspace pressed')
      setChips(chips.slice(0, -1));
      await setReadyDelete(false);
      console.log(`readyDelete: ${readyDelete}`)
    }
    if(readyDelete === false && e.keyCode === 8 && inputValue === '') {
        console.log('Backspace pressed')
        await setReadyDelete(true);
        
        if(lastChip){
          lastChip.style.border = 'none'
          lastChip.style["boxShadow"] = '0px 0px 2px 2px #ff6a6a'
        }
        console.log(`readyDelete: ${readyDelete}`)
    }
  };

  const handleChipClick = (item) => {
    // Add the selected item to the chips array
    setChips([...chips, item]);

    setInputValue('');

    // Hide the suggested list
    setShowSuggestedList(false)
  };

  const handleChipRemove = (removedItem) => {

    const updatedChips = chips.filter(chip => chip !== removedItem);
    setChips(updatedChips);

    // Add the removed item back to the suggested items
    setSuggestedItems([...suggestedItems, removedItem]);

    setInputValue('');

    // Hide the suggested list
    setShowSuggestedList(false);
  };

  return (
    <>
    <div className="chip-container">
        <h1 id='container-title'>Pick Users</h1>
      <div className="chips" id='chips-list'>
        {chips.map((chip, index) => (
          <RecipientItem key={chip.id} {...chip} onRemove={() => handleChipRemove(chip)} />
        ))}
        <div>
            <input
            id='name-input'
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleDeleteByBackspace}
            onFocus={() => setShowSuggestedList(inputValue.trim() !== '')}
            placeholder="Add new user..."
            className="input-field"
            />
            {showSuggestedList && (
                <div className="suggested-list">
                {suggestedItems.map((item) => (
                    <div key={item.id} className="suggested-item" onClick={() => handleChipClick(item)}>
                    <ListItem {...item} />
                    </div>
                ))}
                </div>
            )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Chip;
*/
import React, { useState, KeyboardEvent } from 'react';
import RecipientItem from './RecipientItem.tsx';
import ListItem from './ListItem.tsx';
import userList from '../data.ts';
import '../styles/chip.css';

interface User {
  id: number;
  avatar: string;
  name: string;
  email: string;
}

const Chip: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [chips, setChips] = useState<User[]>([]);
  const [suggestedItems, setSuggestedItems] = useState<User[]>([]);
  const [showSuggestedList, setShowSuggestedList] = useState<boolean>(false);
  const [readyDelete, setReadyDelete] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggested items based on the input value
    const filteredItems = userList.filter(
      item => item.name.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase())
    ).filter(
      item => !chips.includes(item)
    );
    setSuggestedItems(filteredItems);

    if (value.trim() === '') {
      setInputValue('');
    }
    // Show suggested list when input is not empty
    setShowSuggestedList(value.trim() !== '');
  };

  const handleDeleteByBackspace = (e: KeyboardEvent<HTMLInputElement>) => {
    const chipsList = document.getElementsByClassName('recipient-item') as HTMLCollectionOf<HTMLElement>;
    const lastChip = chipsList[chipsList.length - 1];

    if (e.keyCode !== 8 && lastChip) {
      setReadyDelete(false);
      lastChip.style.boxShadow = 'none';
    }
    if (readyDelete === true && e.keyCode === 8 && inputValue === '') {
      console.log('Backspace pressed');
      setChips(chips.slice(0, -1));
      setReadyDelete(false);
      console.log(`readyDelete: ${readyDelete}`);
    }
    if (readyDelete === false && e.keyCode === 8 && inputValue === '') {
      console.log('Backspace pressed');
      setReadyDelete(true);

      if (lastChip) {
        lastChip.style.border = 'none';
        lastChip.style.boxShadow = '0px 0px 2px 2px #254fda';
      }
      console.log(`readyDelete: ${readyDelete}`);
    }
  };

  const handleChipClick = (item: User) => {
    // Add the selected item to the chips array
    setChips([...chips, item]);

    setInputValue('');

    // Hide the suggested list
    setShowSuggestedList(false);
  };

  const handleChipRemove = (removedItem: User) => {
    const updatedChips = chips.filter(chip => chip !== removedItem);
    setChips(updatedChips);

    // Add the removed item back to the suggested items
    setSuggestedItems([...suggestedItems, removedItem]);

    setInputValue('');

    // Hide the suggested list
    setShowSuggestedList(false);
  };

  return (
    <>
      <div className="chip-container">
        <h1 id='container-title'>Pick Users</h1>
        <div className="chips" id='chips-list'>
          {chips.map((chip, index) => (
            <RecipientItem key={chip.id} {...chip} onRemove={() => handleChipRemove(chip)} />
          ))}
          <div>
            <input
              id='name-input'
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleDeleteByBackspace}
              onFocus={() => setShowSuggestedList(inputValue.trim() !== '')}
              placeholder="Add new user..."
              className="input-field"
            />
            {showSuggestedList && (
              <div className="suggested-list">
                {suggestedItems.map((item) => (
                  <div key={item.id} className="suggested-item" onClick={() => handleChipClick(item)}>
                    <ListItem {...item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chip;
