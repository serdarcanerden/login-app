<template>
	<div>
		<the-header></the-header>

		<v-card>
			<v-tabs v-model="tab" background-color="accent" centered>
				<v-tabs-slider></v-tabs-slider>
				<v-tab href="#tab-1">
					<v-icon class="ma-1">mdi-plus-box-outline</v-icon>
					{{ $t('projectadd') }}
				</v-tab>

				<v-tab small href="#tab-2">
					<v-icon>mdi-view-grid-outline</v-icon>
					{{ $t('projectview') }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item :key="1" :value="'tab-' + 1">
					<v-card flat>
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
								<v-text-field
									filled
									single-line
									clearable
									v-model="field"
									type="string"
								>
									<template v-slot:label> {{ $t('field') }} </template>
								</v-text-field>
							</v-col>
							<v-col cols="12" sm="4">
								<v-text-field
									filled
									single-line
									clearable
									v-model="field1"
									type="string"
								>
									<template v-slot:label>
										{{ $t('field1') }}
									</template>
								</v-text-field>
							</v-col>
							<v-col cols="12" sm="4">
								<v-text-field
									filled
									single-line
									clearable
									v-model="field2"
									type="string"
								>
									<template v-slot:label> {{ $t('field2') }} </template>
								</v-text-field>
							</v-col>
						</v-row>

						<v-row justify="center">
							<v-col class="ma-2" cols="12" sm="10">
								<v-textarea
									filled
									clearable
									v-model="commentfield"
									type="string"
								>
									<template v-slot:label> {{ $t('commentfield') }} </template>
								</v-textarea>
							</v-col>
						</v-row>

						<v-row align="center" justify="end">
							<v-btn class="mb-3" icon color="primary" plain @click="resetForm">
								<v-icon>
									mdi-refresh
								</v-icon>
							</v-btn>
							<v-btn
								class="mr-4 mb-3"
								icon
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
				</v-tab-item>
				<v-tab-item :key="2" :value="'tab-' + 2">
					<v-card flat>
						<v-card-text>PROJE GÖR</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>
</template>

<script>
	import TheHeader from '../components/TheHeader';

	export default {
		components: {
			TheHeader,
		},
		data() {
			return {
				search: '',
				name: '',
				surname: '',
				field: '',
				field1: '',
				field2: '',
				commentfield: '',
				tab: null,
				items: [{ tab: this.$i18n.t('projectadd') }, { tab: 'Two' }],
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
				this.commentfield = '';
			},
		},
	};
</script>

<style></style>
