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
              @click="changeTemperature"
            >
              °C <i class="fas fa-exchange-alt"></i> ℉
            </button>
          </div>

          <!-- nav-tab -->
          <section>
            <b-tabs content-class="mt-3" fill>
              <b-tab title="全臺" active>
                <div class="table-responsive">
                  <table class="table table-hover table-bordered" id="taiwan">
                    <thead class="table-primary sticky-top">
                      <tr>
                        <th scope="col">縣市</th>
                        <th scope="col">時間</th>
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
                    <tbody v-for="(item, index) in getLocation" :key="index" >
                      <tr class="day">
                        <th scope="col" class="table-primary" rowspan="3">
                          {{ item.locationName }}
                        </th>
                        <td class="table-primary">
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-primary">晚上</td>
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
                      <tr class="average" >
                        <td class="table-primary" >平均溫度</td>
                        <td >
                          <span>陰有雨</span>
                          <p >{{item.value}} 度</p>
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
                    </tbody>
                  </table>
                </div>
              </b-tab>
              <b-tab title="北部">
                <div class="table-responsive">
                  <table class="table table-hover table-bordered" id="taiwan">
                    <thead class="table-success">
                      <tr>
                        <th scope="col">縣市</th>
                        <th scope="col">時間</th>
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
                        <th class="table-success" rowspan="3">台南市</th>
                        <td class="table-success">
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-success">晚上</td>
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
                      <tr class="average">
                        <td class="table-success">平均溫度</td>
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
                      <tr class="day">
                        <th rowspan="3">新北市</th>
                        <td>
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td>晚上</td>
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
                      <tr class="average">
                        <td>平均溫度</td>
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
              <b-tab title="中部">
                <div class="table-responsive">
                  <table class="table table-hover table-bordered" id="taiwan">
                    <thead class="table-warning sticky-top">
                      <tr>
                        <th scope="col">縣市</th>
                        <th scope="col">時間</th>
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
                        <th class="table-warning" rowspan="3">台南市</th>
                        <td class="table-warning">
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-warning">晚上</td>
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
                      <tr class="average">
                        <td class="table-warning">平均溫度</td>
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
                      <tr class="day">
                        <th rowspan="3">新北市</th>
                        <td>
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td>晚上</td>
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
                      <tr class="average">
                        <td>平均溫度</td>
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
              <b-tab title="南部">
                <div class="table-responsive">
                  <table class="table table-hover table-bordered" id="taiwan">
                    <thead class="table-info sticky-top">
                      <tr>
                        <th scope="col">縣市</th>
                        <th scope="col">時間</th>
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
                        <th class="table-info" rowspan="3">台南市</th>
                        <td class="table-info">
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-info">晚上</td>
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
                      <tr class="average">
                        <td class="table-info">平均溫度</td>
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
                      <tr class="day">
                        <th rowspan="3">新北市</th>
                        <td>
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td>晚上</td>
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
                      <tr class="average">
                        <td>平均溫度</td>
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
              <b-tab title="東部">
                <div class="table-responsive">
                  <table class="table table-hover table-bordered" id="taiwan">
                    <thead class="table-danger sticky-top">
                      <tr>
                        <th scope="col">縣市</th>
                        <th scope="col">時間</th>
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
                        <th class="table-danger" rowspan="3">台南市</th>
                        <td class="table-danger">
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-danger">晚上</td>
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
                      <tr class="average">
                        <td class="table-danger">平均溫度</td>
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
                      <tr class="day">
                        <th rowspan="3">新北市</th>
                        <td>
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td>晚上</td>
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
                      <tr class="average">
                        <td>平均溫度</td>
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
              <b-tab title="外島">
                <div class="table-responsive">
                  <table class="table table-hover table-bordered" id="taiwan">
                    <thead class="table-secondary sticky-top">
                      <tr>
                        <th scope="col">縣市</th>
                        <th scope="col">時間</th>
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
                        <th class="table-secondary" rowspan="3">台南市</th>
                        <td class="table-secondary">
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-secondary">晚上</td>
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
                      <tr class="average">
                        <td class="table-secondary">平均溫度</td>
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
                      <tr class="day">
                        <th rowspan="3">新北市</th>
                        <td>
                          <span>早上</span>
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
                        <td>
                          <span>陰有雨</span>
                          <p>16 - 18 度</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td>晚上</td>
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
                      <tr class="average">
                        <td>平均溫度</td>
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
            </b-tabs>
          </section>

          <!-- table -->
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
      Celsius: 0,
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
      let time = moment().add(6, "days").format("L hh:mm:ss");
      return time;
    },
    getLocation() {
      let couty = [];
      for (const item of this.weatherItems) {
        return (couty = item.location);
      }
    },
    getHighTemp() {},
    getLowTemp() {},
    getAvgWeather() {
      let temperature = [];
      for (const item of this.weatherItems) {
        for (const location of item.location) {
          for (let weatherEl of location.weatherElement) {
            for (let time of weatherEl.time) {
              for (let elementVal of time.elementValue) {
                console.log(elementVal);
              }
            }
          }
        }
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
      });
    },
    changeTemperature() {
      alert("溫度單位轉換");
      // celsius:{
      // 	get(){
      // 	return (5 / 9) * (fahrenheit - 32);
      // 	},
      // 		set(val){
      // 	return (9/5) * (val + 32);
      // 	}
      // }
    },
    getHumanDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
</style>
