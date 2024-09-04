<script setup lang="ts">
import { IconRssBox } from "@iconify-prerendered/vue-mdi"
</script>

<template>
	<a href="/ViteLenovoZ5s/feed.rss" class="rss" title="RSS news archive feed">
		<IconRssBox />
		<span>RSS feed</span>
	</a>
</template>

<style lang="stylus" scoped>
.rss {
	& > * {
		vertical-align: middle
		position: relative
		bottom: 1px
	}
	svg {
		width: 1em
		height: 1em
		display: inline-block
		margin-right: 4px
	}
}
</style>