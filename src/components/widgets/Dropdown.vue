<script>
export default {
    props: {
        options: {
            type: Array,
            importd: true
        },
        text: String,
    },
    data() {
        return {
            isOpen: false,
            selected: ''
        }
    },
    methods: {
        select(option) {
            this.selected = option;
            this.isOpen = false;
            // TODO: change the route here
        }
    }
}
</script>

<template>
    <!-- open when clicked and show dropdown -->
    <div @click="isOpen = !isOpen">
        <ul class="dropdown" v-if="isOpen">
            <li class="dropdown-item" v-for="option in options" :key="option">
                <a @click="select(option)" :href="option == 'Careers' ? `#/about` : option.toLowerCase()">{{ option }}</a></li>
        </ul>
        {{ text }}
    </div>
</template>

<style>
.dropdown {
    position: absolute;
    top: 51px !important;
    right: -71px;
    list-style-type: none;
    padding: 0;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93) 0px 2px 5px -1px,
        rgba(0, 0, 0) 0px 1px 3px -1px;
    background-color: rgba(44, 44, 44);
    min-width: 200px;
}

.dropdown-item {
    cursor: pointer;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 70px;
    padding: 0 30px !important;
}
</style>