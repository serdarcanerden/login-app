<template>
	<grid-layout
		:layout.sync="layout"
		:col-num="20"
		:row-height="30"
		:is-draggable="draggable"
		:is-resizable="resizable"
		:horizontal-compact="true"
		:use-css-transforms="true"
	>
		<div v-for="(item, i) in layout" :key="i">
			<grid-item
				:static="item.static"
				:x="item.x"
				:y="item.y"
				:w="item.w"
				:h="item.h"
				:i="item.i"
			>
				<span class="text">{{ itemTitle(item) }}</span>
			</grid-item>
		</div>
	</grid-layout>
</template>

<script>
	import { GridLayout, GridItem } from 'vue-grid-layout';

	export default {
		components: {
			GridLayout,
			GridItem,
		},
		data: function() {
			return {
				layout: [
					{ x: 0, y: 0, w: 1, h: 1, i: '0', static: false },
					{ x: 1, y: 0, w: 1, h: 1, i: '1', static: true },
					{ x: 2, y: 0, w: 1, h: 1, i: '2', static: false },
					{ x: 3, y: 0, w: 1, h: 1, i: '3', static: false },
					{ x: 4, y: 0, w: 1, h: 1, i: '4', static: false },
					{ x: 5, y: 0, w: 1, h: 1, i: '5', static: false },
					{ x: 6, y: 5, w: 1, h: 1, i: '6', static: false },
					{ x: 7, y: 5, w: 1, h: 1, i: '7', static: false },
					{ x: 8, y: 5, w: 1, h: 1, i: '8', static: false },
					{ x: 9, y: 3, w: 1, h: 1, i: '9', static: true },
					{ x: 10, y: 4, w: 1, h: 1, i: '10', static: false },
					{ x: 11, y: 4, w: 1, h: 1, i: '11', static: false },
					{ x: 12, y: 10, w: 1, h: 1, i: '12', static: false },
					{ x: 13, y: 10, w: 1, h: 1, i: '13', static: false },
					{ x: 14, y: 8, w: 1, h: 1, i: '14', static: false },
					{ x: 6, y: 8, w: 1, h: 1, i: '15', static: false },
					{ x: 8, y: 10, w: 1, h: 1, i: '16', static: false },
					{ x: 10, y: 4, w: 1, h: 1, i: '17', static: false },
					{ x: 0, y: 9, w: 1, h: 1, i: '18', static: false },
					{ x: 2, y: 6, w: 1, h: 1, i: '19', static: false },
				],
				draggable: true,
				resizable: true,
				index: 0,
			};
		},
		methods: {
			itemTitle(item) {
				let result = item.i;
				if (item.static) {
					result += ' - Static';
				}
				return result;
			},
		},
	};
</script>

<style scoped>
	.vue-grid-layout {
		background: #eee;
		touch-action: none;
	}

	.vue-grid-item:not(.vue-grid-placeholder) {
		background: #ccc;
		border: 1px solid black;
	}

	.vue-grid-item .resizing {
		opacity: 0.9;
	}

	.vue-grid-item .static {
		background: #cce;
	}

	.vue-grid-item .text {
		font-size: 8px;
		text-align: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.vue-grid-item .no-drag {
		height: 100%;
		width: 100%;
	}

	.vue-grid-item .minMax {
		font-size: 12px;
	}

	.vue-grid-item .add {
		cursor: pointer;
	}

	.vue-draggable-handle {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 0;
		left: 0;
		background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
			no-repeat;
		background-position: bottom right;
		padding: 0 8px 8px 0;
		background-repeat: no-repeat;
		background-origin: content-box;
		box-sizing: border-box;
		cursor: pointer;
	}
</style>
