<template>
	<div>
		<the-header></the-header>

		<v-card>
			<!-- Slider part -->
			<v-tabs v-model="tab" background-color="primary" centered>
				<v-tabs-slider></v-tabs-slider>
				<v-tab href="#tab-1">
					<v-icon class="ma-1">mdi-plus-box-outline</v-icon>
					{{ $t('projectadd') }}
				</v-tab>

				<v-tab href="#tab-2">
					<v-icon class="ma-1">mdi-view-grid-outline</v-icon>
					{{ $t('projectview') }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item :key="1" :value="'tab-' + 1">
					<v-card class="mx-auto" tile>
						<v-form class="px-3">
							<!-- Name and surname row -->
							<v-row justify="center" class="ma-2">
								<v-col class="mr-4" sm="3">
									<v-text-field
										single-line
										clearable
										v-model="name"
										type="string"
									>
										<template v-slot:label> {{ $t('name') }} </template>
									</v-text-field>
								</v-col>
								<v-col sm="3">
									<v-text-field
										single-line
										clearable
										v-model="surname"
										type="string"
									>
										<template v-slot:label> {{ $t('surname') }} </template>
									</v-text-field>
								</v-col>
							</v-row>

							<!-- Second row for the 3 field part -->
							<v-row justify="center" class="ma-2">
								<!-- Date picker -->
								<v-col cols="12" sm="2">
									<v-menu
										ref="menu"
										v-model="menu"
										:close-on-content-click="false"
										:return-value.sync="date"
										transition="scale-transition"
										offset-y
										min-width="auto"
									>
										<template v-slot:activator="{ on, attrs }">
											<v-text-field
												v-model="date"
												prepend-icon="mdi-calendar"
												readonly
												v-bind="attrs"
												v-on="on"
											></v-text-field>
										</template>
										<v-date-picker v-model="date" no-title scrollable>
											<v-spacer></v-spacer>
											<v-btn text color="primary" @click="menu = false">
												Cancel
											</v-btn>
											<v-btn
												text
												color="primary"
												@click="$refs.menu.save(date)"
											>
												OK
											</v-btn>
										</v-date-picker>
									</v-menu>
								</v-col>
								<!-- Field - 1 -->
								<v-col cols="12" sm="2">
									<v-text-field
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
								<!-- Field 2 -->
								<v-col cols="12" sm="2">
									<v-text-field
										single-line
										clearable
										v-model="field2"
										type="string"
									>
										<template v-slot:label> {{ $t('field2') }} </template>
									</v-text-field>
								</v-col>
							</v-row>
							<!-- Comment Field row -->
							<v-row justify="center">
								<v-col class="ma-2" cols="12" sm="6">
									<v-textarea clearable v-model="commentfield" type="string">
										<template v-slot:label> {{ $t('commentfield') }} </template>
									</v-textarea>
								</v-col>
							</v-row>
							<!-- Buttons to refresh the form and submit -->
							<v-row align="center" justify="end">
								<v-btn
									class="mb-3"
									icon
									color="primary"
									plain
									@click="resetForm"
								>
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
						</v-form>
					</v-card>
				</v-tab-item>
				<v-tab-item :key="2" :value="'tab-' + 2">
					<v-card flat>
						<project-view></project-view>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>
</template>

<script>
	import TheHeader from '../components/TheHeader.vue';
	import ProjectView from '../components/ProjectView.vue';
	import { addData } from '../fakedata/data.js';
	export default {
		components: {
			TheHeader,
			ProjectView,
		},

		data() {
			return {
				search: '',
				name: '',
				surname: '',
				field1: '',
				field2: '',
				commentfield: '',
				tab: null,
				items: [{ tab: this.$i18n.t('projectadd') }, { tab: 'Two' }],
				date: new Date().toISOString().substr(0, 10),
				menu: false,
				modal: false,
				menu2: false,
			};
		},

		methods: {
			addForm() {
				addData(
					this.name,
					this.surname,
					this.date,
					this.field1,
					this.field2,
					this.commentfield
				);
			},
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
