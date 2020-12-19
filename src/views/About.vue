<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="text">
            <h2 class="title">{{ getSubject }}</h2>
            <p class="time">有效時間: {{ getTimeNow }} ~ {{ setLastDate }}</p>
            <button type="button" class="btn btn-primary" @click="ffff = !ffff">
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
                      <tr class="day">
                        <th scope="col" class="table-primary" rowspan="3">
                          {{ item.locationName }}
                          {{ item.weatherDay.length }}
                        </th>
                        <td class="table-primary">
                          <span>早上</span>
                        </td>
                        <td
                          v-for="(item2, index) in item.weatherDay"
                          :key="index"
                        >
                          <span>{{ item2.status }}</span>
                          <p v-if="ffff">{{ item2.fahrenheit }}</p>
                          <p v-else>{{ item2.cccc }}</p>
                        </td>
                      </tr>
                      <tr class="night">
                        <td class="table-primary">晚上</td>
                        <td
                          v-for="(item2, index) in item.weatherNight"
                          :key="index"
                        >
                          <span>{{ item2.status }}</span>
                          <p v-if="ffff">{{ item2.fahrenheit }}</p>
                          <p v-else>{{ item2.cccc }}</p>
                        </td>
                      </tr>
                      <tr class="average">
                        <td class="table-primary">平均溫度</td>
                        <td
                          v-for="(item2, index) in item.weatherAvg"
                          :key="index"
                        >
                          <span>{{ item2.status }}</span>
                          <p v-if="ffff">{{ item2.fahrenheit }}</p>
                          <p v-else>{{ item2.cccc }}</p>
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
      ffff: true,
      area: [["台北市", "桃園市", "新北市"], ["台中"]],
      range: -1,
      daylist: [
        {
          date: "12/19",
          week: "saturday",
          holiday: true,
        },
        {
          date: "12/20",
          week: "saturday",
          holiday: true,
        },
        {
          date: "12/21",
          week: "saturday",
          holiday: true,
        },
        {
          date: "12/22",
          week: "saturday",
          holiday: false,
        },
        {
          date: "12/23",
          week: "saturday",
          holiday: false,
        },
        {
          date: "12/24",
          week: "saturday",
          holiday: false,
        },
        {
          date: "12/25",
          week: "saturday",
          holiday: false,
        },
      ],
      cities: [],
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
        console.log(this.weatherItems);
        this.getData();
      });
    },
    getArea(k) {
      this.range = k;
      this.getData();
    },
    getData() {
      this.daylist = [];
      for (let i = 0; i < 7; i++) {
        let day = moment().add(i, "days");
        let week = day.format("E") * 1;
        this.daylist.push({
          date: day.format("MM/DD"),
          d: day.format("YYYY-MM-DD"),
          week: this.toWeek(week * 1),
          holiday: week === 6 || week === 7,
        });
      }
      this.cities = [];
      let locations = this.weatherItems[0].location;
      let location2 = [];
      if (this.range != -1) {
        let assignArea = this.area[this.range];
        location2 = location.filter(
          (element) => assignArea.indexOf(element.locationName) >= 0
        );
      } else {
        location2 = locations;
      }
      console.log(location2);

      location2.forEach((item) => {
        let weatherDay = [];
        let weatherNight = [];
        let weatherAvg = [];
        let dayT = item.weatherElement[0].time;
        let maxT = item.weatherElement[2].time;
        let minT = item.weatherElement[3].time;
        let weatherDec = item.weatherElement[1].time;
        //白天
        this.daylist.forEach((item) => {
          let date = item.d;
          let dayTItem = dayT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          let maxTItem = maxT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          let minTItem = minT.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          let weatherDecItem = weatherDec.find(
            (dayTtime) =>
              dayTtime.startTime === date + " 06:00:00" ||
              dayTtime.startTime === date + " 12:00:00"
          );
          weatherDay.push({
            status: weatherDecItem ? weatherDecItem.elementValue[0].value : "",
            fahrenheit: dayTItem ? dayTItem.elementValue[0].value : "",
            cccc: "16",
          });
          weatherNight.push({
            status: weatherDecItem ? weatherDecItem.elementValue[0].value : "",
            fahrenheit: dayTItem ? dayTItem.elementValue[0].value : "",
            cccc: "16",
          });
          weatherAvg.push({
            status: weatherDecItem ? weatherDecItem.elementValue[0].value : "",
            fahrenheit: dayTItem ? dayTItem.elementValue[0].value : "",
            cccc: "16",
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
          return "星期一";
        case 5:
          return "星期一";
        case 6:
          return "星期六";
        case 7:
          return "星期日";
        default:
          return "";
      }
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
.holiday {
  background-color: red;
}
</style>
