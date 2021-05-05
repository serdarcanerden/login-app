<template>
	<div>
		<v-app>
			<!-- Whole Login screen is a card can be changed but I thought it was fitting
			for this purpose to use it and it is wrapping the form -->
			<v-card elevation="10" width="500" class="mx-auto mt-16 myFont">
				<div class="box">
					<v-card-title class="titleColor">
						<h1 class="mx-auto mt-4">{{ $t('headerName') }}</h1>
					</v-card-title>
					<v-divider class="vDivider"> </v-divider>
					<v-card-text>
						<v-form @submit.prevent="checkData()">
							<!-- In these fields wanted to use clearable prop as well but when u clear 
							with that object the code itself tries to check the rules and while it is 
							empty returns a null value and tries to check that results in a error 
							plus i didn't want to handle everything myself while using vuetify so i removed
							it and added hints on my own as div on the bottom -->
							<v-text-field
								class="mt-4"
								v-model="username"
								title="username"
								:rules="[rules.required, rules.min4, rules.max]"
								outlined
								prepend-icon="mdi-account-circle"
								rounded
								maxlength="16"
								@blur="userActive()"
								@focus="userDactive()"
							>
								<!-- Hacky workaround because that I decided to use i18n vuetify only offered
							an option like below to nest to html elements inside each other and control it
							in methods or computed properties -->
								<template v-slot:label> {{ $t('userName') }} </template>
							</v-text-field>
							<!-- Displaying the hint while checking the v-model values -->
							<div class="hint">
								{{ hintUser }}
							</div>
							<v-divider class="vDivider"> </v-divider>
							<!-- Only bad thing about these ones are the warnings are actually checked twice
							one for vuetify and one for the text not too much performance hit but still can be 
							improved -->

							<v-text-field
								class="mt-4"
								ref="passInput"
								name="password"
								autocomplete="password"
								v-model="password"
								title="password"
								:rules="[
									rules.required,
									rules.min,
									rules.max,
									rules.empty,
									showLock,
								]"
								rounded
								counter="16"
								maxlength="16"
								:type="showEye ? 'text' : 'password'"
								outlined
								:prepend-icon="showLock ? 'mdi-lock-open-variant' : 'mdi-lock'"
								:append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
								@click:append="showEye = !showEye"
								@blur="passActive()"
								@focus="passDactive()"
							>
								<!-- Same work around above username did that on password -->
								<template v-slot:label> {{ $t('passWord') }} </template>
							</v-text-field>
							<!-- Displaying the password hints -->
							<div class="hint">{{ hintPass }}</div>
						</v-form>
						<!-- Buttons divider a register form can be added didn't add that one -->
						<v-divider class="vDivider"> </v-divider>
						<v-card-actions p="10">
							<v-btn elevation="5" class="ma-1" plain rounded color="white">{{
								$t('regText')
							}}</v-btn>
							<v-spacer></v-spacer>
							<v-btn
								elevation="15"
								class="ma-1"
								plain
								rounded
								color="white"
								@click="checkData"
								>{{ $t('logText') }}</v-btn
							>
						</v-card-actions>
					</v-card-text>
				</div>
			</v-card>
		</v-app>
	</div>
</template>

<script>
	// const axios = require('axios').default;
	export default {
		name: 'LoginPage',
		data: () => ({
			showEye: false, //Icon password show boolean
			username: '', // Username (v-model) value
			password: '', // Password (v-model) value
			pssAct: false, //Password hover boolean
			usrAct: false, //Username hover boolean
			passwordStrength: 'low',
			rules: {
				/* Vuetifyin kendi rulelarını ve borderları kırmızıya dondurmek icin*/
				required: (v) => !!v,
				min: (v) => v.length >= 8,
				max: (v) => v.length <= 16,
				min4: (v) => v.length >= 4,
				empty: (v) => v.length > 0,
			},
		}),
		methods: {
			/* In the mouse exits hints didn't work properly managed that
			with blur and focus each seperately and holded a boolean alue for it*/
			passActive() {
				this.pssAct = true;
			},
			passDactive() {
				this.pssAct = false;
			},
			userActive() {
				this.usrAct = true;
			},
			userDactive() {
				this.usrAct = false;
			},
			/* We will check if everything is ok about the password with regex and if the data matches
			on the server and proceed to login by giving the user a key/id*/
			checkData() {
				console.log(this.showLock);
				// axios
				// 	.post('/user', {
				// 		firstName: 'Fred',
				// 		lastName: 'Flintstone',
				// 	})
				// 	.then(function(response) {
				// 		console.log(response);
				// 	})
				// 	.catch(function(error) {
				// 		console.log(error);
				// 	});
				this.$router.replace('/home'); //, params: { userId } });
			},
		},

		computed: {
			/*Username and password textfields didn't convert language while on the vuetify
			so i had to pull them out so to be able to call */
			hintPass() {
				let hintStrpass = '';
				const pssL = this.password.length;
				if (pssL == 0 && this.pssAct) {
					hintStrpass = this.$t('passhint');
				} else if (pssL < 8 && pssL > 0) {
					hintStrpass = this.$t('passhint8');
				} else if (pssL != 0 && !this.showLock) {
					hintStrpass = this.$t('passhintNofit');
				}
				return hintStrpass;
			},
			hintUser() {
				let hintStruser = '';
				const usrL = this.username.length;
				if (usrL == 0 && this.usrAct) {
					hintStruser = this.$t('userhint');
				} else if (usrL < 4 && this.usrAct) {
					hintStruser = this.$t('userhint4');
				}
				return hintStruser;
			},
			showLock() {
				// let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
				let mediumRegex = new RegExp(
					'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})'
				);
				let showLock = false;
				if (mediumRegex.test(this.password)) {
					showLock = true;
				}
				return showLock;
			},
		},
	};
</script>

<style scoped>
	.myFont {
		font-family: Arial, Helvetica, sans-serif;
	}
	.box {
		background-image: linear-gradient(
			45deg,
			hsla(230, 54%, 38%, 0.397),
			hsla(196, 58%, 48%, 0.603)
		);
	}

	.hint {
		color: red;
		justify-items: center;
		display: grid;
		align-items: start;
	}
	.vDivider {
		background: #ffffff;
	}

	.titleColor {
		color: #f3ebebd5;
	}
</style>
