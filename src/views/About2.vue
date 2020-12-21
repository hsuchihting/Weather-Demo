<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h2>{{ getSubject }}</h2>
				<section>
					<div class="select">
						<label>
							<p>選擇縣市</p>
							<select v-model="selectedCity" @change="getData">
								<option
									:value="city"
									v-for="(city, index) in getCityName"
									:key="index"
								>
									{{ city }}
								</option>
							</select>
						</label>
					</div>
				</section>

				<!-- cards -->
				<section>
					<div class="cards">
						<div class="row">
							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<h5 class="card-title">今晚明晨</h5>
										<p>{{ tomorrow[0].status }}</p>
										<p>
											{{ tomorrow[0].minCelsius }}-{{ tomorrow[0].maxCelsius }}
											度
										</p>
										<p>降雨機率: {{ tomorrow[0].rain }}%</p>
									</div>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<h5 class="card-title">明日白天</h5>
										<p>{{ tomorrow[1].status }}</p>
										<p>
											{{ tomorrow[1].minCelsius }}-{{ tomorrow[1].maxCelsius }}
											度
										</p>
										<p>降雨機率: {{ tomorrow[1].rain }}%</p>
									</div>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<h5 class="card-title">明日晚上</h5>
										<p>{{ tomorrow[2].status }}</p>
										<p>
											{{ tomorrow[2].minCelsius }}-{{ tomorrow[2].maxCelsius }}
											度
										</p>
										<p>降雨機率: {{ tomorrow[2].rain }}%</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<!-- table -->
				<section>
					<b-tabs content-class="mt-3" fill>
						<b-tab title="一週預報" active>
							<div class="table-responsive">
								<table class="table table-hover table-bordered" id="taiwan">
									<thead
										class="table-primary"
										v-for="(item, index) in cities"
										:key="index"
									>
										<tr>
											<th scope="col">
												{{ item.locationName }}
											</th>
											<th
												scope="col"
												v-for="(item, index) in daylist"
												:key="index"
												:class="{ holiday: item.holiday }"
											>
												<span>{{ item.date }}</span>
												<br />
												<span>{{ item.week }}</span>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr class="day">
											<th class="table-primary">白天</th>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
										</tr>
										<tr class="night">
											<th class="table-primary">晚上</th>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>16 - 18 度</p>
											</td>
										</tr>
										<tr class="rain">
											<th class="table-primary">降雨機率</th>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
											<td>
												<span>陰有雨</span>
												<p>10 度</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</b-tab>
						<b-tab title="一週溫度曲線">
							<h4>新北市</h4>

							<div>
								<apexchart
									width="1100"
									type="line"
									:options="options"
									:series="series"
								></apexchart>
							</div>
						</b-tab>
						<b-tab title="一週降雨機率">
							<h4>新北市</h4>

							<apexchart
								width="1100"
								type="line"
								:options="options"
								:series="series"
							></apexchart>
						</b-tab>
					</b-tabs>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
let nomal36h =
	'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=Wx,PoP,MinT,MaxT';

let taiwanWeek =
	'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E6%BE%8E%E6%B9%96%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=MinT,MaxT,PoP12h';
import moment from 'moment';

import VueApexCharts from 'vue-apexcharts';
export default {
	name: 'About2',
	data() {
		return {
			options: {
				chart: {
					id: 'vuechart-example',
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
				},
			},
			series: [
				{
					name: 'Vue Chart',
					data: [30, 40, 45, 50, 49, 60, 70, 81],
				},
			],
			weatherItems: [],
			selectedCity: '臺北市',
			getCityName: [
				'臺北市',
				'新北市',
				'臺中市',
				'臺南市',
				'高雄市',
				'花蓮市',
				'金門縣',
			],
			tomorrow: [],
		};
	},
	computed: {
		getSubject() {
			let subjectTitle = null;
			subjectTitle = this.weatherItems.datasetDescription;
			return subjectTitle;
		},
	},
	mounted() {
		this.getApi();
		this.getWeek();
	},
	methods: {
		updateChart() {
			const max = 90;
			const min = 20;
			const newData = this.series[0].data.map(() => {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			});
			// In the same way, update the series option
			this.series = [
				{
					data: newData,
				},
			];
		},
		getApi() {
			this.$http.get(nomal36h).then((res) => {
				this.weatherItems = res.data.records;
				// console.log(this.weatherItems);
				this.getData();
			});
		},
		getWeek() {
			this.$http.get(taiwanWeek).then((res) => {
				this.weatherWeekItems = res.data.records;
				// console.log(this.weatherWeekItems);
				this.getData();
			});
		},
		getData() {
			this.tomorrow = [];
			this.getCardData(' 18:00:00', 1);
			this.getCardData(' 06:00:00', 1);
			this.getCardData(' 18:00:00', 2);
			this.getTableData(' 18:00:00');
		},
		getCardData(format, d) {
			let locations = this.weatherItems.location;

			//選單對應
			let item = locations.find(
				(item) => item.locationName === this.selectedCity
			);

			let weatherDec = item.weatherElement[0].time;
			let minT = item.weatherElement[2].time;
			let maxT = item.weatherElement[3].time;
			let rain = item.weatherElement[1].time;
			let date = moment()
				.add(d, 'days')
				.format('YYYY-MM-DD');

			//最高溫
			let maxTItem = maxT.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			//最低溫
			let minTItem = minT.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			//天氣說明
			let weatherDecItem = weatherDec.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			//降雨量
			let rainItem = rain.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			let minCelsius = minTItem ? Number(minTItem.parameter.parameterName) : '';
			let maxCelsius = maxTItem ? Number(maxTItem.parameter.parameterName) : '';
			this.tomorrow.push({
				status: weatherDecItem ? weatherDecItem.parameter.parameterName : '',
				//最低攝氏
				minCelsius: minCelsius,
				//最高攝氏
				maxCelsius: maxCelsius,
				rain: rainItem ? rainItem.parameter.parameterName : '',
			});

			//取日期
			this.daylist = [];
			for (let i = 0; i < 7; i++) {
				let day = moment().add(i, 'days');
				let week = day.format('E') * 1;
				this.daylist.push({
					date: day.format('MM/DD'),
					d: day.format('YYYY-MM-DD'), //驗證用
					week: this.toWeek(week * 1),
					holiday: week === 6 || week === 7,
				});
			}

			// 縣市資料
			this.cities = [];
			this.cities.push({
				locationName: item.locationName,
				// weatherDay: weatherDay,
				// weatherNight: weatherNight,
				// weatherAvg: weatherAvg,
			});
		},
		getTableData(format) {
			let locations = this.weatherWeekItems[0].location;
			console.log(locations);
			let item = locations.find(
				(item) => item.location.locationName === this.selectedCity
			);
			console.log(item);
			let weatherDec = item.weatherElement[0].time;
			let minT = item.weatherElement[2].time;
			let maxT = item.weatherElement[3].time;
			let rain = item.weatherElement[1].time;
			let date = moment()
				.add(d, 'days')
				.format('YYYY-MM-DD');

			//最高溫
			let maxTItem = maxT.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			//最低溫
			let minTItem = minT.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			//天氣說明
			let weatherDecItem = weatherDec.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			//降雨量
			let rainItem = rain.find(
				(dayTtime) => dayTtime.endTime === date + format
			);

			let minCelsius = minTItem ? Number(minTItem.parameter.parameterName) : '';
			let maxCelsius = maxTItem ? Number(maxTItem.parameter.parameterName) : '';
			this.tomorrow.push({
				status: weatherDecItem ? weatherDecItem.parameter.parameterName : '',
				//最低攝氏
				minCelsius: minCelsius,
				//最高攝氏
				maxCelsius: maxCelsius,
				rain: rainItem ? rainItem.parameter.parameterName : '',
			});

			//取日期
			this.daylist = [];
			for (let i = 0; i < 7; i++) {
				let day = moment().add(i, 'days');
				let week = day.format('E') * 1;
				this.daylist.push({
					date: day.format('MM/DD'),
					d: day.format('YYYY-MM-DD'), //驗證用
					week: this.toWeek(week * 1),
					holiday: week === 6 || week === 7,
				});
			}

			this.cities = [];
			this.cities.push({
				locationName: item.locationName,
				// weatherDay: weatherDay,
				// weatherNight: weatherNight,
				// weatherAvg: weatherAvg,
			});
		},
		toWeek(week) {
			switch (week) {
				case 1:
					return '星期一';
				case 2:
					return '星期二';
				case 3:
					return '星期三';
				case 4:
					return '星期四';
				case 5:
					return '星期五';
				case 6:
					return '星期六';
				case 7:
					return '星期日';
				default:
					return '';
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.select {
	padding: 2rem 0;
	label {
		display: flex;
		align-items: center;
		p {
			display: block;
			margin-bottom: 0;
			font-size: 18px;
			font-weight: bold;
			margin-right: 2rem;
		}
		select {
			width: 90%;
			padding: 10px 10px;
			border: 1px solid #ccc;
			outline: none;
			border-radius: 6px;
		}
	}
}
img {
	width: 60%;
	padding: 1rem 0 2rem;
}
.cards {
	margin-bottom: 3rem;
}
table {
	margin-top: 1rem;
	width: 100%;
	th,
	td {
		vertical-align: middle;
		text-align: center;
		p {
			margin-bottom: 0;
		}
	}
}
.holiday {
	background-color: #f4511e;
	color: #fff;
}
</style>
