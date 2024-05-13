<script>
import TimeStamp from './TimeStamp.vue';
export default {
    props: {
        article: {
            imageUrl: String,
            title: String,
            gmtTime: String,
            source: String,
            lead: String,
            sourceIconUrl: String,
            pageURL: String
        }
    },
    components: { TimeStamp }
}
</script>
<template>
    <div class="articleFooter">
        <img :src="article.sourceIconUrl" width="18" height="18" alt="source icon" />
        <div class="articleSource">
            <span>{{ article.source }}</span>
        </div>
        <TimeStamp :timestamp="article.gmtTime"></TimeStamp>
    </div>
</template>

<style>
.articleFooter {
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
}

.articleFooter>* {
    margin-right: 10px;
}
</style>