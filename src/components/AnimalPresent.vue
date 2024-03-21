<template>
    <div id="animalpresent">
        <div class="animal_gnb">
            <h2>동물나라</h2>
            <ul>
                <li><router-link to="/animal">동물원 관람안내</router-link></li>
                <li><router-link to="/animalpresent">동물현황</router-link></li>
                <!-- <li><router-link to="/animalprogram">체험프로그램</router-link></li> -->
            </ul>
        </div>

        <div class="animalpresent_content_wrap">
            <h3>동물현황</h3>
            <div class="btn_wrap">
                <button type="button" class="btn1" :class="{ active: isBtnActive }" @click="showAnimal1Content">포유류</button>
                <button type="button" class="btn2" :class="{ active: !isBtnActive }" @click="showAnimal2Content">조류</button>
                <!-- <button type="button" class="btn3" :class="{ active: isBtn3Active }" @click="showAnimal3Content">파충류</button> -->
            </div>

            <h4>이름을 클릭하면 자세한 정보를 볼 수 있어요!</h4>
            <div class="animal1_wrap" ref="animal1Content">
                <div class="a1_wrap">
                    <img src="../assets/a1.jpeg" alt="">
                    <dl>
                        <dt>바위너구리</dt>
                        <dd>분류 : 바위너구리목 바위너구리과</dd>
                        <dd>분포 : 사하라사막 이남 아프리카 일대</dd>
                        <dd>먹는 것 : 건초, 배합사료 등</dd>
                    </dl>
                </div>
                    
                <div class="a2_wrap">
                    <img src="../assets/a2.jpeg" alt="">
                    <dl>
                        <dt>코먼마모셋</dt>
                        <dd>분류 : 영장목 마모셋과</dd>
                        <dd>분포 : 브라질 중동부</dd>
                        <dd>먹는것 : 과채류, 전용사료</dd>
                    </dl>
                </div>
                
                <div class="a3_wrap">
                    <img src="../assets/a3.jpeg" alt="">
                    <dl>
                        <dt>알락꼬리여우원숭이</dt>
                        <dd>분류 : 영장목 여우원숭이과</dd>
                        <dd>분포 : 마다가스카르섬 남부 </dd>
                        <dd>먹는것 : 과채류, 전용사료 등</dd>
                    </dl>
                </div>
                    
            
                <div class="a4_wrap">
                    <img src="../assets/a4.jpeg" alt="">
                    <dl>
                        <dt>트리포큐파인</dt>
                        <dd>분류 : 쥐목 아메리카포큐파인과</dd>
                        <dd>분포 : 남아메리카 일대</dd>
                        <dd>먹는것 : 건초, 과채류, 배합사료 등</dd>
                    </dl>
                </div>
                
                <div class="a5_wrap">
                    <img src="../assets/a5.jpeg" alt="">
                    <dl>
                        <dt>벌거숭이두더지쥐</dt>
                        <dd>분류 : 쥐목 두더지쥐과</dd>
                        <dd>분포 : 동아프리카 </dd>
                        <dd>먹는것 : 과채류 및 구근류, 배합사료 등</dd>
                    </dl>
                </div>
                
                <div class="a6_wrap">
                    <img src="../assets/a6.jpeg" alt="">
                    <dl>
                        <dt>검은등자칼</dt>
                        <dd>분류 : 식육목 개과</dd>
                        <dd>분포 : 아프리카 동남부 </dd>
                        <dd>먹는것 : 닭고기, 쇠고기, 마우스</dd>
                    </dl>
                </div>
                
                <div class="a7_wrap">
                    <img src="../assets/a7.jpeg" alt="">
                    <dl>
                        <dt>스라소니</dt>
                        <dd>분류 : 식육목 고양이과</dd>
                        <dd>분포 : 유럽, 유라시아 일대 </dd>
                        <dd>먹는것 : 닭고기, 소고기, 마우스</dd>
                    </dl>
                </div>
                
                <div class="a8_wrap">
                    <img src="../assets/a8.jpeg" alt="">
                    <dl>
                        <dt>붉은여우</dt>
                        <dd>분류 : 식육목 개과</dd>
                        <dd>분포 : 유라시아 북부 및 북아메리카 등</dd>
                        <dd>먹는것 : 닭고기, 쇠고기, 마우스</dd>
                    </dl>
                </div>
                
                <div class="a9_wrap">
                    <img src="../assets/a9.jpeg" alt="">
                    <dl>
                        <dt>왈라루</dt>
                        <dd>분류 : 캥거루목 캥거루과</dd>
                        <dd>분포 : 오스트레일리아</dd>
                        <dd>먹는것 : 건초, 과채류, 배합사료 등</dd>
                    </dl>
                </div>
                
                <div class="a10_wrap">
                    <img src="../assets/a10.jpeg" alt="">
                    <dl>
                        <dt>미니말</dt>
                        <dd>분류 : 말목 말과</dd>
                        <dd>분포 : 미국, 유럽 등</dd>
                        <dd>먹는것 : 건초, 전용사료 등</dd>
                    </dl>
                </div>
            </div>

            <div class="animal2_wrap" ref="animal2Content">
                <div class="b1_wrap">
                    <img src="../assets/b1.jpeg" alt="">
                    <dl>
                        <dt>쇠재두루미</dt>
                        <dd>분류 : 두루미목 두루미과</dd>
                        <dd>분포 : 중앙아시아 및 동아시아 북동부</dd>
                        <dd>먹는 것 : 배합사료 등</dd>
                    </dl>
                </div>
                    
                <div class="b2_wrap">
                    <img src="../assets/b2.jpeg" alt="">
                    <dl>
                        <dt>코먼마모셋</dt>
                        <dd>분류 : 영장목 마모셋과</dd>
                        <dd>분포 : 브라질 중동부</dd>
                        <dd>먹는것 : 과채류, 전용사료</dd>
                    </dl>
                </div>
                
                <div class="b3_wrap">
                    <img src="../assets/b3.jpeg" alt="">
                    <dl>
                        <dt>알락꼬리여우원숭이</dt>
                        <dd>분류 : 영장목 여우원숭이과</dd>
                        <dd>분포 : 마다가스카르섬 남부 </dd>
                        <dd>먹는것 : 과채류, 전용사료 등</dd>
                    </dl>
                </div>
                    
            
                <div class="b4_wrap">
                    <img src="../assets/b4.jpeg" alt="">
                    <dl>
                        <dt>트리포큐파인</dt>
                        <dd>분류 : 쥐목 아메리카포큐파인과</dd>
                        <dd>분포 : 남아메리카 일대</dd>
                        <dd>먹는것 : 건초, 과채류, 배합사료 등</dd>
                    </dl>
                </div>
                
                <div class="b5_wrap">
                    <img src="../assets/b5.jpeg" alt="">
                    <dl>
                        <dt>벌거숭이두더지쥐</dt>
                        <dd>분류 : 쥐목 두더지쥐과</dd>
                        <dd>분포 : 동아프리카 </dd>
                        <dd>먹는것 : 과채류 및 구근류, 배합사료 등</dd>
                    </dl>
                </div>
                
                <div class="b6_wrap">
                    <img src="../assets/b6.jpeg" alt="">
                    <dl>
                        <dt>검은등자칼</dt>
                        <dd>분류 : 식육목 개과</dd>
                        <dd>분포 : 아프리카 동남부 </dd>
                        <dd>먹는것 : 닭고기, 쇠고기, 마우스</dd>
                    </dl>
                </div>
                
                <div class="b7_wrap">
                    <img src="../assets/b7.jpeg" alt="">
                    <dl>
                        <dt>스라소니</dt>
                        <dd>분류 : 식육목 고양이과</dd>
                        <dd>분포 : 유럽, 유라시아 일대 </dd>
                        <dd>먹는것 : 닭고기, 소고기, 마우스</dd>
                    </dl>
                </div>
                
                <div class="b8_wrap">
                    <img src="../assets/b8.jpeg" alt="">
                    <dl>
                        <dt>붉은여우</dt>
                        <dd>분류 : 식육목 개과</dd>
                        <dd>분포 : 유라시아 북부 및 북아메리카 등</dd>
                        <dd>먹는것 : 닭고기, 쇠고기, 마우스</dd>
                    </dl>
                </div>
                
                <div class="b9_wrap">
                    <img src="../assets/b9.jpeg" alt="">
                    <dl>
                        <dt>흑따오기</dt>
                        <dd>분류 : 캥거루목 캥거루과</dd>
                        <dd>분포 : 오스트레일리아</dd>
                        <dd>먹는것 : 건초, 과채류, 배합사료 등</dd>
                    </dl>
                </div>
                
            </div>

            <div class="animal3_wrap" ref="animal3Content">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBtnActive: true,
        }
    },
    methods: {
        showAnimal1Content() {
            this.isBtnActive = true;
            this.$refs.animal1Content.style.display = 'block';
            this.$refs.animal2Content.style.display = 'none';
        },
        showAnimal2Content() {
            this.isBtnActive = false;
            this.$refs.animal1Content.style.display = 'none';
            this.$refs.animal2Content.style.display = 'flex';
        },
        // showAnimal3Content() {
        //     this.isBtn1Active = false;
        //     this.isBtn2Active = false;
        //     this.isBtn3Active = true;
        //     this.$refs.animal1Content.style.display = 'none';
        //     this.$refs.animal2Content.style.display = 'none';
        //     this.$refs.animal3Content.style.display = 'block';
        // },
    }
}
</script>

<style scoped>
#animalpresent {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.animal_gnb ul li:last-child {
    color: #34d330;
}
h3 {
    font-size: 28px;
    margin-bottom: 30px;
    padding-top: 10px;
    box-sizing: border-box;
}

/* GNB */
.animal_gnb {
    padding-top: 30px;
    width: 120px;
}
.animal_gnb h2 {
    font-size: 24px;
    margin-bottom: 25px;
}
.animal_gnb h2:after {
    content: "";
    width: 70px;
    height: 3px;
    display: block;
    background: #0389d0;
    margin-top: 10px;
}
.animal_gnb li {
    margin-bottom: 10px;
    font-size: 17px;
    color: gray;
}
.animal_gnb li:hover {
    color: #34d330;
    /* font-weight: bold; */
}
.animal_gnb ul {
    margin-left: 8px;
}
.animalpresent_content_wrap {
    max-width: 980px;
    margin: 0 auto;
}

/* 탭메뉴 */
.btn_wrap {
    display: flex;
    justify-content: center;
    margin: 20px 0 50px;
}
.btn_wrap button {
    font-size: 20px;
    width: 50%;
    padding: 5px;
    border: 1px solid #cbcbcb;
}
.animal2_wrap, .animal3_wrap {
    display: none;
    width: 980px;
}
.active {
    border: 1px solid #0389d0 ;
    color: #fff;
    background: #0389d0;
}






.animal1_wrap > div {
    border: 1px solid #cbcbcb;
    width: 250px;
    margin: 10px auto;
    padding: 20px;
}
.animal1_wrap dt {
    text-align: center;
    font-size: 18px;
    margin: 7px 0 30px;
}
.animal1_wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
.animal1_wrap img {
    width: 100%;
    margin-bottom: 10px;
}

.animal2_wrap > div {
    border: 1px solid #cbcbcb;
    width: 250px;
    margin: 10px auto;
    padding: 20px;
}
.animal2_wrap dt {
    text-align: center;
    font-size: 18px;
    margin: 7px 0 30px;
}
.animal2_wrap {
    /* display: flex; */
    flex-wrap: wrap;
    gap: 30px;
}
.animal2_wrap img {
    width: 100%;
    margin-bottom: 10px;
}



@media screen and (max-width: 1024px) {
    #animalpresent {
        display: block;
    }
    .animal_gnb {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    .animal_gnb h2:after {
        margin: 10px auto;
    }
    .animal_gnb ul {
        display: flex;
        justify-content: center;
        gap: 70px;
    }
}
@media screen and (max-width: 767px) {
    .animal_gnb ul {
        gap: 40px;
    }
}
</style>