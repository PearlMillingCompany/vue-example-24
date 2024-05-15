<script>
import PlayerItem from "../widgets/PlayerItem.vue";


export default {

    data() {
        return {
            PlayerData: {
                id: 1,
                player_fifa_api_id: 11,
                player_name: "fg" ,
                birthday: "gh" ,
                height: 1,
                weight: 1
            }
        }
    },
    components: {
        PlayerItem
    },

}
</script>

<template>
    <p> TEST</p>
<PlayerItem> </PlayerItem>
</template>




