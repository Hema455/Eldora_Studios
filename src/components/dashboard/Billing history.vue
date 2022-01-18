<template>
  <div>
    <v-card class="d-flex flex-row">
      <div style="width:100%">
        <b-card style="background-color:#ebebeb">
          <div class="header-card">
            <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
            <v-badge :content="1" color="green" overlap>
              <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
            </v-badge>
            <v-badge :content="3" color="red" overlap>
              <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
            </v-badge>

            <b-card-text>Recruiter ID: {{ recruiter.id }}</b-card-text>
          </div>
        </b-card>
        <!-- <component :is="currentPage" :page.sync="item" /> -->
        <div class="container">
          <div class="row">
            <h3 style="float:left;padding:20px;">Current Account Overview</h3>
          </div>
          <div class="row">
            <div class="col-md-4"><h5>Account Payment</h5></div>
            <v-simple-table>
              <template v-slot:default>
                <thead></thead>
                <tbody>
                  <tr
                    v-for="accountPayment in accountPayments"
                    :key="accountPayment.name"
                  >
                    <td>{{ accountPayment.name }}</td>
                    <td>{{ accountPayment.amount }}</td>
                  </tr>
                  <tr>
                    <td><b-button variant="primary">View Invoice</b-button></td>
                    <td><b-button variant="success">Pay Now</b-button></td>
                  </tr>
                  <br /><br />
                </tbody>
              </template>
            </v-simple-table>
            <div class="col-md-4"></div>
          </div>
          <h5>Billing Summary</h5>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="thead-dark">
                    <tr>
                      <th>Items</th>
                      <th>Month</th>
                      <th>Description</th>
                      <th>QTY</th>
                      <th>Unit Price</th>
                      <th>Monthly Charge</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="billing in billings" :key="billing.item">
                      <td>{{ billing.items }}</td>
                      <td>{{ billing.month }}</td>
                      <td>{{ billing.description }}</td>
                      <td>{{ billing.qty }}</td>
                      <td>{{ billing.unitprice }}</td>
                      <td>{{ billing.monthlycharge }}</td>
                      <td>{{ billing.total }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
            <div class="col-md-1"></div>
          </div>
          <br />
          <h5>Manage Payment Options</h5>
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <table class="table table-striped">
                <thead></thead>
                <tbody>
                  <tr
                    v-for="managePayment in managePayments"
                    :key="managePayment.name"
                  >
                    <td>
                      <label class="form-checkbox">
                        <input
                          type="checkbox"
                          v-model="selectAll"
                          @click="select"
                        />
                        <i class="form-icon"></i>
                      </label>
                    </td>
                    <td>
                      <div>
                        <img v-bind:src="managePayment.image" width="35px" />
                      </div>
                    </td>
                    <td>xxxxxxxx4444</td>
                    <td>12:20</td>
                    <td><b-icon-credit-card></b-icon-credit-card></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    accountPayments: [
      { name: "Credit Usage", amount: "$0.00" },
      { name: "Monthly Charges", amount: "$100.00" },
      { name: "Badges", amount: "$800.00" },
      { name: "Current Bill Total", amount: "$1800.00" },
    ],
    billings: [
      {
        items: "1",
        month: "August",
        description: "Badges",
        qty: "1",
        unitprice: "$50",
        monthlycharge: "$1000",
        total: "$1050",
      },
      {
        items: "2",
        month: "July",
        description: "Badges",
        qty: "0",
        unitprice: "$50",
        monthlycharge: "$1000",
        total: "$1000",
      },
      {
        items: "3",
        month: "June",
        description: "Badge",
        qty: "2",
        unitprice: "$50",
        monthlycharge: "$1000",
        total: "$1100",
      },
      {
        items: "4",
        month: "May",
        description: "Badges",
        qty: "2",
        unitprice: "$50",
        monthlycharge: "$1000",
        total: "$1100",
      },
      {
        items: "5",
        month: "April",
        description: "Badges",
        qty: "3",
        unitprice: "$50",
        monthlycharge: "$1000",
        total: "$1150",
      },
    ],
    managePayments: [
      {
        image: require("../../assets/master.png"),
        cardno: "xxxxxxxx4444",
        time: "12:20",
      },
      { image: require("../../assets/visa.png"), cardno: "xxxxxxxx4444", time: "12:20" },
    ],
    recruiter: {
      id: 33123,
      name: "John Doe",
      company: "Eldora",
    },
  }),
};
</script>
<style scoped>
.header-card {
  display: flex;
  float: right;
  font-size: 16px;
  font-weight: bold;
}
.header-card > * {
  margin-left: 20px;
}
</style>
