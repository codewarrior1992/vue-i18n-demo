<template>
	<div class="container">
		<h1 class="my-3">{{ $t(message.title) }}</h1>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Card from '@/components/Card.vue';
export default {
	Name: 'Content',
	components: {
		Navbar,
		Card,
	},
	data() {
		return {};
	},
	computed: {
		productList() {
			this.locale = this.$i18n.locale;
			return this.$i18n.messages[this.$i18n.locale].products;
		},
		message() {
			return this.$i18n.messages[this.$i18n.locale];
		},
	},
};
</script>
<style lang="scss" scope></style>
