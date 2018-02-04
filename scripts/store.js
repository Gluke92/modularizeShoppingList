/* global cuid, items, hideCheckedItems, searchTerm */
'use strict';

const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function (id) {
    const foundYa = store.items.find(item => item.id === id);
    return foundYa;
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      const newItem = Item.create(name);
      this.items.push(newItem);
    }
    catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  };

  const findAndToggleChecked = function(id) {
    const thisID = this.findById(id);
    thisID.checked = !thisID.checked;
  };

  //toggling the filter changes the state
  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems; 
  };

  const setSearchTerm = function(newTerm) {
    this.searchTerm = newTerm;
  };






  function toggleCheckedForListItem(id) {
    const foundItem = store.items.find(item => item.id === id);
    foundItem.checked = !foundItem.checked;
  }

  const findAndUpdateName = function (id, itemName) {
    try {
      const item = this.findById(id);
      item.name = itemName;
      Item.validateName(item);
    } catch (e) {
      console.log('Cannot update name: ' + e.message);
    }
  };

  
  // function editListItemName(id, itemName) {
  //   const item = store.items.find(item => item.id === id);
  //   item.name = itemName;
  // }

  const findAndDelete = function(id) {
    const indexInit = this.items.findIndex(item => item.id === id);
    this.items.splice(indexInit, 1);
  };

  // function delete(id) {
  //   const index = store.items.findIndex(item => item.id === id);
  //   store.items.splice(index, 1);
  // }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName,
    toggleCheckedFilter,
    setSearchTerm
  };

}() );