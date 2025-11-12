<template>
    <div class="zoomable">
        <div
            class="wrapper"
            :class="{ modal }"
        >
            <div
                v-if="modal"
                class="header"
            >
                <button @click="modalClose">Close</button>
            </div>

            <div
                class="content"
                @click="modal = true"
                :class="{ dragging: isDragging }"
            >
                <div
                    class="container"
                    @wheel="changeZoomLevel"
                    @mousedown="dragStart"
                    @mouseup="dragStop"
                    @mouseleave="dragStop"
                    @mousemove="drag"
                    :style="{ transform: `scale(${zoomLevel})` }"
                >
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

const MIN_ZOOM = 1
const MAX_ZOOM = 3
const ZOOM_STEP = 0.01
const ZOOM_SPEED = 10
const Y_SCROLL_STEP = 30

const modal = ref(false)

const zoomLevel = ref(MIN_ZOOM)

const isDragging = ref(false)
let dragStartX = 0
let dragStartY = 0
let dragScrollLeft = 0
let dragScrollTop = 0

function modalClose(): void {
    modal.value = false
    zoomLevel.value = MIN_ZOOM
}

function changeZoomLevel(event: WheelEvent): void {
    if (!modal.value) return

    event.preventDefault()

    const target = (event.currentTarget as HTMLDivElement).parentElement as HTMLDivElement

    if (event.shiftKey) {
        target.scrollBy({
            top: event.deltaX < 0 ? -Y_SCROLL_STEP : Y_SCROLL_STEP,
        })

        return
    }

    const rect = target.getBoundingClientRect()
    const prevZoomLevel = zoomLevel.value

    zoomLevel.value += (event.deltaY / ZOOM_SPEED) * -ZOOM_STEP
    zoomLevel.value = Math.min(Math.max(MIN_ZOOM, zoomLevel.value), MAX_ZOOM)

    const zoomFactor = zoomLevel.value / prevZoomLevel
    const offsetX = event.clientX - rect.left + target.scrollLeft
    const offsetY = event.clientY - rect.top + target.scrollTop

    nextTick().then(() => {
        target.scrollTo({
            left: offsetX * zoomFactor - (event.clientX - rect.left),
            top: offsetY * zoomFactor - (event.clientY - rect.top),
        })
    })
}

function dragStart(event: MouseEvent): void {
    const target = (event.currentTarget as HTMLDivElement).parentElement as HTMLDivElement

    isDragging.value = true
    dragStartX = event.pageX - target.offsetLeft
    dragStartY = event.pageY - target.offsetTop
    dragScrollLeft = target.scrollLeft
    dragScrollTop = target.scrollTop
}

function dragStop(): void {
    isDragging.value = false
}

function drag(event: MouseEvent): void {
    if (!isDragging.value) return

    event.preventDefault()

    const target = (event.currentTarget as HTMLDivElement).parentElement as HTMLDivElement

    const x = event.pageX - target.offsetLeft
    const y = event.pageY - target.offsetTop

    target.scrollTo({
        left: dragScrollLeft - (x - dragStartX),
        top: dragScrollTop - (y - dragStartY),
    })
}
</script>

<style lang="less" scoped>
.zoomable {
    .wrapper {
        display: flex;
        flex-direction: column;
        overflow: hidden;

        > .header {
            text-align: right;
            padding: 20px;
            border-bottom: 1px solid var(--vp-c-border);
            flex: 0;

            button {
                font-size: 14pt;
                background: transparent;
                cursor: pointer;
            }
        }

        > .content {
            overflow: auto;
            cursor: zoom-in;
            flex: 1;

            .container {
                transform-origin: top left;
            }
        }

        &.modal {
            position: fixed;
            top: 5px;
            right: 5px;
            bottom: 5px;
            left: 5px;
            background-color: var(--vp-c-bg);
            border-radius: 20px;
            border: 2px solid var(--vp-c-border);
            z-index: 100;

            .content {
                cursor: grab;

                &.dragging {
                    cursor: grabbing;
                    user-select: none;
                }
            }
        }
    }
}
</style>
