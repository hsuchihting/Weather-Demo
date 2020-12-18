<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card-box">
					<div class="text ">
						<h2 class="title">{{ getSubject }}</h2>
						<p class="time">有效時間: {{ getTimeNow }} ~ {{ setLastTime }}</p>
						<button
							type="button"
							class="btn btn-primary"
							@click="changeTemperature"
						>
							°C <i class="fas fa-exchange-alt"></i> ℉
						</button>
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
						<!-- <b-table
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
							<template v-slot:cell(time)="">
								<p>白天</p>
								<p>晚上</p>
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
						</b-table> -->
						<table
							class="table Sticky table-responsive table-striped table-hover"
						>
							<thead>
								<tr>
									<th scope="col">縣市</th>
									<th scope="col">時間</th>
									<th scope="col">
										<p>
											{{ time_0 }}
											<br />
											{{ day_0 }}
										</p>
									</th>
									<th scope="col">
										<p>
											{{ time_1 }}
											<br />
											{{ day_1 }}
										</p>
									</th>
									<th scope="col">
										<p>
											{{ time_2 }}
											<br />
											{{ day_2 }}
										</p>
									</th>
									<th scope="col">
										<p>
											{{ time_3 }}
											<br />
											星期一
										</p>
									</th>
									<th scope="col">day4</th>
									<th scope="col">day5</th>
									<th scope="col">day6</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in getLocation" :key="index">
									<th rowspan="1">{{ item.locationName }}</th>
									<td>
										<tr>
											白天
										</tr>
										<tr>
											晚上
										</tr>
									</td>
									<td>{{item}}</td>
								</tr>

								<tr class="day"></tr>
								<tr class="night"></tr>
							</tbody>
						</table>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
let weather =
	'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E6%BE%8E%E6%B9%96%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E9%80%A3%E6%B1%9F%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82,%E6%96%B0%E7%AB%B9%E5%B8%82&elementName=MinT,MaxT,T,RH';
export default {
	name: 'About',
	data() {
		return {
			// weekField: [
			// 	{
			// 		key: 'locationName',
			// 		label: '縣市',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'time',
			// 		label: '時間',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_0',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_1',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_2',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_3',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_4',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_5',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// 	{
			// 		key: 'day_6',
			// 		label: '今天',
			// 		sortable: false,
			// 	},
			// ],
			weatherItems: [],
			subject: null,
			timeNow: '',
			timeAfterWeenk: '',
			Celsius: 0,
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
		getLocation() {
			let couty = [];
			for (const item of this.weatherItems) {
				return (couty = item.location);
			}
		},
		time_0() {
			let date = new Date();
			let month = date.getMonth() + 1;
			let days = date.getDate();
			let dateRead = `${month}/${days}`;
			return dateRead;
		},
		day_0() {
			let date = new Date();
			let day = date.getDay();
			let dayRead = `星期${day}`;
			return dayRead;
		},
		time_1() {
			let date = new Date();
			let month = date.getMonth() + 1;
			let days = date.getDate() + 1;
			let dateRead = `${month}/${days}`;
			return dateRead;
		},
		day_1() {
			let date = new Date();
			let day = date.getDay() + 1;
			let dayRead = `星期${day}`;
			return dayRead;
		},
		time_2() {
			let date = new Date();
			let month = date.getMonth() + 1;
			let days = date.getDate() + 2;
			let dateRead = `${month}/${days}`;
			return dateRead;
		},
		day_2() {
			let date = new Date();
			let day = date.getDay() + 2;
			let dayRead = `星期${day}`;
			return dayRead;
		},
		time_3() {
			const week = [];
			for (let i = 0; i < 7; i++) {
				let Stamp = new Date();
				let num = 7 - Stamp.getDay() + 1 + i;
				Stamp.setDate(Stamp.getDate() + num);
				week[i] = Stamp.getMonth() + 1 + '/' + Stamp.getDate();
				console.log(week[i]);
				return week[i];
			}
		},
		day_3() {
			const day = [];
			for (let i = 0; i < 7; i++) {
				let date = new Date();
				let day = 7 - date.getDay() + 1 + i;
				date.setDate(date.getDay() + day);
				day[i] = date.getDay();
				console.log('星期' + day[i]);
				// return dayRead;
			}
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
		changeTemperature() {
			// celsius:{
			// 	get(){
			// 	return (5 / 9) * (fahrenheit - 32);
			// 	},
			// 		set(val){
			// 	return (9/5) * (val + 32);
			// 	}
			// }
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

	p {
		margin-bottom: 0;
	}
}
</style>
