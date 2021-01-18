<template>
  <div class="container">
    <h2>鄉鎮天氣預報</h2>
    <!-- select -->
    <section>
      <div class="select">
        <label>
          <p>選擇縣市</p>
          <select v-model="selectedCity" @change="getApi">
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
            v-for="(item, index) in TaiwanCities"
            :key="index"
          >
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  {{ item.locationName }}
                </h3>
                <p>天氣現象：{{ item.status }}</p>
                <p>平均溫度：{{ item.avgTemp }} °C</p>
                <p>降雨機率：{{ item.rain }} %</p>
              </div>
              <button
                class="btn btn-info"
                @click="showModal(item)"
                v-b-modal="'statusModal'"
              >
                <i class="fas fa-bars pr-2"></i>
                <span>更多資訊</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- modal -->
    <section>
      <b-modal
        id="statusModal"
        header-bg-variant="info"
        header-close-variant="white"
      >
        <template slot="modal-title">
          <div class="text-white">
            {{ detail.locationName }}
          </div>
        </template>
        <ul class="infoModal">
          <li>天氣現象：{{ detail.status }}</li>
          <li>12 小時降雨機率：{{ detail.rain }} %</li>
          <li>平均溫度：{{ detail.avgTemp }} °C</li>
          <li>天氣預報綜合描述：{{ detail.statusDetail }}</li>
          <li>平均相對溼度：{{ detail.avghumidity }} %</li>
          <li>體感溫度：{{ detail.Feel }} °C</li>
          <li>舒適度指數：{{ detail.comfort }}</li>
          <li>最大風速：{{ detail.maxWindSpeed }} 公尺 / 秒</li>
          <li>風向：{{ detail.windDirection }}</li>
          <li>平均露點溫度：{{ detail.dewPoint }} °C</li>
          <li>6 小時降雨機率：{{ detail.sixHourRain }} °C</li>
        </ul>
      </b-modal>
    </section>
  </div>
</template>

<script>
let api = {
  ilan:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  toayuan:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  hsinchu:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-009?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  mioali:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-013?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  chanhua:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-017?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  nanto:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-021?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  yunlin:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-025?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  chayi:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-029?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  pingtung:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-033?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  taitung:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-037?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  penghu:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-045?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  keelung:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-049?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  hsinchuCity:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-053?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  chayiCity:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-057?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  taipei:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  newTaipei:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  taichung:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  tainan:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  koahsung:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  hualian:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-041?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  kingmen:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-085?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",

  lianchiang:
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-081?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45",
};

import moment, { now } from "moment";
export default {
  name: "About3",
  data() {
    return {
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
      weatherItems: [],
      allApiUrl: [
        api.taipei,
        api.newTaipei,
        api.toayuan,
        api.keelung,
        api.taichung,
        api.hsinchu,
        api.hsinchuCity,
        api.mioali,
        api.chanhua,
        api.nanto,
        api.tainan,
        api.koahsung,
        api.yunlin,
        api.chayi,
        api.chayiCity,
        api.pingtung,
        api.ilan,
        api.hualian,
        api.taitung,
        api.kingmen,
        api.penghu,
        api.lianchiang,
      ],
      TaiwanCities: [],
      detail: {
        cityName: "",
      },
      modal: false,
      changeCity: [
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
    };
  },
  computed: {},
  mounted() {
    this.getApi();
  },
  methods: {
    getApi() {
      this.$http
        .get(this.allApiUrl[this.getCityName.indexOf(this.selectedCity)])
        .then((res) => {
          this.weatherItems = res.data.records;
          // console.log(this.weatherItems);
          this.getData();
        });
    },
    rainData(item, idx, date, format, timeKey) {
      let rain = item.weatherElement[idx].time;
      let rainItem = rain.find(
        (dayTtime) => dayTtime[timeKey] === date + format
      );
      return rainItem ? rainItem.elementValue[0].value : "";
    },
    weatherDesc(item, idx, date, format, timeKey) {
      let weatherDesc = item.weatherElement[idx].time;
      let weatherDescItem = weatherDesc.find(
        (dayTtime) => dayTtime[timeKey] === date + format
      );
      return weatherDescItem ? weatherDescItem.elementValue[0].value : "";
    },
    getData() {
      this.TaiwanCities = [];
      let locations = this.weatherItems.locations[0].location;

      locations.forEach((item) => {
        let locationName = item.locationName;

        let at = item.weatherElement[2].time;
        let avgT = item.weatherElement[3].time;
        let rh = item.weatherElement[4].time;
        let ci = item.weatherElement[5].time;
        let weatherDescDetail = item.weatherElement[6].time;
        let pop6h = item.weatherElement[7].time;
        let ws = item.weatherElement[8].time;
        let wd = item.weatherElement[9].time;
        let td = item.weatherElement[10].time;

        let date = moment().format("YYYY-MM-DD");
        let format = " 06:00:00";
        let nowHour = Number(moment().format("HH"));
        let tt = Math.ceil(nowHour / 3) * 3;
        // 取得時間區間1
        if (nowHour >= 24) {
          format = " 00:00:00";
          date = moment().add(1, "days").format("YYYY-MM-DD");
        } else if (nowHour >= 10) {
          format = ` ${tt}:00:00`;
        } else {
          format = ` 0${tt}:00:00`;
        }

        // 取得時間區間2

        let date2 = moment().format("YYYY-MM-DD");
        let format2 = " 06:00:00";
        let nowHour2 = Number(moment().format("HH"));
        // 取得時間區間
        if (nowHour2 > 18) {
          format2 = " 06:00:00";
          date2 = moment().add(1, "days").format("YYYY-MM-DD");
        } else if (nowHour > 12) {
          format2 = " 18:00:00";
        }

        // 取得時間區間3
        let date3 = moment().format("YYYY-MM-DD");
        let format3 = " 12:00:00";
        let nowHour3 = Number(moment().format("HH"));
        // 取得時間區間
        if (nowHour3 >= 12) {
          format3 = " 00:00:00";
          date3 = moment().add(1, "days").format("YYYY-MM-DD");
        }

        //*資料內容

        //天氣說明

        //均溫
        let avgTItem = avgT.find(
          (dayTtime) => dayTtime.dataTime === date + format
        );
        //濕度
        let rhItem = rh.find((dayTtime) => dayTtime.dataTime === date + format);
        //舒適指數
        let ciItem = ci.find((dayTtime) => dayTtime.dataTime === date + format);
        //最大風速
        let wsItem = ws.find((dayTtime) => dayTtime.dataTime === date + format);
        // 體感溫度
        let atItem = at.find((dayTtime) => dayTtime.dataTime === date + format);
        //6小時降雨
        let pop6hItem = pop6h.find(
          (dayTtime) => dayTtime.startTime === date + format
        );
        //天氣狀況詳述
        let weatherDescDetailItem = weatherDescDetail.find(
          (dayTtime) => dayTtime.startTime === date + format
        );
        // 風向
        let wdItem = wd.find((dayTtime) => dayTtime.dataTime === date + format);
        // 平均露點溫度
        let tdItem = td.find((dayTtime) => dayTtime.dataTime === date + format);

        this.TaiwanCities.push({
          locationName: item.locationName,
          rain: this.rainData(item, 0, date3, format3, "startTime"),
          status: this.weatherDesc(item, 1, date, format, "startTime"),
          avgTemp: avgTItem ? avgTItem.elementValue[0].value : "",
          statusDetail: weatherDescDetailItem
            ? weatherDescDetailItem.elementValue[0].value
            : "",
          avghumidity: rhItem ? rhItem.elementValue[0].value : "",
          comfort: ciItem ? ciItem.elementValue[0].value : "",
          maxWindSpeed: wsItem ? wsItem.elementValue[0].value : "",
          Feel: atItem ? atItem.elementValue[0].value : "",
          windDirection: wdItem ? wdItem.elementValue[0].value : "",
          dewPoint: tdItem ? tdItem.elementValue[0].value : "",
          sixHourRain: pop6hItem ? pop6hItem.elementValue[0].value : "",
        });
      });
    },
    showModal(item) {
      this.modal = true;
      this.detail = item;
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
.cards {
  .card {
    margin: 0 1rem 3rem;
    outline: none;
    box-shadow: 0 0 5px 2px #ddd;
    &:hover {
      background-color: #fff9c4;
      transition: all 1s ease-in-out;
    }
  }
}

.infoModal {
  list-style: none;
  > li {
    padding: 5px 0;
  }
}
</style>
