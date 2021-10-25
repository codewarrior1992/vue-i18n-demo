<template>
	<div class="container">
			<div class="row">
				<Card :info="item" v-for="(item, i) in productList" :key="i"/>
			</div>
	</div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
	Name:'List',
	components:{
		Card,
	},
	data() {
		return {
			locale: '',
		};
	},
	computed: {
		productList() {
			this.locale = this.$i18n.locale;
			return this.$i18n.messages[this.$i18n.locale].products;
		},
	},
};
</script>
</script>
