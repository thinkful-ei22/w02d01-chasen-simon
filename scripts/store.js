'use strict';

/* global Item*/

const store = (function(){

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = function(id) {
    store.items.find(item => {
      return item.id === id;
    });
  };

  const addItem = function(name) {
    try{
      Item.validateName(name);
      let newItemName = Item.create(name);  
      this.items.push(newItemName);
    }
    catch(e){
      console.log(`Cannot add item: ${e.message}`);
    }
  };

  const findToggleChecked = function(id) {
    const foundItem = store.findById(id);
    foundItem.checked = !foundItem.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      store.findById(id).name = newName;
    } catch(e) {
      console.log(`Cannot update item: ${e.message}`); 
    }
  };

  const findAndDelete = function(id) {
    const index = store.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  };

  return {
    items, hideCheckedItems, searchTerm, findById, addItem, findToggleChecked, findAndUpdateName, findAndDelete
  };
}());