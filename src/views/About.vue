<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="text">
            <h2 class="title">{{ getSubject }}</h2>
            <p class="time">有效時間: {{ getTimeNow }} ~ {{ setLastDate }}</p>
            <button
              type="button"
              class="btn btn-primary"
              @click="celsius = !celsius"
            >
              °C <i class="fas fa-exchange-alt"></i> ℉
            </button>
          </div>

          <!-- nav-tab -->
          <section>
            <nav class="nav nav-pills nav-fill">
              <a class="nav-item nav-link" href="#" @click.prevent="getArea(-1)"
                >全臺</a
              >
              <a class="nav-item nav-link" href="#" @click.prevent="getArea(0)"
                >北部</a
              >
              <a class="nav-item nav-link" href="#" @click.prevent="getArea(1)"
                >中部</a
              >
              <a class="nav-item nav-link" href="#" @click.prevent="getArea(2)"
                >南部</a
              >
              <a class="nav-item nav-link" href="#" @click.prevent="getArea(3)"
                >東部</a
              >
              <a class="nav-item nav-link" href="#" @click.prevent="getArea(4)"
                >外島</a
              >
            </nav>
          </section>

          <section>
            <div class="table-responsive">
              <table class="table table-hover table-bordered" id="taiwan">
                <thead class="table-primary sticky-top">
                  <tr>
                    <th scope="col">縣市</th>
                    <th scope="col">時間</th>
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
                <tbody v-for="(item, index) in cities" :key="index">
                  <!-- 白天 -->
                  <tr class="day">
                    <th scope="col" class="table-primary" rowspan="3">
                      {{ item.locationName }}
                    </th>
                    <td class="table-primary">
                      <span>早上</span>
                    </td>
                    <td v-for="(item2, index) in item.weatherDay" :key="index">
                      <span>{{ item2.status }}</span>
                      <p v-if="celsius">
                        {{ item2.minCelsius }} - {{ item2.maxCelsius }} °C
                      </p>
                      <p v-else>
                        {{ item2.minFahrenheit }} - {{ item2.maxFahrenheit }} ℉
                      </p>
                    </td>
                  </tr>
                  <!-- 晚上 -->
                  <tr class="night">
                    <td class="table-primary">晚上</td>
                    <td
                      v-for="(item2, index) in item.weatherNight"
                      :key="index"
                    >
                      <span>{{ item2.status }}</span>
                      <p v-if="celsius">
                        {{ item2.minCelsius }} - {{ item2.maxCelsius }} °C
                      </p>
                      <p v-else>
                        {{ item2.minFahrenheit }} - {{ item2.maxFahrenheit }} ℉
                      </p>
                    </td>
                  </tr>
                  <!-- 均溫 -->
                  <tr class="average">
                    <td class="table-primary">全天溫度</td>
                    <td v-for="(item2, index) in item.weatherAvg" :key="index">
                      <span>{{ item2.status }}</span>
                      <p v-if="celsius">
                        {{ item2.minCelsius }} - {{ item2.maxCelsius }} °C
                      </p>
                      <p v-else>
                        {{ item2.minFahrenheit }} - {{ item2.maxFahrenheit }} ℉
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let weather =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=MinT,MaxT,T,Wx";

import moment from "moment";
export default {
  name: "About",
  data() {
    return {
      weatherItems: [],
      subject: null,
      timeNow: "",
      timeAfterWeenk: "",
      celsius: true,
      area: [
        ["臺北市", "新北市"],
        ["臺中市"],
        ["臺南市", "高雄市"],
        ["花蓮市"],
        ["金門縣"],
      ],
      range: -1,
      daylist: [],
      cities: [],
      active: false,
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
      let time = moment().format("L hh:mm:ss");
      return time;
    },
    setLastDate() {
      let time = moment()
        .add(6, "days")
        .format("L hh:mm:ss");
      return time;
    },
    getLocation() {
      let couty = [];
      for (const item of this.weatherItems) {
        return (couty = item.location);
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
        this.getData();
      });
    },
    getArea(k) {
      this.range = k;
      this.getData();
    },
    getData() {
      //取日期
      this.daylist = [];
      for (let i = 0; i < 7; i++) {
        let day = moment().add(i, "days");
        let week = day.format("E") * 1;
        this.daylist.push({
          date: day.format("MM/DD"),
          d: day.format("YYYY-MM-DD"), //驗證用
          week: this.toWeek(week * 1),
          holiday: week === 6 || week === 7,
        });
      }
      //取城市
      this.cities = [];
      let locations = this.weatherItems[0].location;
      let location2 = [];
      console.log(this.range);
      if (this.range != -1) {
        let assignArea = this.area[this.range];
        location2 = locations.filter(
          (element) => assignArea.indexOf(element.locationName) >= 0
        );
        console.log(location2);
      } else {
        location2 = locations;
      }

      //取得縣市溫度資料
      location2.forEach((item) => {
        //console.log(item);
        let weatherDay = [];
        let weatherNight = [];
        let weatherAvg = [];
        let dayT = item.weatherElement[0].time;
        let weatherDec = item.weatherElement[1].time;
        let minT = item.weatherElement[2].time;
        let maxT = item.weatherElement[3].time;

        this.daylist.forEach((item) => {
          let date = item.d;
          // 均溫
          let dayTItem = dayT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          //最高溫
          let maxTItem = maxT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );

          //最低溫
          let minTItem = minT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          //天氣說明
          let weatherDecItem = weatherDec.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          //晚上
          let nightMaxTItem = maxT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 18:00:00" ||
              dayTtime.startTime === date + " 00:00:00"
          );

          //最低溫
          let nightMinTItem = minT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 18:00:00" ||
              dayTtime.startTime === moment(date).add(1, 'days').format("YYYY-MM-DD") + " 00:00:00"
          );
          //天氣說明
          let weatherNightDecItem = weatherDec.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 18:00:00" ||
              dayTtime.startTime === moment(date).add(1, 'days').format("YYYY-MM-DD") + " 00:00:00"
          );

          let minCelsius = minTItem
            ? Number(minTItem.elementValue[0].value)
            : "";
          let maxCelsius = maxTItem
            ? Number(maxTItem.elementValue[0].value)
            : "";
          let minCelsius2 = nightMinTItem
            ? Number(nightMinTItem.elementValue[0].value)
            : "";
          let maxCelsius2 = nightMaxTItem
            ? Number(nightMaxTItem.elementValue[0].value)
            : "";
          let avgMinCelsius = "";
          if (minCelsius != "" && minCelsius2 != "") {
            avgMinCelsius = Math.min(minCelsius, minCelsius2);
          }

          let avgMaxCelsius = "";
          if (maxCelsius != "" && maxCelsius2 != "") {
            avgMaxCelsius = Math.max(maxCelsius, maxCelsius2);
          }
          weatherDay.push({
            //天氣概況
            status: weatherDecItem ? weatherDecItem.elementValue[0].value : "",
            //最低攝氏
            minCelsius: minCelsius,
            //最高攝氏
            maxCelsius: maxCelsius,
            //最低華氏
            minFahrenheit: minTItem
              ? (Number(minTItem.elementValue[0].value) + 32) * (1.8).toFixed(0)
              : "",
            //最高華氏
            maxFahrenheit: maxTItem
              ? (Number(maxTItem.elementValue[0].value) + 32) * (1.8).toFixed(0)
              : "",
          });
          weatherNight.push({
            //天氣概況
            status: weatherNightDecItem
              ? weatherNightDecItem.elementValue[0].value
              : "",
            //最低攝氏
            minCelsius: minCelsius2,
            //最高攝氏
            maxCelsius: maxCelsius2,
            //最低華氏
            minFahrenheit: nightMinTItem
              ? (Number(nightMinTItem.elementValue[0].value) + 32) *
                (1.8).toFixed(0)
              : "",
            //最高華氏
            maxFahrenheit: nightMaxTItem
              ? (Number(nightMaxTItem.elementValue[0].value) + 32) *
                (1.8).toFixed(0)
              : "",
          });
          //全天均溫
          weatherAvg.push({
            //天氣概況
            status: weatherNightDecItem
              ? weatherNightDecItem.elementValue[0].value
              : "",
            //最低攝氏
            minCelsius: avgMinCelsius,
            //最高攝氏
            maxCelsius: avgMaxCelsius,
            //最低華氏
            minFahrenheit:
              avgMinCelsius != ""
                ? (avgMinCelsius + 32) * (1.8).toFixed(0)
                : "",
            //最高華氏
            maxFahrenheit:
              avgMaxCelsius != ""
                ? (avgMaxCelsius + 32) * (1.8).toFixed(0)
                : "",
          });
        });

        //?如果加晚上的資料是在這邊新增，然後更換時段就好嗎?

        this.cities.push({
          locationName: item.locationName,
          weatherDay: weatherDay,
          weatherNight: weatherNight,
          weatherAvg: weatherAvg,
        });
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
.nav-item {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  transition: all 0.2s;
  &:hover {
    background-color: #f4511e;
    color: #fff;
  }
}
</style>
