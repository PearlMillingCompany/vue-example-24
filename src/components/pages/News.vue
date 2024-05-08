<script>
import axios from 'axios'
import NewsItem from "../widgets/NewsItem.vue";
import NewsItemFooter from "../widgets/NewsItemFooter.vue";
import TimeStamp from "../widgets/TimeStamp.vue";
export default {
    data() {
        return {
            featuredArticle: {
                imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3934,h_2212,x_0,y_110/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hraan45jfr0dk67wey.jpg",
                title: "Cole Palmer responds to 'billion pound bottlejobs' jibe",
                gmtTime: "2024-02-19T20:04:27.000Z",
                source: "FotMob",
                lead: "",
                sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
                pageURL: "https://www.fotmob.com/embed/news/01hraaeg5x61/cole-palmer-responds-billion-pound-bottlejobs"
            },
            articles: [
                {
                    imageUrl: "https://theanalyst.com/wp-content/uploads/2024/03/should-chelsea-sack-mauricio-pochettino.jpg",
                    title: "Thomas Tuchel could be sacked 'immediately' if Bayern Munich fall to Lazio",
                    gmtTime: "2024-02-19T20:04:27.000Z",
                    source: "FotMob",
                    lead: "",
                    sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
                    pageURL: "https://www.fotmob.com/embed/news/01hr4kb3yxvm/thomas-tuchel-could-be-sacked-immediately-if-bayern-munich-fall"
                },
                {
                    imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3000,h_1687,x_0,y_177/c_fill,w_912,h_516,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hr4rhtcpdmfcrqx00j.jpg",
                    title: "Man Utd players 'concerned' about Erik ten Hag's demands - report",
                    gmtTime: "2024-02-19T20:04:27.000Z",
                    source: "FotMob",
                    lead: "",
                    sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
                    pageURL: "https://www.fotmob.com/embed/news/01hr4regj96n/man-utd-players-concerned-about-erik-ten-hag",
                },
                {
                    imageUrl: "https://images.performgroup.com/di/library/omnisport/79/d8/6c9b4b26f64a40ea89b7f69ccd088d40.jpg?t=-955230179&w=640",
                    title: "Inter boss Simone Inzaghi reveals admiration for Diego Simeone ahead of clash",
                    gmtTime: "2024-02-19T20:04:27.000Z",
                    source: "FotMob",
                    lead: "",
                    sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
                    pageURL: "https://www.fotmob.com/news/138lzxhk8mmsi1nflku3xemdte-inter-boss-simone-inzaghi-reveals-admiration-diego-simeone-ahead-clash"
                },
                {
                    imageUrl: "https://images.performgroup.com/di/library/omnisport/e5/8d/2_75350735.jpg?t=235676590&w=1200&h=630",
                    title: "Luis Enrique offers Kylian Mbappe no guarantees of Champions League playing time",
                    gmtTime: "2024-02-19T20:04:27.000Z",
                    source: "FotMob",
                    lead: "",
                    sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
                    pageURL: "https://www.fotmob.com/news/rdt692wf9sy61a4p2vsvrdatc-luis-enrique-offers-kylian-mbappe-no-guarantees-champions-league-playing-time"
                },
            ],
        }
    },
    components: {
        NewsItem,
        TimeStamp, 
        NewsItemFooter
    }
}
</script>

<template>
    <header class="WorldNewsHeader">
        <h1>World News</h1>
    </header>
    <div>
    <button @click="fetchData">Fetch Data</button>
    </div>
    <div class="layout">
        <div class="featuredArticle">
            <div class="featuredImage">
                <img :src="featuredArticle.imageUrl" alt="featured article image" />
            </div>
            <div class="featuredArticleText">
                <h3>{{ featuredArticle.title }}</h3>
                <NewsItemFooter :article="featuredArticle" />
            </div>
        </div>
        <div class="articleGrid">
            <NewsItem v-for="article in articles" :newsItem="article" :key="article.title" />
        </div>
    </div>
</template>

<style scoped>
.WorldNewsHeader {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 30px;
}
.featuredArticle {
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    padding: 0px 30px;
    position: relative;
}
.featuredImage {
    width: 100%;
    height: 100%;
    max-width: 640px;
}
.featuredImage>img {
    /* needs to also specify child to resize */
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.featuredArticleText {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: var(--GlobalColorScheme-Background-background2);
    height: 100%;
    width: 100%;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
}
.articleGrid {
    margin-top: 48px;
    padding: 0px 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px 24px;
    -webkit-box-align: start;
    align-items: start;
}
</style>