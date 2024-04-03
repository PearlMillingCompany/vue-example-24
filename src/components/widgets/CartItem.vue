<template>
    <div class="cart-item">
      <img :src="'/path/to/images/' + item.image" :alt="item.name">
      <div>{{ item.name }}</div>
      <div>{{ item.value }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object,
    },
  };
  </script>
  
  <style>
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .cart-item img {
    width: 50px;
    height: 50px; 
    margin-right: 10px;
  }
  </style>
  