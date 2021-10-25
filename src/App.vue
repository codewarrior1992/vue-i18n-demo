<template>
	<div id="app">
		<Navbar />
		<router-view />
	</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
	components: {
		Navbar,
	},
	data() {
		return {};
	},
};
</script>
<style lang="scss" scope>
li {
	list-style: none;
}
.img {
	object-fit: cover;
	height: 250px;
}
</style>
