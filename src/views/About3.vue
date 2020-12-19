<template>
  <div class="container-fluid">
    <div class="cards">
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <div class="card">
            <div class="card-body" v-b-modal.modal-1>
              <h3 class="card-title">台北市</h3>
              <img src="../assets/sun.svg" alt="weatherIcon" />
              <p>多雲時晴</p>
              <p>17-18 度</p>
              <p>降雨機率: 90%</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4 col-md-3">
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

        <div class="col-sm-4 col-md-3">
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

        <div class="col-sm-4 col-md-3">
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
      <p class="my-4">天氣現象:</p>
      <p class="my-4">12小時降雨機率:</p>
      <p class="my-4">體感溫度:</p>
      <p class="my-4">最大風速:</p>
      <p class="my-4">平均溫度:</p>
      <p class="my-4">平均相對溼度:</p>
      <p class="my-4">更多其他資料:</p>
      <p class="my-4">更多其他資料:</p>
      <p class="my-4">更多其他資料:</p>
      <p class="my-4">更多其他資料:</p>
      <p class="my-4">更多其他資料:</p>
    </b-modal>
  </div>
</template>

<script>
let api =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-08737147-8E37-4BCD-8118-2014EF09BC45";
export default {
  name: "About3",
  data() {
    return {};
  },
};
</script>

<style>
</style>