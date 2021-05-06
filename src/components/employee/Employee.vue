<template>
  <tr>
    <td class="table-checkbox">
      <CheckboxField />
    </td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td>Helosdf</td>
    <td class="sticky">
      <div class="line"></div>
    </td>
  </tr>
</template>

<script>
import CheckboxField from "../commons/CheckboxField";
export default {
  components: {
    CheckboxField,
  },
};
</script>

<style scoped>
tr {
  height: 47px;
}
.table-checkbox {
  min-width: 40px;
  width: 40px;
}
tr td {
  padding: 5px 10px;
  border-bottom: 1px solid #c7c7c7;
  border-right: 1px dotted #c7c7c7;
  background: #fff;
}
.sticky {
  position: sticky;
  border-right: none;
  right: 0;
}
.line {
  position: absolute;
  left: -1px;
  top: 0;
  width: 1px;
  background-color: #c7c7c7;
  height: 100%;
}
</style>
