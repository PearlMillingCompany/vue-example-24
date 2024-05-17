<script>
import PlayerItem from "../widgets/PlayerItem.vue";


export default {

    data() {
        return {

            query: '',
            PlayerData: {
                id: '',
                player_fifa_api_id: '',
                player_name: '',
                birthday: '',
                height: '',
                weight: ''
            }
        }
    },
    watch: {
        $route(to, from) {
            // call axios 
            // load in this.PlayerData0
            console.log("route changed")
            axios.get("http://localhost:3000/players" + $route.params.player_name).then(response => {
                console.log(response.data);
                this.PlayerData = response.data;
            });
        },
    },
    components: {
        PlayerItem
    },

}
</script>

<template>
    <p> TEST {{ $route.params.player_name }}</p>
    <PlayerItem :PlayerItem="PlayerItem"> </PlayerItem>
</template>




