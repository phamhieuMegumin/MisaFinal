<template>
  <div class="content-container">
    <div class="content-title">
      <h3 class="title">Nhân viên</h3>
      <div @click="handleInsert" class="btn-add">
        <Button content="Thêm mới nhân viên" />
      </div>
    </div>
    <!-- main content -->
    <div class="main-content">
      <div class="search-content">
        <div class="search-wrapper">
          <InputField
            :placeholder="'Tìm theo mã, tên nhân viên'"
            :searchField="true"
          />
        </div>
        <div @click="getListEmployee" class="refresh-btn">
          <div class="refresh-icon"></div>
        </div>
      </div>
      <!-- Table -->
      <div class="table-content">
        <ListEmployee />
        <div class="pagination-container">
          <div class="total-item">
            Tổng số : <span class="total-value">{{ totalEmployee }}</span> bản
            ghi
          </div>
          <div class="pagination-wrapper">
            <div class="dropdown-pagiantion">
              <DropdownField :listOption="listOption" nameField="ItemPerPage" />
            </div>
            <div class="paginations">
              <div class="pag-btn prev-btn">Trước</div>
              <div class="list-btn-pagination">
                <div
                  v-for="(item, index) in totalPagination"
                  :key="index"
                  class="pag-btn btn-pagination"
                  @click="handlePagination(index + 1)"
                >
                  {{ index + 1 }}
                </div>
              </div>
              <div class="pag-btn next-btn">Sau</div>
            </div>
          </div>
        </div>
      </div>
      <!-- end table-->
    </div>
    <!-- end main content -->
  </div>
</template>

<script>
import Button from "../commons/Button";
import ListEmployee from "../employee/ListEmployee";
import InputField from "../commons/InputField";
import DropdownField from "../commons/DropdownField";
import { mapActions, mapGetters, mapMutations } from "vuex";
import queryString from "query-string";
export default {
  components: {
    Button,
    ListEmployee,
    InputField,
    DropdownField,
  },
  data() {
    return {
      listOption: [
        {
          optionId: 1,
          optionContent: "10 bản ghi trên 1 trang",
          value: 10,
        },
        {
          optionId: 2,
          optionContent: "20 bản ghi trên 1 trang",
          value: 20,
        },
        {
          optionId: 3,
          optionContent: "30 bản ghi trên 1 trang",
          value: 30,
        },
        {
          optionId: 4,
          optionContent: "50 bản ghi trên 1 trang",
          value: 50,
        },
        {
          optionId: 5,
          optionContent: "100 bản ghi trên 1 trang",
          value: 100,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["totalEmployee", "totalPagination"]),
  },
  methods: {
    ...mapMutations(["Handle_Show_Modal", "MODE_INSERT"]),
    ...mapActions([
      "getListEmployee",
      "getNewEmployeeCode",
      "getEmployeeByPagination",
    ]),
    handleInsert() {
      this.getNewEmployeeCode();
      this.Handle_Show_Modal();
      this.MODE_INSERT();
    },
    handlePagination(pageNum) {
      console.log(pageNum);
      const data = {
        pageInt: pageNum,
        pageSize: 20,
      };
      this.$store.dispatch(
        "getEmployeeByPagination",
        queryString.stringify(data)
      );
    },
  },
};
</script>

<style scoped>
.content-container {
  position: absolute;
  top: 48px;
  left: 178px;
  right: 0;
  bottom: 0;
  background: #f4f5f6;
  padding: 0 20px;
}
.content-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 94px;
}
.title {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #111;
}
.main-content {
  background: #fff;
  padding: 0 20px;
}
.table-content {
  overflow-x: auto;
  height: calc(100vh - 94px - 48px - 64px);
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #d4d7dc;
}
::-webkit-scrollbar-thumb:hover {
  background: #616164;
}
/* search content */
.search-content {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.search-wrapper {
  width: 240px;
}
.refresh-icon {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -423px -201px;
  margin-left: 18px;
}
.refresh-icon:hover {
  background-position: -1097px -88px;
}
/* Footer-pagination */
.pagination-container {
  position: sticky;
  bottom: 0;
  left: 0;
  background: #fff;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pagination-wrapper {
  display: flex;
}
.paginations {
  display: flex;
  align-items: center;
}
.dropdown-pagiantion {
  margin: 0 16px;
  width: 200px;
}
.pag-btn {
  margin-right: 13px;
  cursor: pointer;
}
.btn-pagination {
  border: 1px solid #e0e0e0;
  font-weight: 700;
  padding: 0 6.5px;
}
.next-btn,
.prev-btn {
  color: #9e9e9e;
  cursor: default;
}
.total-value {
  font-weight: 700;
}
.list-btn-pagination {
  display: flex;
}
</style>
