<template>
	<body>
		<div class="backgr ml-n3 mt-n3">
			<div class="overlay"></div>
			<div class="terminal">
				<h1>Error</h1>
				<p class="output">
					The page you are looking for might have been removed, had its name
					changed or is temporarily unavailable.
				</p>
				<p class="output">
					Please try to go<v-btn
						@click="returnHist()"
						class="button mb-2 ml-2"
						tile
						large
					>
						<h1>back</h1></v-btn
					>
				</p>
				<p class="output">Good luck.</p>
			</div>
		</div>
	</body>
</template>

<script>
	export default {
		methods: {
			returnHist() {
				this.$router.replace('/login');
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import 'https://fonts.googleapis.com/css?family=Inconsolata';

	.button {
		color: rgba(128, 255, 128, 0.8);
	}
	body {
		font-family: 'Inconsolata';
		font-size: 1.5rem;
		color: rgba(128, 255, 128, 0.8);
		text-shadow: 0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8);
	}

	.backgr {
		background: rgba(0, 0, 0, 0.3);
		background-size: auto 4px;
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
	}

	.overlay {
		pointer-events: none;
		position: absolute;
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0,
			rgba(0, 0, 0, 0.3) 50%,
			rgba(0, 0, 0, 0) 100%
		);
		background-size: auto 4px;
		z-index: 1;
	}

	.overlay::before {
		content: '';
		pointer-events: none;
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			0deg,
			transparent 0%,
			rgba(32, 128, 32, 0.2) 2%,
			rgba(32, 128, 32, 0.8) 3%,
			rgba(32, 128, 32, 0.2) 3%,
			transparent 100%
		);
		background-repeat: no-repeat;
		animation: scan 7.5s linear 0s infinite;
	}

	@keyframes scan {
		0% {
			background-position: 0 -100vh;
		}
		35%,
		100% {
			background-position: 0 100vh;
		}
	}

	.terminal {
		box-sizing: inherit;

		height: 100%;
		width: 1000px;
		max-width: 100%;
		padding: 4rem;
		text-transform: uppercase;
	}

	.output {
		color: rgba(128, 255, 128, 0.8);
		text-shadow: 0 0 1px rgba(51, 255, 51, 0.4),
			0 0 2px rgba(255, 255, 255, 0.8);
	}

	.output::before {
		content: '> ';
	}
</style>
