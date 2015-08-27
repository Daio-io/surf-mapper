'use strict';

const searchBox = $('#search-box');
const searchContainer = $('.search-container');

export const SearchBox = {
  
  show: function() {
    searchContainer.show();
    searchBox.val('').focus();
  },
  hide: function() {
    searchContainer.hide();
    searchBox.val('');
  }

};