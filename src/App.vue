<template>
  <div id="app" @click="closeAllMenus">
    <header id="header">
      <h1 class="logo">
        <router-link to="/Home">
          <img src="./assets/park_logo.png" alt="서울어린이대공원" class="logo_img">
        </router-link>
      </h1>
      <div class="search_content" :class="{ 'searchActive' : isSearchVisible }">
        <div class="search_txt_btn_wrap" @click.stop :class="{ 'searchTxtBtnActive' : isSearchVisible}">
          <input type="text" id="search_txt" name="search_txt" placeholder="검색어를 입력해주세요.">
          <button type="submit" class="search_txt_btn">검색하기</button>
        </div>
      </div>
      <nav class="gnb" :class="{ 'active' : isMenuVisible }">
        <h2 class="hide">전체 메뉴</h2>
        <ul>
          <span class="login_lang_wrap">
            <li class="login" @click="closeMenuOnLogin"><router-link to="/login"><img src="./assets/login1_w.png" alt=""><p>로그인</p></router-link></li>
            <li class="lang">
              <select>
                <option>KOR</option>
                <option>ENG</option>
              </select>
            </li>
          </span>
          <li class="animal">
            <button type="button" class="animal_btn" @click="toggleAnimalMenu">동물나라<img :class="{ 'rotate' : isAnimalMenuOpen }" src="./assets/more_btn.png"></button>
            <transition name="fade">
              <ul v-show="isAnimalMenuOpen">
                <li @click="closeMenuOnMenuItemClick"><router-link to="/animal">동물원 관람안내</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/animalpresent">동물현황</router-link></li>
                <!-- <li><router-link to="/animalprogram">체험프로그램</router-link></li> -->
              </ul>
            </transition>
            <!-- <button type="button" class="menu_btn_open"><img src="./assets/more_btn.png" alt="펼치기"></button>
            <button type="button" class="menu_btn_close"><img src="./assets/more_btn_rotate.png" alt="접기"></button> -->
          </li>
          <li class="nature">
            <button type="button" class="nature_btn" @click="toggleNatureMenu">자연나라<img :class="{ 'rotate' : isNatureMenuOpen }" src="./assets/more_btn.png"></button>
            <transition name="fade">
              <ul v-show="isNatureMenuOpen">
                <li @click="closeMenuOnMenuItemClick"><router-link to="/nature">식물원 관람안내</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/natureindoor">실내정원</router-link></li>
                <!-- <li><router-link to="/natureprogram">체험프로그램</router-link></li> -->
              </ul>
            </transition>
            <!-- <button type="button" class="menu_btn_open"><img src="./assets/more_btn.png" alt="펼치기"></button>
            <button type="button" class="menu_btn_close"><img src="./assets/more_btn_rotate.png" alt="접기"></button> -->
          </li>
          <li class="funny">
            <button type="button" class="funny_btn" @click="toggleFunnyMenu">재미나라<img :class="{ 'rotate' : isFunnyMenuOpen }" src="./assets/more_btn.png"></button>
            <transition name="fade">
              <ul v-show="isFunnyMenuOpen">
                <li @click="closeMenuOnMenuItemClick"><a href="https://www.childrenpark.net/" target="_blank">놀이동산</a></li>
                <li @click="closeMenuOnMenuItemClick"><a href="https://www.kidsautopark.org/" target="_blank">키즈오토파크</a></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/funny">놀이터</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><a href="https://www.seoulchildrensmuseum.org/main.do" target="_blank">서울 상상나라</a></li>
                <!-- <li><router-link to="/funnyprogram">체험프로그램</router-link></li> -->
              </ul>
            </transition>
            <!-- <button type="button" class="menu_btn_open"><img src="./assets/more_btn.png" alt="펼치기"></button>
            <button type="button" class="menu_btn_close"><img src="./assets/more_btn_rotate.png" alt="접기"></button> -->
          </li>
          <li class="use">
            <button type="button" class="use_btn" @click="toggleUseMenu">운영안내<img :class="{ 'rotate' : isUseMenuOpen }" src="./assets/more_btn.png"></button>
            <transition name="fade">
              <ul v-show="isUseMenuOpen">
                <li @click="closeMenuOnMenuItemClick"><router-link to="/use">이용안내</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/money">이용요금</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/water">수경시설</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><a href="https://www.sisul.or.kr/open_content/childrenpark/map_ko.jsp" target="_blank">공원지도</a></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/parking">주차안내</router-link></li>
                <li @click="closeMenuOnMenuItemClick"><router-link to="/location">찾아오시는길</router-link></li>
              </ul>
            </transition> 
          </li>
          <!-- <li class="inform">
            <button type="button" class="inform_btn" @click="toggleInformMenu">참여·알림<img :class="{ 'rotate' : isInformMenuOpen }" src="./assets/more_btn.png"></button>
            <transition name="fade">
              <ul v-show="isInformMenuOpen">
                <li><router-link to="/inform">안내사항</router-link></li>
                <li><router-link to="/citizen">시민의 소리</router-link></li>
                <li><router-link to="/qna">자주하는질문</router-link></li>
                <li><router-link to="/program">체험프로그램</router-link></li>
                <li><router-link to="/rental">시설대관신청</router-link></li>
              </ul>
            </transition> 
          </li> -->
          <!-- <li><router-link to="/park">대공원소개</router-link></li>
          <li><router-link to="/event">참여.알림</router-link></li> -->
        </ul>
      </nav>

      <div class="menu_btn_wrap">
        <button type="button" class="search" @click="toggleSearchMenu">
          <!-- <img src="./assets/search.png" alt="검색"> -->
        </button>
        <button type="button" v-if="!isMenuVisible" class="menu" @click="toggleMenu">
          <!-- <img src="./assets/menu.png" alt="메뉴"> -->
        </button>
        <button type="button" v-else class="close" @click="toggleMenu">
          <!-- <img src="./assets/close.png" alt="메뉴 닫기"> -->
        </button>
      </div>

    </header>
    
    <main id="main">
      <router-view />
    </main>

    <footer id="footer">
      <h2 class="hide">사이트 이용 안내</h2>
      <ul class="site">
        <li><a href="#none">서울시설공단</a></li>
        <li><a href="#none">찾아오시는길</a></li>
        <li><a href="#none">고객서비스헌장</a></li>
        <li class="site_p"><a href="#none">개인정보처리방침</a></li>
        <li><a href="#none">사이트맵</a></li>
      </ul>

      <div class="site_info">
        <h2 class="hide">사이트 정보 안내</h2>
        <address>04991 서울시 광진구 능동로 216 서울어린이대공원</address>
        <p>TEL : 02)450-9311</p>
        <p class="copy">Copyright(c) 2015 Seoul Facilities Coporation. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
      isSearchVisible: false,
      isAnimalMenuOpen: false,
      isNatureMenuOpen: false,
      isFunnyMenuOpen: false,
      isUseMenuOpen: false,
      isInformMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
      this.isSearchVisible = false;
    },
    toggleSearchMenu() {
      this.isSearchVisible = !this.isSearchVisible
      this.isMenuVisible = false;
    },
    toggleAnimalMenu() {
      this.isAnimalMenuOpen = !this.isAnimalMenuOpen;
      this.isNatureMenuOpen = false;
      this.isFunnyMenuOpen = false;
      this.isUseMenuOpen = false;
      this.isInformMenuOpen = false;
    },
    toggleNatureMenu() {
      this.isNatureMenuOpen = !this.isNatureMenuOpen;
      this.isAnimalMenuOpen = false;
      this.isFunnyMenuOpen = false;
      this.isUseMenuOpen = false;
      this.isInformMenuOpen = false;
    },
    toggleFunnyMenu() {
      this.isFunnyMenuOpen = !this.isFunnyMenuOpen;
      this.isNatureMenuOpen = false;
      this.isAnimalMenuOpen = false;
      this.isUseMenuOpen = false;
      this.isInformMenuOpen = false;
    },
    toggleUseMenu() {
      this.isUseMenuOpen = !this.isUseMenuOpen;
      this.isNatureMenuOpen = false;
      this.isAnimalMenuOpen = false;
      this.isFunnyMenuOpen = false;
      this.isInformMenuOpen = false;
    },
    toggleInformMenu() {
      this.isInformMenuOpen = !this.isInformMenuOpen;
      this.isNatureMenuOpen = false;
      this.isAnimalMenuOpen = false;
      this.isUseMenuOpen = false;
      this.isFunnyMenuOpen = false;
    },
    closeAllMenus(event) {
      if(
        !event.target.closest('.animal') && 
        !event.target.closest('.nature') && 
        !event.target.closest('.funny') && 
        !event.target.closest('.use') && 
        !event.target.closest('.inform') && 
        !event.target.closest('.gnb') && 
        !event.target.closest('.search_content') && 
        !event.target.closest('.menu_btn_wrap')
        ) {
        this.isAnimalMenuOpen = false;
        this.isNatureMenuOpen = false;
        this.isFunnyMenuOpen = false;
        this.isMenuVisible = false;
        this.isSearchVisible = false;
        this.isUseMenuOpen = false;
        this.isInformMenuOpen = false;
      }
    },
    closeMenuOnLogin() {
      this.isMenuVisible = false;
    },
    closeMenuOnMenuItemClick() {
      this.isMenuVisible = false;
    }
  }
}
</script>

<style>
.hide {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  margin: -1px;
  text-indent: -9999px;
  border: none;
}
body, button, input {
  font-size: 15px;
  font-family: 'IBM Plex Sans KR', sans-serif;
}
body, nav, button, div, header, main, footer, ul, li, address, p, h1, h2, h3, h4, dl, dt, dd {
  margin: 0;
  padding: 0;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
ul, li {
  list-style: none;
}
address {
  font-style: normal;
}
img, a {
  vertical-align: bottom;
}
table {
    border-top: 2px solid #0389d0;
    border-bottom: 1px solid gray;
    border-collapse: collapse;
}
td {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
}
th {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;

    background: #efefef;
}
thead th:last-child {
  border-right-color: #efefef;
}


/* 헤더 */
header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  max-width: 100%;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid #cbcbcb;
}
.logo_img {
  max-height: 50px;
}
.logo {
  text-align: center;
  padding: 10px 0;
}
/* .search img {
  width: 10%;
} */
.search {
  width: 30px;
  height: 30px;
  background: url(./assets/search.png)no-repeat center/30px 30px;
  position: absolute;
  top: 15px;
  right: 55px;
}
.close {
  width: 32px;
  height: 30px;
  background: url(./assets/close.png)no-repeat center/40px 40px;
  position: absolute;
  top: 15px;
  right: 10px;

}
.menu {
  width: 30px;
  height: 30px;
  background: url(./assets/menu.png)no-repeat center/30px 30px;
  position: absolute;
  top: 15px;
  right: 10px;
}
.search_content {
  background: #fff;
  height: 100px;
  position: sticky;
  top: 80px;
  left: 0;
  z-index: 100;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  text-align: center;
  padding-top: 25px;
  box-sizing: border-box;
  
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  height: 0;
}

.searchActive {
  visibility: visible;
  opacity: 1;
  height: 100px;
}
.searchTxtBtnActive {
  visibility: visible;
  opacity: 1;
}

#search_txt {
  border: none;
  border: 3px solid #0389d0;
  border-radius: 30px;
  width: 60%;
  padding: 15px 20px;
  box-sizing: border-box;
  outline: none;
}
.search_txt_btn {
  width: 25px;
  height: 25px;
  background: url(./assets/search.png)no-repeat center/25px 25px;
  text-indent: -9999px;
  position: absolute;
  top: 25%;
  right: 22%;
}
.search_txt_btn_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.gnb {
  background: #fff;
  width: 500px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  border-left: 1px solid #e9e9e9;
  box-sizing: border-box;


  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  width: 0;
}
.active {
  visibility: visible;
  opacity: 1;
  width: 500px;
}


.gnb > ul {
  padding: 70px 0 0;
}

.login img {
  width: 50px;
  /* border: 1px solid #000;
  border-radius: 50%; */
  /* padding: 5px; */
  /* box-sizing: border-box; */
  margin-left: 25px;
}
.login p {
  text-align: center;
  margin-left: 25px;
  margin-top: 5px;
  color: #fff;
}
.login_lang_wrap {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* gap: 10px; */
  margin-bottom: 30px;
  /* border-bottom: 1px solid #000; */
  background: #34d330;
  padding: 10px 0;
}
.lang select {
  border-style: none;
  /* padding: 2px 12px 2px 2px; */
  width: 60px;
  outline: none;
  margin: 15px 10px 0 0;
  background: none;
  color: #fff;
  font-size: 15px;
}
.lang option {
  color: #000;
}
.animal, .nature, .funny, .use, .inform {
  margin: 0 auto;
  border-bottom: 1px solid #cbcbcb;
  position: relative;
  width: 90%;
  /* padding: 0 30px;
  box-sizing: border-box; */
}
.animal_btn, .nature_btn, .funny_btn, .use_btn, .inform_btn {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}
.animal_btn img, .nature_btn img, .funny_btn img, .use_btn img, .inform_btn img {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 23px;
}
.rotate {
  transform: rotate(180deg);
}
.animal_btn:hover, .nature_btn:hover, .funny_btn:hover, .use_btn:hover, .inform_btn:hover {
  color: #34d330;
}

.animal li:hover, .nature li:hover, .funny li:hover, .use li:hover, .inform li:hover {
  background: #f5f5f5;
}
.animal ul, .nature ul, .funny ul, .use ul, .inform ul {
  margin-bottom: 10px;
}
.animal li, .nature li, .funny li, .use li, .inform li {
  padding: 5px 0 5px 40px;
  color: #676767;
  cursor: pointer;
  font-size: 18px;
}
.fade-enter-active {
  transition: opacity 0.3s ease-in;
}
/* .fade-leave-active {
  transition: opacity 0.2s;
} */
.fade-enter, .fade-leave-to {
  opacity: 0;
}



/* 푸터 */
footer {
  background: #252525;
  color: #fff;
  padding: 50px;
}
.site {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom: 40px;
}
.site_info {
  text-align: center;
}
.site_p {
  color: #0389d0;
}
.copy {
  color: #a2a2a2;
  margin-top: 10px;
}


@media screen and (max-width: 1220px){
  .site {
    flex-wrap: wrap;
    gap: 20px;
  }
}

@media screen and (max-width: 767px){
  .site {
    flex-wrap: wrap;
    gap: 20px;
  }
  .active {
    width: 100%
  }

  /* .animal a, .nature a, .funny a {
    padding-left: 30px;
  }
  .animal_btn, .nature_btn, .funny_btn {
    padding-right: 252px;
  } */
}
</style>
