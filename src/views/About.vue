<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card-box">
					<div class="text ">
						<h2 class="title">{{ getSubject }}</h2>
						<p class="time">有效時間: {{ getTimeNow }}~{{ setLastTime }}</p>
					</div>

					<!-- nav-tab -->
					<section>
						<b-nav class="tab" tabs justified>
							<b-nav-item>
								<a href="#taiwan">
									全臺
								</a>
							</b-nav-item>
							<b-nav-item>
								<a href="#north">
									北部
								</a>
							</b-nav-item>
							<b-nav-item>
								<a href="#middle">
									中部
								</a>
							</b-nav-item>
							<b-nav-item>
								<a href="#south">
									南部
								</a>
							</b-nav-item>
							<b-nav-item>
								<a href="#east">
									東部
								</a>
							</b-nav-item>
							<b-nav-item>
								<a href="#other">
									外島
								</a>
							</b-nav-item>
						</b-nav>
					</section>

					<!-- table -->
					<section>
						<div class="table">
							<b-table
								table-class="text-center"
								ref="table"
								:fields="weekField"
								:items="weatherItems"
								bordered
								responsive
								striped
								hover
								no-border-collapse
							>
								<template v-slot:cell(loactionName)="data">
									{{ getLocation(data.value) }}
								</template>
								<template v-slot:cell(time)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_0)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_1)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_2)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_3)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_4)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_5)="data">
									{{ data.value }}
								</template>
								<template v-slot:cell(day_6)="data">
									{{ data.value }}
								</template>
							</b-table>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
let weather =
	'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45';
export default {
	name: 'About',
	data() {
		return {
			weekField: [
				{
					key: 'locationName',
					label: '縣市',
					sortable: false,
				},
				{
					key: 'time',
					label: '時間',
					sortable: false,
				},
				{
					key: 'day_0',
					label: '今天',
					sortable: false,
				},
				{
					key: 'day_1',
					label: '今天',
					sortable: false,
				},
				{
					key: 'day_2',
					label: '今天',
					sortable: false,
				},
				{
					key: 'day_3',
					label: '今天',
					sortable: false,
				},
				{
					key: 'day_4',
					label: '今天',
					sortable: false,
				},
				{
					key: 'day_5',
					label: '今天',
					sortable: false,
				},
				{
					key: 'day_6',
					label: '今天',
					sortable: false,
				},
			],
			weatherItems: [],
			subject: null,
			timeNow: '',
			timeAfterWeenk: '',
		};
	},
	computed: {
		getSubject() {
			let subjectTitle = null;
			for (let item of this.weatherItems) {
				subjectTitle = item.datasetDescription;
			}
			return subjectTitle;
		},
		getTimeNow() {
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let days = date.getDate();
			let hour = date.getHours();
			let mins = date.getMinutes();
			let sec = date.getSeconds();
			let clockJSRead = `${year}/${month}/${days} ${hour}:${mins}:${sec}`;
			return clockJSRead;
		},
		setLastTime() {
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let days = date.getDate() + 7;
			let hour = date.getHours();
			let mins = date.getMinutes();
			let sec = date.getSeconds();
			let clockJSRead = `${year}/${month}/${days} ${hour}:${mins}:${sec}`;
			return clockJSRead;
		},
	},
	created() {
		this.getApi();
	},
	methods: {
		getApi() {
			this.$http.get(weather).then((res) => {
				this.weatherItems = res.data.records.locations;
				// console.log(this.weatherItems);
			});
		},
		getLocation() {
			let coutyName = null;
			for (let item of this.weatherItems) {
				for (let couty of item.location) {
					console.log(couty);
					coutyName = coury.locationName;
				}
			}
			return coutyName;
		},
	},
};
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
}
.text {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.title {
		font-size: 24px;
	}
	.time {
		font-size: 16px;
	}
	.title,
	.time {
		margin-bottom: 0;
	}
}

.tab {
	margin-top: 1rem;
	.nav-item {
		background-color: #fff;
		border-right: 1px solid #eee;
		border-left: 1px solid #eee;
	}
}
.table {
	margin-top: 1rem;
	th {
		background-color: #fff;
	}
}
</style>
