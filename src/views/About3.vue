<template>
	<div class="container">
		<h2>鄉鎮天氣預報</h2>
		<!-- select -->
		<section>
			<div class="select">
				<label>
					<p>選擇縣市</p>
					<select v-model="selectedCity" @change="getCity">
						<option value="null" disabled>-- 請選擇城市 --</option>
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

		<!-- card -->
		<section>
			<div class="cards">
				<div class="row">
					<div
						class="col-md-4 col-lg-3"
						v-for="(item, index) in cities"
						:key="index"
						@click="showModal(item)"
						v-b-modal="'statusModal'"
					>
						<div class="card">
							<div class="card-body">
								<h3 class="card-title">
									{{ item.locationName }}
								</h3>
								<p>{{ item.status }}</p>
								<p>溫度：{{ item.minCelsius }} - {{ item.maxCelsius }} °C</p>
								<p>降雨機率：{{ item.rain }} %</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- modal -->
		<section>
			<b-modal
				id="statusModal"
				header-bg-variant="primary"
				header-close-variant="white"
			>
				<template slot="modal-title">
					<div class="text-white">
						{{ detail.cityName }}
					</div>
				</template>
				<ul>
					<li>天氣現象：{{ detail.Wx }}</li>
					<li>12 小時降雨機率：{{ detail.PoP12h }} %</li>
					<li>平均溫度：{{ detail.T }} °C</li>
					<li>平均相對溼度：{{ detail.RH }} %</li>
					<li>最小舒適指數：{{ detail.MinCI }}</li>
					<li>最大舒適指數：{{ detail.MaxCI }}</li>
					<li>最大風速：{{ detail.WS }} 公尺 / 秒</li>
					<li>最高體感溫度：{{ detail.MaxAT }} °C</li>
					<li>最高溫度：{{ detail.MaxT }} °C</li>
					<li>最低溫度：{{ detail.MinT }} °C</li>
					<li>紫外線指數：{{ detail.UVI }}</li>
					<li>天氣預報綜合描述：{{ detail.WeatherDescription }}</li>
					<li>風向：{{ detail.WD }}</li>
					<li>平均露點溫度：{{ detail.Td }} °C</li>
				</ul>
			</b-modal>
		</section>
	</div>
</template>

<script>
let weekWeather =
	'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=';

import moment from 'moment';
export default {
	name: 'About3',
	data() {
		return {
			selectedCity: 'null',
			getCityName: [
				'全臺縣市',
				'臺北市',
				'新北市',
				'臺中市',
				'臺南市',
				'高雄市',
				'花蓮縣',
				'金門縣',
			],
			weatherItems: [],
			cities: [],
			detail: {
				cityName: '',
			},
			modal: false,
			changeCity: [
				'全臺縣市',
				'臺北市',
				'新北市',
				'臺中市',
				'臺南市',
				'高雄市',
				'花蓮縣',
				'金門縣',
			],
		};
	},
	computed: {},
	mounted() {
		this.getApi();
	},
	methods: {
		getApi() {
			this.$http.get(weekWeather).then((res) => {
				this.weatherItems = res.data.records;
				// console.log(this.weatherItems);
				this.getData();
			});
		},
		getData() {
			this.cities = [];
			let locations = this.weatherItems.locations[0].location;

			locations.forEach((item) => {
				let locationName = item.locationName;
				let rain = item.weatherElement[0].time;
				let avgT = item.weatherElement[1].time;
				let rh = item.weatherElement[2].time;
				let minCi = item.weatherElement[3].time;
				let ws = item.weatherElement[4].time;
				let maxAt = item.weatherElement[5].time;
				let weatherDesc = item.weatherElement[6].time;
				let maxCi = item.weatherElement[7].time;
				let minT = item.weatherElement[8].time;
				let uvi = item.weatherElement[9].time;
				let weatherDescDetail = item.weatherElement[10].time;
				let minAt = item.weatherElement[11].time;
				let maxT = item.weatherElement[12].time;
				let wd = item.weatherElement[13].time;
				let td = item.weatherElement[14].time;

				if (this.changeCity.indexOf(locationName) >= 0) {
					let date = moment().format('YYYY-MM-DD');
					let format = ' 06:00:00';
					let nowHour = Number(moment().format('HH'));
					// 取得時間區間
					if (nowHour > 18) {
						format = ' 06:00:00';
						date = moment()
							.add(1, 'days')
							.format('YYYY-MM-DD');
					} else if (nowHour > 12) {
						format = ' 18:00:00';
					}

					//*資料內容
					//最高溫
					let maxTItem = maxT.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//最低溫
					let minTItem = minT.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//天氣說明
					let weatherDescItem = weatherDesc.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//降雨量
					let rainItem = rain.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//均溫
					let avgTItem = avgT.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//濕度
					let rhItem = rh.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//最小舒適指數
					let minCiItem = minCi.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//最大風速
					let wsItem = ws.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					// 最高體感溫度
					let maxAtItem = maxAt.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					// 最大舒適指
					let maxCiItem = maxCi.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//紫外線
					let uviItem = uvi.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//天氣狀況詳述
					let weatherDescDetailItem = weatherDescDetail.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					// 最高體感溫度：
					let minAtItem = minAt.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					// 風向
					let wdItem = wd.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					// 平均露點溫度
					let tdItem = td.find(
						(dayTtime) => dayTtime.startTime === date + format
					);
					//最低溫
					let minCelsius = minTItem
						? Number(minTItem.elementValue[0].value)
						: '';
					//最高溫
					let maxCelsius = maxTItem
						? Number(maxTItem.elementValue[0].value)
						: '';

					this.cities.push({
						locationName: item.locationName,
						status: weatherDescItem
							? weatherDescItem.elementValue[0].value
							: '',
						minCelsius: minCelsius,
						maxCelsius: maxCelsius,
						rain: rainItem ? rainItem.elementValue[0].value : '',
						avgTemp: avgTItem ? avgTItem.elementValue[0].value : '',
						statusDetail: weatherDescDetailItem
							? weatherDescDetailItem.elementValue[0].value
							: '',
						avghumidity: rhItem ? rhItem.elementValue[0].value : '',
						minComfort: minCiItem ? minCiItem.elementValue[0].value : '',
						maxComfort: maxCiItem ? maxCiItem.elementValue[0].value : '',
						maxWindSpeed: wsItem ? wsItem.elementValue[0].value : '',
						maxFeel: maxAtItem ? maxAtItem.elementValue[0].value : '',
						uvi: uviItem ? uviItem.elementValue[0].value : '',
						windDirection: wdItem ? wdItem.elementValue[0].value : '',
						dewPoint: tdItem ? tdItem.elementValue[0].value : '',
					});
				}
			});
		},
		showModal(item) {
			// console.log(item);
			this.modal = true;
			this.detail.cityName = item.locationName;
			this.detail.WeatherDescription = item.statusDetail;
			this.detail.PoP12h = item.rain;
			this.detail.T = item.avgTemp;
			this.detail.Wx = item.status;
			this.detail.RH = item.avghumidity;
			this.detail.MinCI = item.minComfort;
			this.detail.MaxCI = item.maxComfort;
			this.detail.WS = item.maxWindSpeed;
			this.detail.maxAt = item.maxFeel;
			this.detail.MaxT = item.maxCelsius;
			this.detail.MinT = item.minCelsius;
			this.detail.UVI = item.uvi;
			this.detail.WD = item.windDirection;
			this.detail.Td = item.dewPoint;
		},
		getCity() {
			if (this.selectedCity === '全臺縣市') {
				this.changeCity = this.getCityName;
			} else {
				this.changeCity = [];
				this.changeCity.push(this.selectedCity);
			}
			this.getData();

			//如果選全台就回傳全部資料，或是選到對應的縣市
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
.card {
	outline: none;
	margin: 0 1rem 3rem;
}
</style>
