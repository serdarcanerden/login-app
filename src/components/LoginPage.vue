<template>
	<div>
		<v-app>
			<!-- Whole Login screen is a card can be changed but I thought it was fitting
			for this purpose to use it and it is wrapping the form -->
			<v-card elevation="10" width="500" class="mx-auto myFont ma-16">
				<div class="box">
					<v-card-title>
						<span class="myFont mx-auto ma-4 secondary--text">{{
							$t('headerName')
						}}</span>
					</v-card-title>
					<v-divider color="white"> </v-divider>
					<v-card-text>
						<v-form @submit.prevent="">
							<!-- In these fields wanted to use clearable prop as well but when u clear 
							with that object the code itself tries to check the rules and while it is 
							empty returns a null value and tries to check that results in a error 
							plus i didn't want to handle everything myself while using vuetify so i removed
							it and added hints on my own as div on the bottom -->
							<v-text-field
								autocomplete="off"
								class="mt-4"
								v-model="username"
								title="username"
								:rules="[rules.required, rules.min4, rules.max]"
								outlined
								prepend-icon="mdi-account-circle"
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
							<v-divider color="white"> </v-divider>
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

							<!-- Buttons divider a register form can be added didn't add that one -->
							<v-divider color="white"> </v-divider>

							<v-card-actions p="10">
								<v-btn elevation="5" class="white--text" large color="info"
									><v-icon>mdi-content-save-edit-outline</v-icon
									>{{ $t('regText') }}</v-btn
								>
								<v-spacer></v-spacer>
								<v-btn
									elevation="15"
									class="white--text"
									color="success"
									type="Login"
									large
									@click="onLogin"
								>
									{{ $t('logText') }}
									<v-icon dark> mdi-login-variant </v-icon></v-btn
								>
							</v-card-actions>
						</v-form>
					</v-card-text>
				</div>
			</v-card>
		</v-app>
	</div>
</template>

<script>
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
			onLogin() {
				let user = false;
				//  Mock up user data as username and password is created
				// fetch(
				// 	'https://loginpage-e5ac2-default-rtdb.europe-west1.firebasedatabase.app/user.json',
				// 	{
				// 		method: 'POST',
				// 		headers: {
				// 			'Content-Type': 'application/json',
				// 		},
				// 		body: JSON.stringify({
				// 			Username: 'admin',
				// 			Password: 'admin',
				// 		}),
				// 	}
				// );
				fetch(
					'https://loginpage-e5ac2-default-rtdb.europe-west1.firebasedatabase.app/user.json'
				)
					.then((response) => {
						if (response.ok) {
							return response.json();
						}
					})
					.then((data) => {
						if (this.showLock) {
							for (const id in data) {
								if (
									data[id].Password == this.password &&
									data[id].Username == this.username
								) {
									this.$router.replace('/home');
									user = true;
								}
							}
						}
						if (!user || !this.showLock) {
							alert('Username or password is wrong');
						}
					});
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
		font-size: 2rem;
	}
	.box {
		background-image: linear-gradient(
			80deg,
			hsla(240, 3%, 44%, 0.986),
			hsla(212, 9%, 66%, 0.705)
		);
	}

	.hint {
		color: red;
		justify-items: center;
		display: grid;
		align-items: start;
	}
	/* .vDivider {
		background: #ffffff;
	} */

	.titleColor {
		color: #f3ebebd5;
	}
</style>
