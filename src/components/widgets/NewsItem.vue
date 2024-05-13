<script>
import NewsItemFooter from './NewsItemFooter.vue';
export default {
    props: {
        newsItem: {
            imageUrl: String,
            title: String,
            gmtTime: String,
            source: String,
            lead: String,
            sourceIconUrl: String,
            pageURL: String
        }
    },
    components: { NewsItemFooter }
}
</script>

<template>
    <div class="news-item">
        <a :href="newsItem.pageURL">
            <div class="news-item__image">
                <img :src="newsItem.imageUrl" alt="news image" />
            </div>
            <div class="news-item__content">
                <h3 class="news-item__title">{{ newsItem.title }}</h3>
                <NewsItemFooter :article="newsItem"></NewsItemFooter>
            </div>
        </a>
    </div>
</template>

<style>
.news-item {
    border-bottom: 1px solid var(--color-border);
    padding: 16px;
}
.news-item__image {
    /* margin-right: 16px; */
    width: 100%;
    height: 100%;
    height: 200px;
}

.news-item__image>img {
    object-fit: cover;
    overflow: hidden;
    height: auto;
    width: 100%;
}

.news-item__content {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 16px;
}

.news-item__title {
    height: 70px;
    padding-top: 0px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
}
</style>