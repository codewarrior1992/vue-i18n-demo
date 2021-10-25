<template>
	<div class="container">
		<h1 class="text-secondary">{{ $t(targetData.title) }}</h1>
		<p v-if="locale == 'ja-JP'">{{ $n(100, 'currency', 'ja-JP') }}</p>
		<p v-else>{{ $n(100, 'currency') }}</p>
		<p></p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			targetId: '',
		};
	},
	computed: {
		targetData() {
			const vm = this;
			const i18n = vm.$i18n;
			let products = i18n.messages[i18n.locale].products;
			vm.targetId = vm.$route.params.id;

			let target = products.filter((item) => {
				return item.id == vm.targetId;
			});

			return Object.assign({}, target[0]);
		},
		locale() {
			return this.$i18n.locale;
		},
	},
};
</script>
