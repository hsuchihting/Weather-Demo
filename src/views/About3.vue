<template>
  <div class="container">
    <h2>鄉鎮天氣預報</h2>
    <section>
      <div class="select">
        <label>
          <p>選擇縣市</p>
          <select v-model="selectedCity" @change="getCity">
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
        <div
          class="col-md-3"
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
              <p>{{ item.minCelsius }} - {{ item.maxCelsius }} °C</p>
              <p>{{ item.rain }}</p>
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

        </div>
		  <ul>

            <li>{{ ddd }}</li>
          </ul>
      </template>

      <!-- status modal text -->
    </b-modal>
    {{ ddd }}
  </div>
</template>

<script>
let weekWeather =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=";

import moment from "moment";
export default {
  name: "About3",
  data() {
    return {
      selectedCity: "",
      getCityName: [
        "",
        "臺北市",
        "新北市",
        "臺中市",
        "臺南市",
        "高雄市",
        "花蓮市",
        "金門縣",
      ],
      weatherItems: [],
      weatherList: [],
      cities: [],
      ddd: {
		  cityName:'',
        Wx: 0,
      },
      modal: false,
      changeCity: [
        "臺北市",
        "新北市",
        "臺中市",
        "臺南市",
        "高雄市",
        "花蓮市",
        "金門縣",
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
        console.log(this.weatherItems);
        this.getData();
      });
    },
    getData() {
      this.cities = [];
      let locations = this.weatherItems.locations[0].location;

      locations.forEach((item) => {
        let weatherDesc = item.weatherElement[6].time;
        let minT = item.weatherElement[8].time;
        let maxT = item.weatherElement[12].time;
        let rain = item.weatherElement[0].time;
        let locationName = item.locationName;
        if (this.changeCity.indexOf(locationName) >= 0) {
          let date = moment().format("YYYY-MM-DD");
          let format = " 06:00:00";
          let nowHour = moment().format("HH") * 1;
          console.log(nowHour);
          if (nowHour > 18) {
            format = " 06:00:00";
            date = moment()
              .add(1, "days")
              .format("YYYY-MM-DD");
          } else if (nowHour > 12) {
            format = " 18:00:00";
          }
          let maxTItem = maxT.find(
            (dayTtime) => dayTtime.startTime === date + format
          );
          console.log(maxT);
          console.log(maxTItem);
          console.log(date + format);
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

          let minCelsius = minTItem
            ? Number(minTItem.elementValue[0].value)
            : "";
          let maxCelsius = maxTItem
            ? Number(maxTItem.elementValue[0].value)
            : "";

          this.cities.push({
            locationName: item.locationName,
            status: weatherDescItem
              ? weatherDescItem.elementValue[0].value
              : "",
            //最低攝氏
            minCelsius: minCelsius,
            //最高攝氏
            maxCelsius: maxCelsius,
            rain: rainItem ? rainItem.elementValue[0].value : "",
          });
        }
      });
    },
    showModal(item) {
      this.modal = true;
	  this.ddd.cityName = item.locationName;
      console.log(this.ddd.cityName, item.locationName);
      console.log(item);
      console.log(this.ddd);
    },
    getCity() {
      this.changeCity = [];
      this.changeCity.push(this.selectedCity);
      this.getData();
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
