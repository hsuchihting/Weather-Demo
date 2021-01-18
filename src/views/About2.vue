<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>縣市預報</h2>
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
                <div class="card" v-if="tomorrow[0]">
                  <div class="card-body">
                    <h5 class="card-title">今晚明晨</h5>
                    <p>{{ tomorrow[0].status }}</p>
                    <p>
                      {{ tomorrow[0].minCelsius }}-{{ tomorrow[0].maxCelsius }}
                      °C
                    </p>
                    <p>降雨機率: {{ tomorrow[0].rain }} %</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card" v-if="tomorrow[1]">
                  <div class="card-body">
                    <h5 class="card-title">明日白天</h5>
                    <p>{{ tomorrow[1].status }}</p>
                    <p>
                      {{ tomorrow[1].minCelsius }}-{{ tomorrow[1].maxCelsius }}
                      °C
                    </p>
                    <p>降雨機率: {{ tomorrow[1].rain }} %</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card" v-if="tomorrow[2]">
                  <div class="card-body">
                    <h5 class="card-title">明日晚上</h5>
                    <p>{{ tomorrow[1].status }}</p>
                    <p>
                      {{ tomorrow[1].minCelsius }}-{{ tomorrow[1].maxCelsius }}
                      °C
                    </p>
                    <p>降雨機率: {{ tomorrow[1].rain }} %</p>
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
                <table class="table table-hover table-bordered">
                  <thead class="table-info">
                    <tr>
                      <th scope="col">
                        {{ selectedCity }}
                      </th>
                      <th
                        scope="col"
                        v-for="(item, index) in dayList"
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
                      <th class="table-info">白天</th>
                      <td v-for="(item, index) in weatherDay" :key="index">
                        <span>{{ item.status }}</span>
                        <p>{{ item.minCelsius }} - {{ item.maxCelsius }} °C</p>
                      </td>
                    </tr>
                    <tr class="night">
                      <th class="table-info">晚上</th>
                      <td v-for="(item, index) in weatherNight" :key="index">
                        <span>{{ item.status }}</span>
                        <p>{{ item.minCelsius }} - {{ item.maxCelsius }} °C</p>
                      </td>
                    </tr>
                    <tr class="rain">
                      <th class="table-info">降雨機率</th>
                      <td v-for="(item, index) in rainProbability" :key="index">
                        <span>{{ item }} %</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="一週溫度曲線">
              <h4>{{ selectedCity }}</h4>

              <div id="weekTemperature">
                <apexchart
                  type="line"
                  height="350"
                  :options="option1"
                  :series="series1"
                ></apexchart>
              </div>
            </b-tab>
          
          </b-tabs>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
let nomal36h =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&elementName=Wx,PoP,MinT,MaxT";
let taiwanWeek =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&elementName=MinT,MaxT,PoP12h,Wx";
import moment from "moment";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "About2",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series1: [],
      option1: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        colors: ["#F4511E", "#4DD0E1"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        dataLabels: {
          enabled: true,
        },
        markers: {
          size: 2,
          opacity: 0.9,
          colors: ["#56c2d6"],
          strokeColor: "#fff",
          strokeWidth: 2,
          style: "inverted",
          hover: {
            size: 7,
          },
        },
        title: {
          text: "一週溫度曲線",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#fff", "#eee"],
            opacity: 0.5,
          },
          borderColor: "#ccc",
        },
        xaxis: {
          title: {
            text: "日期",
          },
          categories: [],
        },
        yaxis: {
          title: {
            text: "溫度",
          },
          min: 0,
          max: 40,
        },
      },
     
      weatherItems: [],
      weatherWeekItems: [],
      weatherDay: [],
      weatherNight: [],
      rainProbability: [],
      status: [],
      selectedCity: "臺北市",
      getCityName: [
        "臺北市",
        "新北市",
        "桃園市",
        "基隆市",
        "臺中市",
        "新竹縣",
        "新竹市",
        "苗栗縣",
        "彰化縣",
        "南投縣",
        "臺南市",
        "高雄市",
        "雲林縣",
        "嘉義縣",
        "嘉義市",
        "屏東縣",
        "宜蘭縣",
        "花蓮縣",
        "臺東縣",
        "金門縣",
        "澎湖縣",
        "連江縣",
      ],
      tomorrow: [],
      dayList: [],
      dayTemp: [],
      nightTemp: [],
      dateTemp: [],
  
    };
  },
  computed: {},
  mounted() {
    this.getApi();
    this.getWeek();
  },
  methods: {
    getApi() {
      this.$http.get(nomal36h).then((res) => {
        this.weatherItems = res.data.records;
        this.getWeek();
      });
    },
    getWeek() {
      this.$http.get(taiwanWeek).then((res) => {
        this.weatherWeekItems = res.data.records;
        this.getData();
      });
    },
    getData() {
      this.tomorrow = [];
      if (!this.weatherItems) {
        return;
      }
      this.getCardData(" 18:00:00", 0);
      this.getCardData(" 06:00:00", 1);
      this.getCardData(" 18:00:00", 2);
      this.getTableData();
      this.getTemperature();
      // this.getRainProbability();
    },

    getCardData(format, d) {
      let locations = this.weatherItems.location;
      //選單對應
      let item = locations.find(
        (item) => item.locationName === this.selectedCity
      );

      let weatherDesc = item.weatherElement[0].time;
      let minT = item.weatherElement[2].time;
      let maxT = item.weatherElement[3].time;
      let rain = item.weatherElement[1].time;
      let date = moment().add(d, "days").format("YYYY-MM-DD");
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
      let minCelsius = minTItem ? Number(minTItem.parameter.parameterName) : "";
      let maxCelsius = maxTItem ? Number(maxTItem.parameter.parameterName) : "";

      //卡片資料
      this.tomorrow.push({
        status: weatherDescItem ? weatherDescItem.parameter.parameterName : "",
        //最低攝氏
        minCelsius: minCelsius,
        //最高攝氏
        maxCelsius: maxCelsius,
        //降雨機率
        rain: rainItem ? rainItem.parameter.parameterName : "",
      });

      // 縣市資料
      this.cities = [];
      this.cities.push({
        locationName: item.locationName,
      });
    },
    getTableData() {
      this.weatherDay = [];
      this.weatherNight = [];
      this.rainProbability = [];
      //取日期
      this.dayList = [];
      for (let i = 0; i < 7; i++) {
        let day = moment().add(i, "days");
        let week = day.format("E") * 1;
        this.dayList.push({
          date: day.format("MM/DD"),
          d: day.format("YYYY-MM-DD"), //驗證用
          week: this.toWeek(week * 1),
          holiday: week === 6 || week === 7,
        });
      }

      //取陣列資料
      let locations = this.weatherWeekItems.locations[0];

      //下拉選單地址與資料相同
      let locationData = locations.location.find(
        (item) => item.locationName === this.selectedCity
      );

      this.dayList.forEach((item) => {
        let date = item.d;
        let rain = locationData.weatherElement[0].time;
        let weatherDesc = locationData.weatherElement[1].time;
        let minT = locationData.weatherElement[2].time;
        let maxT = locationData.weatherElement[3].time;

        //* 白天
        //最高溫
        let maxTItem = maxT.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );
        //最低溫
        let minTItem = minT.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );
        //天氣說明
        let weatherDescItem = weatherDesc.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );

        //*晚上
        //最高溫
        let nightMaxTItem = maxT.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );
        //最低溫
        let nightMinTItem = minT.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );
        //天氣說明
        let weatherNightDescItem = weatherDesc.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );
        //降雨量
        let rainItem = rain.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );

        let rainNightItem = rain.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );

        this.weatherDay.push({
          status: weatherDescItem ? weatherDescItem.elementValue[0].value : "",
          minCelsius: minTItem ? Number(minTItem.elementValue[0].value) : "",
          maxCelsius: maxTItem ? Number(maxTItem.elementValue[0].value) : "",
        });

        this.weatherNight.push({
          status: weatherNightDescItem
            ? weatherNightDescItem.elementValue[0].value
            : "",
          minCelsius: nightMinTItem
            ? Number(nightMinTItem.elementValue[0].value)
            : "",
          maxCelsius: nightMaxTItem
            ? Number(nightMaxTItem.elementValue[0].value)
            : "",
        });

        this.rainProbability.push(
          rainItem
            ? rainItem.elementValue[0].value
            : ""
            ? rainNightItem.elementValue[0].value
            : ""
        );
      });
    },
    getTemperature() {
      this.tempDay = [];
      this.tempNight = [];
      this.series1 = [];
      this.option1 = {};
      let categories = [];
      // 取日期
      this.tempDateList = [];
      for (let i = 0; i < 7; i++) {
        let day = moment().add(i, "days");
        let week = day.format("E") * 1;
        this.tempDateList.push({
          date: day.format("MM/DD"),
          d: day.format("YYYY-MM-DD"), //驗證用
          week: this.toWeek(week * 1),
          holiday: week === 6 || week === 7,
        });
        categories.push(`${day.format("MM/DD")}`);
      }

      // 取資料
      let tempLocations = this.weatherWeekItems.locations[0];
      let tempLocationData = tempLocations.location.find(
        (item) => item.locationName === this.selectedCity
      );

      this.tempDateList.forEach((item) => {
        let date = item.d;
        let weatherDesc = tempLocationData.weatherElement[1].time;
        let minT = tempLocationData.weatherElement[2].time;
        let maxT = tempLocationData.weatherElement[3].time;

        //* 白天
        //最高溫
        let maxTItem = maxT.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );
        //最低溫
        let minTItem = minT.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );
        //天氣說明
        let weatherDescItem = weatherDesc.find(
          (dayTtime) => dayTtime.startTime === date + " 06:00:00"
        );

        //*晚上
        //最高溫
        let nightMaxTItem = maxT.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );
        //最低溫
        let nightMinTItem = minT.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );
        //天氣說明
        let weatherNightDescItem = weatherDesc.find(
          (dayTtime) => dayTtime.startTime === date + " 18:00:00"
        );

        this.tempDay.push({
          status: weatherDescItem ? weatherDescItem.elementValue[0].value : "",
          minCelsius: minTItem ? Number(minTItem.elementValue[0].value) : "",
          maxCelsius: maxTItem ? Number(maxTItem.elementValue[0].value) : "",
        });

        this.tempNight.push({
          status: weatherNightDescItem
            ? weatherNightDescItem.elementValue[0].value
            : "",
          minCelsius: nightMinTItem
            ? Number(nightMinTItem.elementValue[0].value)
            : "",
          maxCelsius: nightMaxTItem
            ? Number(nightMaxTItem.elementValue[0].value)
            : "",
        });

        let tempDashboard = {
          series1: [
            {
              name: "最高溫",
              data: this.tempDay.map((item) => {
                return item.maxCelsius || 0;
              }),
            },
            {
              name: "最低溫",
              data: this.tempNight.map((item) => {
                return item.minCelsius || 0;
              }),
            },
          ],
          option1: {
            xaxis: {
              categories: [],
            },
          },
        };

        this.series1 = tempDashboard.series1;

        this.option1.xaxis = {
          title: {
            text: "日期",
          },
          categories: categories,
        };
      });
    },
   
    toWeek(week) {
      switch (week) {
        case 1:
          return "星期一";
        case 2:
          return "星期二";
        case 3:
          return "星期三";
        case 4:
          return "星期四";
        case 5:
          return "星期五";
        case 6:
          return "星期六";
        case 7:
          return "星期日";
        default:
          return "";
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
.cards {
  margin-bottom: 3rem;
  .card {
    box-shadow: 0 0 5px 2px #ddd;
  }
}
table {
  margin-top: 1rem;
  width: 100%;
  background-color: #fff;
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
.nav-link {
  background-color: #fff;
}
</style>

