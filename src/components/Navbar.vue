<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
		<div class="container">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link to="/" class="nav-link ">
						Home
					</router-link>
					<router-link to="/list" class="nav-link">
						Products
					</router-link>

					<a class="dropdown text-decoration-none">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							data-bs-toggle="dropdown"
						>
							Languge
						</a>

						<ul class="dropdown-menu">
							<li v-for="{ text, value, index } in langs" :key="index">
								<a class="dropdown-item" @click="handler(value)">{{ text }}</a>
							</li>
						</ul>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'Home',
	data() {
		return {
			langs: [
				{ text: 'English', value: 'en-US' },
				{ text: '繁體中文', value: 'zh-TW' },
				{ text: 'にほん"', value: 'ja-JP' },
			],
		};
	},
	methods: {
		handler(value) {
			var vm = this;
			vm.$i18n.locale = value;
			localStorage.setItem('locale', value);
			console.log(vm.$i18n.locale);
		},
	},
};
</script>
<style lang="scss" scope></style>
