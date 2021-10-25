<template>
	<div class="col-lg-3 col-md-4 col-sm-6">
		<div class="card">
			<img :src="item.imgUrl" class="img card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{{ item.title }}</h5>
				<p class="card-text">
					{{ item.content }}
				</p>
				<p v-if="locale == 'ja-JP'">
					{{ $d(new Date(), 'long', 'ja-JP') }}
				</p>
				<p v-else>{{ $d(new Date(), 'short') }}</p>
				<router-link :to="item.id" class="btn btn-secondary">Check</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		info: {
			type: Object,
			require: true,
		},
	},
	data() {
		return {};
	},
	computed: {
		item() {
			return this.info;
		},
		locale() {
			return this.$i18n.locale;
		},
	},
};
</script>
