<script>

export default {

    props: {
        PlayerItem: {
            id: Number,
            player_fifa_api_id: Number,
            player_name: String,
            birthday: String,
            height: Number,
            weight: Number
        }
    },
    components: {

    }
}
</script>

<template>
    <div class="player-item">
            <!-- Default image goes here -->
            <div class="anon-image">
                
            </div>
            <div class="player_content">
                <p class="placeholder1">{{ PlayerItem.id }} </p>
                <p class="placeholder2"> {{ PlayerItem.player_fifa_api_id }}</p>
                <p class="placeholder3"> {{ PlayerItem.player_name}}</p>
                <p class="placeholder4"> {{ PlayerItem.birthday }}</p>
                <p class="placeholder5">{{ PlayerItem.height }} </p>
                <p class="placeholder6">{{ PlayerItem.weight }} </p>
            </div>
    </div>
</template>




