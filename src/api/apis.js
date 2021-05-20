import {
  Loading
} from "element-ui";
import req from "./https";

// 全域 api 掛載於 Vue.prototype
// 使用方式 this.$api
// api 命名原則 首字大寫爾後駝峰
const api = {
  // Login
  Login(params) {
    return req("post", "Check/Login", params);
  },
  // Register
  Register(params) {
    return req("post", "UserInfo/Add", params);
  },
  // 檢驗token是否有效
  GetLoginStatus() {
    return req("get", "Check/GetStatus");
  },
  // 獲取登錄用戶資料
  GetUserInfo(params) {
    return req("get", "UserInfo/Load", params);
  },
  GetClient(params) {
    return req("get", "Users/Get", params);
  },
  // 修改用戶資料
  UpdateUserInfo(data) {
    return req("post", "UserInfo/Update", data);
  },
  // 最新消息
  GetNews(params) {
    return req("get", "News/Load", params);
  },
  // 白牌車預約
  Orders(params) {
    return req("post", "Orders/Add", params);
  },
  // 白牌調度接口 
  LoadOrder(params) {
    return req("get", "Orders/Load", params);
  },
  // 取得單筆訂單
  GetOrder(params) {
    return req("get", "Orders/Get", params);
  },
  // 取消訂單
  DelOrder(params) {
    return req("post", "Orders/Delete", params);
  },
  /* 取得經緯度 */
  GetGeo(params) {
    return req("get", "Maps/Geocode", params);
  },


  GetUserProfile() {
    return req("get", "Check/GetUserProfile");
  },
  // 取得白牌用戶
  GetSelfPayUserId(params) {
    return req("get", "SelfPayUsers/GetByUserId", params);
  },
  GetCategory(params) {
    return req("get", "Categorys/Load", params);
  },
  // 巴士路線
  busStationLines(params) {
    return req("get", "busStationLines/Load", params);
  },
  // 取得巴士路線隸屬站牌
  busLinesData(params) {
    return req("get", "busStationLines/get", params);
  },
  // 巴士站牌
  busStations(params) {
    return req("get", "busStations/Load", params);
  },
  // 巴士路線隸屬站牌
  busRouteGet(params) {
    return req("get", "busStationLiness/Get", params);
  },
  // 巴士預約
  OrderOfBusUsers(params) {
    return req("post", "OrderOfBusUsers/Add", params);
  },
  // 巴士調度接口 /api/DespatchOfBusUsers/Load
  // LoadBusUser(params) {
  //   return req("get", "DespatchOfBusUsers/Load", params);
  // },
};

export default api;