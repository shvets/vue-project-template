<template>
    <div class="img-demo">
        <app-layout>
            <div class="article-item">
                <ScalablePicture v-for="article in articles.filter(a => a.urlToImage)" class="article-item__image"
                           :source="article.urlToImage"
                           :key="article.publishedAt" />
            </div>
        </app-layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    import axios from 'axios';

    axios.defaults.baseURL = 'https://newsapi.org/v2/top-headlines';

    import AppLayout from '@/components/layout/AppLayout.vue';

    import ScalablePicture from '../components/ScalablePicture.vue';

    const components = {
        AppLayout,
        ScalablePicture
    };

    // noinspection JSUnusedGlobalSymbols
    @Component({ components })
    export default class PictureView extends Vue {
        articles = [];

        async mounted() {
            const { data } = await axios.get('?country=us&category=business&apiKey=065703927c66462286554ada16a686a1')
            this.articles = data.articles;
        }
    }
</script>

<style lang="scss" scoped>
    .img-demo {
        overflow-y: scroll;
    }

    /*img {*/
    /*    width: 300px !important;*/
    /*    padding: 15px;*/
    /*}*/

    /*img {*/
    /*    max-width: 100%;*/
    /*    height: auto;*/
    /*}*/

    /*.app-img {*/
    /*    margin-bottom: 200px;*/
    /*}*/

    .article-item {
        padding: 40px 10px;
        border-bottom: 1px solid #000;

        &__image {
            width: 50%;
        }
    }
</style>
