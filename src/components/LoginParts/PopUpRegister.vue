<template>
	<v-dialog
		v-model="dialog"
		transition="dialog-bottom"
		persistent
		max-width="500"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				large
				slot="activator"
				color="info"
				class="white--text ml-4"
				v-bind="attrs"
				v-on="on"
			>
				<v-icon>mdi-content-save-edit-outline</v-icon>{{ $t('regText') }}</v-btn
			>
		</template>
		<template v-slot:default="dialog">
			<v-card>
				<v-card-title class="font-weight-light">
					<span>{{ $t('regFormTitle') }}</span>
					<v-spacer></v-spacer>
					<v-btn
						color="error"
						justify="right"
						class=""
						icon
						@click="dialog.value = false"
						><v-icon>mdi-location-exit</v-icon></v-btn
					>
				</v-card-title>
				<v-spacer></v-spacer>

				<v-divider></v-divider>
				<v-form>
					<v-card-text>
						<v-text-field
							autocomplete="off"
							class=" mr-8 ml-8"
							v-model="username"
							title="username"
							:rules="[rules.required, rules.min4, rules.max]"
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
						<div class="hint">
							{{ hintUser }}
						</div>
					</v-card-text>

					<v-card-text>
						<v-text-field
							class="mr-8 ml-8"
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
							:prepend-icon="showLock ? 'mdi-lock-open-variant' : 'mdi-lock'"
							:append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
							@click:append="showEye = !showEye"
							@blur="passActive()"
							@focus="passDactive()"
						>
							<!-- Same work around above username did that on password -->
							<template v-slot:label> {{ $t('passWord') }} </template>
						</v-text-field>
						<div class="hint">{{ hintPass }}</div>
					</v-card-text>
					<v-divider class="mt-6 mb-6" color="white"> </v-divider>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							icon
							color="info"
							:disabled="buttonCheck"
							@click="regButton()"
						>
							<v-icon>mdi-pencil-plus</v-icon>
						</v-btn>
						<v-spacer></v-spacer>
					</v-card-actions>
				</v-form>
			</v-card>
		</template>
	</v-dialog>
</template>

<script>
	export default {
		data: function() {
			return {
				dialog: false,
				pssAct: false, //Password hover boolean
				usrAct: false, //Username hover boolean
				showEye: false, //Icon password show boolean
				username: '', // Username (v-model) value
				password: '', // Password (v-model) value
				rules: {
					/* Vuetifyin kendi rulelarını ve borderları kırmızıya dondurmek icin*/
					required: (v) => !!v,
					min: (v) => v.length >= 8,
					max: (v) => v.length <= 16,
					min4: (v) => v.length >= 4,
					empty: (v) => v.length > 0,
				},
			};
		},
		methods: {
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
			resetForm() {
				this.username = '';
				this.password = '';
			},

			regButton() {
				this.resetForm();
				this.dialog = false;
				this.pssAct = false;
				this.usrAct = false;
				this.showEye = false;
				console.log(this.rules.min4);
			},
		},
		computed: {
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
			buttonCheck() {
				let buttonState = false;
				if (this.pssAct && this.usrAct && this.showLock) {
					buttonState = false;
				} else buttonState = true;
				return buttonState;
			},
		},
	};
</script>

<style scoped>
	.hint {
		color: #ff5252;
		justify-items: center;
		display: grid;
		align-items: start;
	}
</style>
