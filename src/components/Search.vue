<template>
    <div>
        <input type="text" v-model="query" placeholder="Search...">
        <button @click="search">Search</button>
        <ul>
            <li v-for="result in searchResults" :key="result.id">
                <a @click="redirect('id', 'player_api_id', 'player_name', 'birthday', 'height', 'weight')">result: {{
                    result.player_name }}</a>
            </li>
            {{ searchResults.player_name }}

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
            const backendUrl = 'http://localhost:3000/search';
            axios.get(`${backendUrl}?query=${encodeURIComponent(this.query)}`)
                .then(response => {
                    this.searchResults = response.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('There has been a problem with your axios operation:', error);
                });
        },
        redirect(result) {
            const id = result.id;
            const player_api_id = result.player_api_id;
            const player_name = result.player_name;
            const birthday = result.birthday;
            const height = result.height;
            const weight = result.weight;

            const href = `./#/pages/PlayerDetails.vue?id=${id}&player_api_id=${player_api_id}&player_name=${encodeURIComponent(player_name)}&birthday=${birthday}&height=${height}&weight=${weight}`;
            window.location.href = href;
        }
    }

    
};
</script>
  
<style scoped></style>
  
  
  