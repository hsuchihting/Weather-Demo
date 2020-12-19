<template>
  <div class="container">
    <div class="select">
      <label>
        <p>選擇縣市</p>
        <select v-model="selectedCity">
          <option value="null" disabled>--請選擇縣市--</option>
          <option value="1" v-for="(city, index) in getCityName" :key="index">
            {{ city.locationName }}
          </option>
        </select>
      </label>
    </div>
    <div class="cards">
      <div class="row">
        <!-- <div class="col-md-3"> -->
        <!-- <div class="card">
            <div class="card-body" v-b-modal.modal-1>
              <h3 class="card-title" v-for="(item, index) in city" :key="index">
                {{ item.locationName }}
              </h3>
              <p>{{ item2.status }}</p>
              <p>{{ item.description }}</p>
              <p>{{ item2.minCelsius }} - {{ item2.maxCelsius }} °C</p>
              <p>{{ item.timeFrom }}~{{ item.timeTo }}</p>
              <p>{{ item.PoP12h }}</p>
            </div>
          </div> -->
        <!-- </div> -->

        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">高雄市</h3>
              <img src="../assets/sun.svg" alt="weatherIcon" />
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
              <img src="../assets/sun.svg" alt="weatherIcon" />
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
              <img src="../assets/sun.svg" alt="weatherIcon" />
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
              <img src="../assets/sun.svg" alt="weatherIcon" />
              <p>多雲時晴</p>
              <p>17-18 度</p>
              <p>降雨機率: 90%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

    <b-modal id="modal-1" title="城市名稱">
      <ul>
        <li v-for="(item, index) in weatherList" :key="index">
          {{ item }}
        </li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
let nomal36h =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82&elementName=Wx,PoP,MinT,MaxT";

let twoDay =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82,%E5%98%89%E7%BE%A9%E7%B8%A3";

export default {
  name: "About3",
  data() {
    return {
      selectedCity: "",
      getCityName: [],
      weatherList: [],
    };
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