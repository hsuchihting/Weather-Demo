<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="text">
            <h2>一週天氣預報</h2>
            <div class="content">
              <p class="time">有效時間: {{ getTimeNow }} ~ {{ setLastDate }}</p>
              <button
                type="button"
                class="btn btn-warning"
                @click="celsius = !celsius"
              >
                °C <i class="fas fa-exchange-alt"></i> ℉
              </button>
            </div>
          </div>

          <!-- nav-tab -->
          <section>
            <nav class="nav nav-pills nav-fill">
              <a
                class="nav-item nav-link"
                :class="{ active: range == -1 }"
                href="#"
                @click.prevent="getArea(-1)"
                >全臺</a
              >
              <a
                class="nav-item nav-link"
                :class="{ active: range == 0 }"
                href="#"
                @click.prevent="getArea(0)"
                >北部</a
              >
              <a
                class="nav-item nav-link"
                :class="{ active: range == 1 }"
                href="#"
                @click.prevent="getArea(1)"
                >中部</a
              >
              <a
                class="nav-item nav-link"
                :class="{ active: range == 2 }"
                href="#"
                @click.prevent="getArea(2)"
                >南部</a
              >
              <a
                class="nav-item nav-link"
                :class="{ active: range == 3 }"
                href="#"
                @click.prevent="getArea(3)"
                >東部</a
              >
              <a
                class="nav-item nav-link"
                :class="{ active: range == 4 }"
                href="#"
                @click.prevent="getArea(4)"
                >外島</a
              >
            </nav>
          </section>

          <section>
            <div class="table-responsive">
              <table class="table table-hover table-bordered">
                <thead class="table-info sticky-top">
                  <tr>
                    <th scope="col">縣市</th>
                    <th scope="col">時間</th>
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
                <tbody v-for="(item, index) in cities" :key="index">
                  <!-- 白天 -->
                  <tr class="day">
                    <th scope="col" class="table-info" rowspan="3">
                      {{ item.locationName }}
                    </th>
                    <td class="table-info">
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
                    <td class="table-info">晚上</td>
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
                    <td class="table-info">全天溫度</td>
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
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-4F857FFB-9BF6-4282-AF03-1359E4B9FE76&elementName=Wx,MinT,MaxT";



import moment from "moment";
export default {
  name: "About",
  data() {
    return {
      weatherItems: [],
      subject: null,
      celsius: true,
      area: [
        ["臺北市", "新北市", "桃園市", "基隆市"],
        ["臺中市", "新竹縣", "新竹市", "苗栗縣", "彰化縣", "南投縣"],
        ["臺南市", "高雄市", "雲林縣", "嘉義縣", "嘉義市", "屏東縣"],
        ["宜蘭縣", "花蓮縣", "臺東縣"],
        ["金門縣", "澎湖縣", "連江縣"],
      ],
      range: -1,
      dayList: [],
      cities: [],
      active: false,
    };
  },

  computed: {
    getTimeNow() {
      let time = moment().format("L hh:mm:ss");
      return time;
    },
    setLastDate() {
      let time = moment().add(6, "days").format("L hh:mm:ss");
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
        this.weatherItems = res.data.records.location;

        console.log(this.weatherItems);
        this.getData();
      });
    },
    getArea(index) {
      this.range = index;
      this.getData();
    },
    getData() {
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

      //取城市
      this.cities = [];
      let locations = this.weatherItems;
      let location2 = [];

      //縣市標籤
      if (this.range != -1) {
        let assignArea = this.area[this.range];
        location2 = locations.filter(
          (element) => assignArea.indexOf(element.locationName) >= 0
        );
      } else {
        location2 = locations;
      }

      //取得縣市溫度資料
      location2.forEach((item) => {
        let weatherDay = [];
        let weatherNight = [];
        let weatherAvg = [];
        let dayT = item.weatherElement[0].time;
        let weatherDesc = item.weatherElement[1].time;
        let minT = item.weatherElement[1].time;
        let maxT = item.weatherElement[2].time;
        
        //對應日期的天氣資訊
        this.dayList.forEach((item) => {
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
          let weatherDescItem = weatherDesc.find(
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
              dayTtime.startTime ===
                moment(date).add(1, "days").format("YYYY-MM-DD") + " 00:00:00"
          );
          //天氣說明
          let weatherNightDecItem = weatherDesc.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 18:00:00" ||
              dayTtime.startTime ===
                moment(date).add(1, "days").format("YYYY-MM-DD") + " 00:00:00"
          );
          
          //取得白天最高溫與最低溫
          let minCelsius = minTItem
            ? Number(minTItem.parameter.parameterName)
            : "";
          let maxCelsius = maxTItem
            ? Number(maxTItem.parameter.parameterName)
            : "";
          let minCelsius2 = nightMinTItem
            ? Number(nightMinTItem.parameter.parameterName)
            : "";

          //取得晚上最高溫與最低溫
          let maxCelsius2 = nightMaxTItem
            ? Number(nightMaxTItem.parameter.parameterName)
            : "";
          let avgMinCelsius = "";
          if (minCelsius != "" && minCelsius2 != "") {
            avgMinCelsius = Math.min(minCelsius, minCelsius2);
          }

          let avgMaxCelsius = "";
          if (maxCelsius != "" && maxCelsius2 != "") {
            avgMaxCelsius = Math.max(maxCelsius, maxCelsius2);
          }  
          
          //* 新增白天資料
          weatherDay.push({
            //天氣概況
            status: weatherDescItem
              ? weatherDescItem.parameter.parameterName
              : "",
            //最低攝氏
            minCelsius: minCelsius,
            //最高攝氏
            maxCelsius: maxCelsius,
            //最低華氏
            minFahrenheit: minTItem
              ? Number((minTItem.parameter.parameterName * 9) / 5 + 32).toFixed(0)
              : "",
            //最高華氏
            maxFahrenheit: maxTItem
              ? Number((maxTItem.parameter.parameterName * 9) / 5 + 32).toFixed(0)
              : "",
          });

          //* 新增晚上資料
          weatherNight.push({
            //天氣概況
            status: weatherNightDecItem
              ? weatherNightDecItem.parameter.parameterName
              : "",
            //最低攝氏
            minCelsius: minCelsius2,
            //最高攝氏
            maxCelsius: maxCelsius2,
            //最低華氏
            minFahrenheit: nightMinTItem
              ? Number(
                  (nightMinTItem.parameter.parameterName * 9) / 5 + 32
                ).toFixed(0)
              : "",
            //最高華氏
            maxFahrenheit: nightMaxTItem
              ? Number(
                  (nightMaxTItem.parameter.parameterName * 9) / 5 + 32
                ).toFixed(0)
              : "",
          });

          //全天均溫
          weatherAvg.push({
            //天氣概況
            status: weatherNightDecItem
              ? weatherNightDecItem.parameter.parameterName
              : "",
            //最低攝氏
            minCelsius: avgMinCelsius,
            //最高攝氏
            maxCelsius: avgMaxCelsius,
            //最低華氏
            minFahrenheit:
              avgMinCelsius != ""
                ? ((avgMinCelsius * 9) / 5 + 32).toFixed(0)
                : "",
            //最高華氏
            maxFahrenheit:
              avgMaxCelsius != ""
                ? ((avgMaxCelsius * 9) / 5 + 32).toFixed(0)
                : "",
          });
        });

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
  .content {
    display: flex;
    align-items: center;
    .time {
      font-size: 20px;
      margin-bottom: 0;
      padding-right: 2rem;
    }
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
.nav-item {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  transition: all 0.2s;
  margin-top: 1rem;
  & .active {
    background-color: #28a745;
    color: #fff;
  }
}
</style>
