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
                  <thead class="table-primary sticky-top">
                    <tr>
                      <th scope="col">新北市</th>
                      <th scope="col">
                        <span>12/19</span>
                        <br />
                        <span>星期六</span>
                      </th>
                      <th scope="col">星期天</th>
                      <th scope="col">星期一</th>
                      <th scope="col">星期二</th>
                      <th scope="col">星期三</th>
                      <th scope="col">星期四</th>
                      <th scope="col">星期五</th>
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
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=Wx,PoP,MinT,MaxT";

let taiwanWeek =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E6%BE%8E%E6%B9%96%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=MinT,MaxT,PoP12h";
import moment from "moment";

import VueApexCharts from "vue-apexcharts";
export default {
  name: "About2",
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "Vue Chart",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
      weatherItems: [],
      selectedCity: "臺北市",
      getCityName: ["臺北市", "新北市"],
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
  created() {
    this.getApi();
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
        console.log(this.weatherItems);
        this.getData();
      });
    },
    getData() {
      this.tomorrow = [];
      this.getData2(' 06:00:00',1);
      this.getData2(' 18:00:00',1);
      this.getData2(' 06:00:00',2);

    },
    getData2(ff,d) {
      let locations = this.weatherItems.location;

      let item = locations.find(
        (item) => item.locationName === this.selectedCity
      );
      console.log(item);
      let weatherDec = item.weatherElement[0].time;
      let minT = item.weatherElement[2].time;
      let maxT = item.weatherElement[3].time;
      let rain = item.weatherElement[1].time;
      let date = moment()
        .add(d, "days")
        .format("YYYY-MM-DD");
      let maxTItem = maxT.find(
        (dayTtime) => dayTtime.endTime === date + ff
      );

      //最低溫
      let minTItem = minT.find(
        (dayTtime) => dayTtime.endTime === date + ff
      );
      //天氣說明
      let weatherDecItem = weatherDec.find(
        (dayTtime) => dayTtime.endTime === date + ff
      );
      let rainItem = rain.find(
        (dayTtime) => dayTtime.endTime === date + ff
      );

      let minCelsius = minTItem ? Number(minTItem.parameter.parameterName) : "";
      let maxCelsius = maxTItem ? Number(maxTItem.parameter.parameterName) : "";
      this.tomorrow.push({
        status: weatherDecItem ? weatherDecItem.parameter.parameterName : "",
        //最低攝氏
        minCelsius: minCelsius,
        //最高攝氏
        maxCelsius: maxCelsius,
        rain: rainItem ? rainItem.parameter.parameterName : "",
      });
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
</style>
