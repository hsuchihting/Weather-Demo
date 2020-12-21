<template>
	<div class="container">
		<h2>鄉鎮天氣預報</h2>
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

		<div class="cards">
			<div class="row">
				<div class="col-md-3">
					<div class="card">
						<div class="card-body" v-for="(item, index) in cities" :key="index">
							<h3 class="card-title">
								{{ item.locationName }}
							</h3>
							<p>{{ item.status }}</p>
							<p>{{ item.description }}</p>
							<p>{{ item.minCelsius }} - {{ item.maxCelsius }} °C</p>
							<p>{{ item.timeFrom }}~{{ item.timeTo }}</p>
							<p>{{ item.PoP12h }}</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card" @click="showModal" v-b-modal="'statusModal'">
						<div class="card-body">
							<h3 class="card-title">高雄市</h3>
							<p>多雲時晴</p>
							<p>17-18 度</p>
							<p>降雨機率: 90%</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card">
						<div class="card-body">
							<h3 class="card-title">台中市</h3>
							<p>多雲時晴</p>
							<p>17-18 度</p>
							<p>降雨機率: 90%</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card">
						<div class="card-body">
							<h3 class="card-title">台中市</h3>
							<p>多雲時晴</p>
							<p>17-18 度</p>
							<p>降雨機率: 90%</p>
						</div>
					</div>
				</div>

				<div class="col-md-3">
					<div class="card">
						<div class="card-body">
							<h3 class="card-title">台中市</h3>
							<p>多雲時晴</p>
							<p>17-18 度</p>
							<p>降雨機率: 90%</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<b-modal
			id="statusModal"
			header-bg-variant="primary"
			header-close-variant="white"
		>
			<template slot="modal-title">
				<div class="text-white">
					<span>title</span>
				</div>
			</template>

			<!-- status modal text -->
		</b-modal>
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
			weatherItems: [],
			weatherList: [],
			cities: [],
			id: 0,
			modal: false,
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
				console.log(this.weatherItems);
				this.getData();
			});
		},
		getData() {},
		showModal() {
			this.modal = true;
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
</style>
