<template>
    <figure v-lazy-load class="picture-wrapper scalable-picture media-parent" :class="selectedClasses">
        <ImageSpinner class="picture-spinner"/>

        <img ref="image" data-toggle-fullscreen class="picture"
             :class="pictureClasses" :style="pictureStyle"
             src='' :data-url="url" alt=""
             @click="onClick" @dblclick="onDoubleClick"
             @mouseover="onMouseOver" @mouseout="onMouseOut">
    </figure>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Ref} from 'vue-property-decorator';

import {DoubleClickSupport} from '@/components/double-click-support';

import LazyLoadDirective from '../directives/lazy-load-directive';

const directives = {
    'lazy-load': LazyLoadDirective,
};

import ImageSpinner from './ImageSpinner.vue';

const components = {
    ImageSpinner
};

// noinspection JSUnusedGlobalSymbols
@Component({ components, directives })
export default class ScalablePicture extends Vue {
    @Prop({ required: true })
    protected url!: string;

    @Prop({ default: false })
    protected enableSelection!: boolean;

    @Prop({ default: true })
    protected enableEdit!: string;

    @Prop({ default: false })
    protected highlighted!: boolean;

    @Prop({ default: false })
    protected flip!: boolean;

    @Prop({ default: false })
    protected selected!: boolean;

    @Ref()
    protected image!: Vue;

    private doubleClickSupport = new DoubleClickSupport();

    private entered = false;

    protected get pictureSelected(): boolean {
        return this.enableSelection && this.enableEdit && this.entered || this.highlighted;
    }

    protected get pictureStyle() {
        return {
            border: this.pictureSelected ? '2px gray solid' : 'none',
            //transform: this.pictureSelected ? 'scale(1)' : 'scale(1)'
        };
    }

    protected get pictureClasses(): string[] {
        return [this.flip ? 'flip' : ''];
    }

    protected get selectedClasses(): string[] {
        return [this.enableSelection && this.enableEdit && this.selected ? 'selected' : ''];
    }

    protected created() {
        //this.imageUrl = this.url;
    }

    // noinspection JSUnusedGlobalSymbols
    protected onClick(event: any) {
        this.doubleClickSupport!.handleSingleClick(event.src, this);
    }

    protected onDoubleClick(event: any) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            (this.image as any).requestFullscreen();
        }

        this.doubleClickSupport!.handleDoubleClick(event.src, this);
    }

    protected onMouseOver(event: any) {
        this.entered = true;

        this.$emit('mouseover', event.src);
    }

    protected onMouseOut(event: any) {
        this.entered = false;

        this.$emit('mouseout', event.src);
    }
}
</script>

<style scoped lang="scss">
.picture-wrapper {
    .picture {
        width: 100%;
        border-radius: 4px;
        transition: all 0.4s ease-in-out;
        opacity: 0;
        visibility: hidden;
    }

    &.loaded {
        .picture {
            visibility: visible;
            opacity: 1;
            border: 0;
        }

        .picture-spinner {
            display: none;
            width: 100%;
        }
    }
}
</style>
