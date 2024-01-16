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

  /**
   * This function implements the functionality where the last chip can be deleted using the backspace with higlighted warning for deletion.
   * The highlighted chip is resolved again upon re-commencement of typing into the input field.
   * @param {Event} e
   */
  const handleDeleteByBackspace = async (e) => {
      
    const chipsList = await document.getElementsByClassName('recipient-item')
    const lastChip = await chipsList[chipsList.length - 1]
    console.log(lastChip)

    if(e.keyCode !== 8 && lastChip) {
        setReadyDelete(false);
        lastChip.style.border = '2px solid #ffffff'
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
        
        if(lastChip)
            lastChip.style.border = '2px solid #eb2929'
        console.log(`readyDelete: ${readyDelete}`)
    }
  };

  /**
   * 
   * @param {*} item 
   */
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
