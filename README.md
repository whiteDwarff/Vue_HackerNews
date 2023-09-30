![header](https://capsule-render.vercel.app/api?type=waving&color=timeGradient&text=API를%20사용하여%20Vue-Hacker-News%20구현📰&animation=twinkling&fontSize=23&fontAlignY=40&fontAlign=70&height=250&width=1325&align=center)
<br>
<br>
<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/axios-412991?style=flat&logo=axios&logoColor=#5A29E4"/>
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logoColor=#fff"/>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
</div>
<br>
<br>
<br>

<div align="center"">
🔗 [VueHackerNews-URL 바로가기]  (https://velvety-duckanoo-58de5e.netlify.app/news)
</div>
<br>
<br>
<br>

## Tech
**1. vue2.0**<br>
>*vue create hacker-news*<br>

**2. vuex**<br>
>*npm install vuex@next*

**3. router**<br>
>*npm install vue-router@4*

**4. axios**<br>
>*npm install axios*

<br>
<br>

## 🔗 Item feeds

| Name | URL |
| --- | --- |
| News| https://api.hnpwa.com/v0/news/1.json |
| User | https://api.hnpwa.com/v0/user/1.json |
| Ask | https://api.hnpwa.com/v0/ask/1.json |
| Jobs | https://api.hnpwa.com/v0/jobs/1.json |

<br>

## 💿 Vuex Info
| Name | State |
| --- | --- |
|  store | user |
|  store | item  |
|  store | list  |

<br>

## 🖥️ Views

>*nav의 menu를 클릭 시 axios를 통해 데이터가 호출되며 vuex의 list가 갱신됩니다.*

**1.News**<br> 
  - 프로젝트의 메인화면 입니다.  
  - 타이틀을 클릭 시 외부 페이지에 연결됩니다.
<img width="1442" alt="news" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/a58f096c-3e80-4e94-a876-ca7375d71868"><br>
<img width="1442" alt="newsLink" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/eae65893-02d9-43b7-b6ca-27dfef1cb529"><br>

<br>

**2. Ask**<br> 
  - 사용자들의 소통공간 입니다.
  - 타이틀을 클릭하면 사용자의 질문을 확인할 수 있습니다.
  - vuex의 item이 갱신됩니다.
<img width="1442" alt="ask" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/4ef59bfe-c580-4a0a-9350-85f558fbf6ff"><br>
<img width="1442" alt="askItem" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/e14e91c2-e2ab-4ebb-a832-424e47cdeba4"><br>
<br><br>

**3. Jobs**<br> 
  - 다양한 직업 정보를 확인할 수 있습니다.
<img width="1442" alt="jobs" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/1144a9e1-62b8-471e-ab9c-b365e6cae073"><br><br>

  - 타이틀을 클릭 시 상세 정보를 확인할 수 있습니다.
<img width="1442" alt="jobs-item" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/0792e931-3b6b-44a2-a21b-b87730e0c5dd"><br><br>

  - 타이틀의 속성에 domain이 있다면 외부 링크로 연결됩니다.
<img width="1442" alt="jobs-link" src="https://github.com/whiteDwarff/Vue_HackerNews/assets/115057117/fcad4f8e-775f-47ab-84f2-16942f7fb43d"><br><br>


