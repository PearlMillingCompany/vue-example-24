<template>

    
    <div>
        <input type="text" v-model="query" placeholder="Search...">
        <button @click="search">Search</button>
        <ul>
            <li v-for="result in searchResults" :key="result.id">
                <RouterLink :to="`/playerDetails/${result.player_name}`">{{ result.player_name }}</RouterLink>
                <!-- <a @click="redirect('id', 'player_api_id', 'player_name', 'birthday', 'height', 'weight')">result: {{
                    result.player_name }}</a> -->
            </li>
            {{ searchResults.player_name }}

        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            query: '',
            searchResults: []
        };
    },
    methods: {
        async search() {
            const backendUrl = 'http://localhost:3000/search';
            try {
                const response = await axios.get(`${backendUrl}?query=${encodeURIComponent(this.query)}`);
                this.searchResults = response.data;
                console.log(response.data);
            }
            catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        },
    },
    components: { RouterLink }
};
</script>
  
<style scoped></style>
  
  
  