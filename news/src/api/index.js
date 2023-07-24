import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// 공통된 기능들을 하나의 함수로 정의
async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`)
  } catch (err) {
    console.log(err);
  }
}

// 2. API 함수들을 정리
async function fetchNewsList() {
  try {
    return await axios.get(`${config.baseUrl}news/1.json`);
  } catch (err) {
    console.log(err);
  }
}
async function fetchJobsList() {
  try {
    let response = await axios.get(`${config.baseUrl}jobs/1.json`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function fetchAskList() {
  try {
    return await axios.get(`${config.baseUrl}ask/1.json`);
  } catch (err) {
    console.log(err);
  }
}
async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`)
  } catch (err) { console.log(err); }
}
async function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`)
}


export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
}