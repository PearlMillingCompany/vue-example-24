<template>
    <div>
      <input type="text" v-model="query" placeholder="Search...">
      <button @click="search">Search</button>
      <ul>
        <li v-for="result in searchResults" :key="result.id">{{ result.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
        searchResults: []
      };
    },
    methods: {
      search() {
        const backendUrl = 'http://localhost:3000/search'; // Adjust the URL based on your backend configuration
        fetch(`${backendUrl}?query=${encodeURIComponent(this.query)}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.searchResults = data;
          })
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  
  
  