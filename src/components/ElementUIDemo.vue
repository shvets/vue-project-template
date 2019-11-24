<template>
  <div class="element-ui-demo">
    <h1>This is an Element UI page</h1>

    <my-custom-element msg="Hello..."></my-custom-element>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="Date"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="Name"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ElementUIDemo extends Vue {
  protected tableData = [{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }];
}
</script>
