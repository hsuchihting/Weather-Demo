<template>
  <div class="container-fluid">
    <div class="cards">
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <div class="card">
            <div class="card-body">
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
          <div class="card" v-b-modal.modal-1>
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

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
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