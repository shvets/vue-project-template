<template>
    <figure v-lazyload class="image__wrapper">
        <ImageSpinner class="image__spinner"/>

        <img class="image__item" :data-url="source" alt="random image">
    </figure>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    import LazyLoadDirective from '../directives/lazy-load-directive.js';

    const directives = {
        'lazyload': LazyLoadDirective,
    };

    import ImageSpinner from './ImageSpinner';

    const components = {
        ImageSpinner
    };

    // noinspection JSUnusedGlobalSymbols
    @Component({ components, directives })
    export default class ScalablePicture extends Vue {
        @Prop()
        protected source!: string;
    }
</script>

<style scoped lang="scss">
    .image {
        &__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;

            &.loaded {
                .image {
                    &__item {
                        visibility: visible;
                        opacity: 1;
                        border: 0;
                    }

                    &__spinner {
                        display: none;
                        width: 100%;
                    }
                }
            }
        }

        &__item {
            width: 100%;
            border-radius: 4px;
            transition: all 0.4s ease-in-out;
            opacity: 0;
            visibility: hidden;
        }
    }
</style>
