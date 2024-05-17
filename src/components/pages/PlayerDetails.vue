<script>
import PlayerItem from "../widgets/PlayerItem.vue";


export default {

    data() {
        return {
            PlayerData: {
                
            }
        }
    },
    components: {
        PlayerItem
    },

}
</script>

<template>
    <p> TEST {{ $route.params.player_name}}</p>
<PlayerItem> </PlayerItem>
</template>




