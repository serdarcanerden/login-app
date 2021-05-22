<template>
	<v-card
		class="mt-16 mx-auto text-center card"
		elevation="15"
		height="250"
		width="450"
	>
		<v-card-text class="wavy mt-5">
			<span style="--i:1">4</span>
			<span style="--i:2">0</span>
			<span style="--i:3">4</span>
			<span style="--i:4">-</span>
			<span style="--i:5">P</span>
			<span style="--i:6">a</span>
			<span style="--i:7">g</span>
			<span style="--i:8">e</span>
			<span style="--i:9"> </span>
			<span style="--i:10">N</span>
			<span style="--i:11">o</span>
			<span style="--i:12">t</span>
			<span style="--i:13">F</span>
			<span style="--i:14">o</span>
			<span style="--i:15">u</span>
			<span style="--i:16">n</span>
			<span style="--i:17">d</span>
		</v-card-text>
		<v-card-subtitle class="mt-14 secondary--text">
			{{ $t('pagenotfound') }}
		</v-card-subtitle>
		<v-btn bottom centered plain color="warning" @click="returnHist">
			<v-icon left>
				mdi-keyboard-return
			</v-icon>
			{{ $t('return') }}</v-btn
		>
	</v-card>
</template>

<script>
	export default {
		data: () => ({}),

		methods: {
			returnHist() {
				console.log('AT THE NO PAGE PART');
				console.log(this.$store.getters.isUserLogged);
				this.$router.replace('/home');
			},
		},
	};
</script>

<style scoped>
	.wavy {
		position: relative;
		-webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
		font-family: monospace;
	}
	.wavy span {
		position: relative;
		display: inline-block;
		color: #ffc107;
		font-size: 1.9em;
		animation: animate 2s ease-in-out infinite;
		animation-delay: calc(0.1s * var(--i));
	}
	@keyframes animate {
		0% {
			transform: translateY(0px);
		}
		20% {
			transform: translateY(-20px);
		}
		40%,
		100% {
			transform: translateY(0px);
		}
	}
</style>
