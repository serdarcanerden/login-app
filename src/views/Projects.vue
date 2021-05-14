<template>
	<div>
		<the-header></the-header>

		<div>
			<v-card class="mx-auto" outlined elevation="4" tile>
				<v-row align="center" class="ma-2">
					<v-col cols="12" sm="6">
						<v-text-field
							single-line
							outlined
							clearable
							filled
							v-model="name"
							type="string"
						>
							<template v-slot:label> {{ $t('name') }} </template>
						</v-text-field>
					</v-col>
					<v-col cols="12" sm="6">
						<v-text-field
							single-line
							outlined
							clearable
							filled
							v-model="surname"
							type="string"
						>
							<template v-slot:label> {{ $t('surname') }} </template>
						</v-text-field>
					</v-col>
				</v-row>
				<v-row class="ma-2">
					<v-col cols="12" sm="4">
						<v-text-field single-line clearable v-model="field" type="string">
							<template v-slot:label> {{ $t('field') }} </template>
						</v-text-field>
					</v-col>
					<v-col cols="12" sm="4">
						<v-text-field single-line clearable v-model="field1" type="string">
							<template v-slot:label>
								{{ $t('field1') }}
							</template>
						</v-text-field>
					</v-col>
					<v-col cols="12" sm="4">
						<v-text-field single-line clearable v-model="field2" type="string">
							<template v-slot:label> {{ $t('field2') }} </template>
						</v-text-field>
					</v-col>
				</v-row>

				<v-row align="center" justify="end">
					<v-btn class="mb-3" icon fab color="primary" plain @click="resetForm">
						<v-icon>
							mdi-refresh
						</v-icon>
					</v-btn>
					<v-btn
						class="mr-3 mb-3"
						icon
						fab
						color="primary"
						plain
						@click="addForm"
					>
						<v-icon>
							mdi-plus
						</v-icon>
					</v-btn>
				</v-row>
			</v-card>

			<v-card class="mx-auto mt-12" outlined elevation="4" tile> </v-card>
		</div>
	</div>
</template>

<script>
	import TheHeader from '../components/TheHeader';

	export default {
		components: {
			TheHeader,
		},

		data: function() {
			return {
				search: '',
				name: '',
				surname: '',
				field: '',
				field1: '',
				field2: '',
			};
		},
		methods: {
			addForm() {},
			resetForm() {
				this.name = '';
				this.surname = '';
				this.field = '';
				this.field1 = '';
				this.field2 = '';
			},
		},
	};
</script>

<style></style>
