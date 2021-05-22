<template>
	<div>
		<DxDataGrid
			:data-source="Data"
			:selection="{ mode: 'single' }"
			:show-borders="true"
			:hover-state-enabled="true"
			key-expr="ID"
			@selection-changed="onSelectionChanged"
		>
			<DxColumn data-field="FirstName" />
			<DxColumn data-field="LastName" />
			<DxColumn data-field="Date" data-type="date" />
			<DxColumn data-field="field1" />
			<DxColumn data-field="field2" />
		</DxDataGrid>
		<div v-if="showDataInfo" id="Data-info">
			<p class="Data-notes">{{ selectedRowNotes }}</p>
		</div>
	</div>
</template>

<script>
	import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
	import { Data } from '../fakedata/data.js';

	export default {
		components: {
			DxDataGrid,
			DxColumn,
		},
		data() {
			return {
				showDataInfo: false,
				selectedRowNotes: '',
				selectedRowPicture: '',
				Data,
			};
		},
		methods: {
			onSelectionChanged({ selectedRowsData }) {
				const data = selectedRowsData[0];

				this.showDataInfo = !!data;
				this.selectedRowNotes = data && data.Notes;
				this.selectedRowPicture = data && data.Picture;
			},
		},
	};
</script>

<style scoped>
	#Data-info .Data-photo {
		height: 100px;
		float: left;
		padding: 20px;
	}
	#Data-info .Data-notes {
		padding-top: 20px;
		text-align: justify;
	}
	.dark #Data-info .Data-notes {
		color: rgb(181, 181, 181);
	}
</style>
