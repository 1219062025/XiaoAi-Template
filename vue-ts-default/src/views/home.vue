<template>
  <div id="home">
    <!-- 燃力补给按钮 -->
    <img
      src="@/assets/images/dialog_btn.png"
      class="fixed w-[121px] h-[113px] top-[232px] right-[12px] click-active"
      @click="dailyTaskShow = true" />
    <!-- 主播与用户头像框 -->
    <div class="flex-center pt-[343px]">
      <div class="flex-y-center flex-col mr-[23px]">
        <div
          class="w-[136px] h-[136px] bg-cover-center"
          :style="{ backgroundImage: `url(${getAssetsImages('header_area_user1')})` }"></div>
        <div
          class="w-[231px] h-[35px] leading-[35px] text-center text-[26px] text-[#4453DB] bg-[#fff] bg-opacity-40 rounded-[18px] single-ellipsis">
          我的名字有八个字
        </div>
      </div>
      <div class="flex-y-center flex-col">
        <div
          class="w-[136px] h-[136px] bg-cover-center"
          :style="{ backgroundImage: `url(${getAssetsImages('header_area_user2')})` }"></div>
        <div
          class="w-[231px] h-[35px] leading-[35px] text-center text-[26px] text-[#4453DB] bg-[#fff] bg-opacity-40 rounded-[18px] single-ellipsis">
          我的名字有八个字
        </div>
      </div>
    </div>
    <!-- 小标题和TIPS -->
    <div class="flex-x-center mt-[41px]">
      <img src="@/assets/images/header_area_title.png" class="w-[135px] h-[28px] mr-[6px]" />
      <img src="@/assets/images/tips_icon.png" class="w-[22px] h-[22px]" />
    </div>
    <!-- 倒计时 -->
    <div
      class="count-down-area flex-center w-[616px] h-[47px] mx-auto mt-[31px] text-[28px] text-[#ABE3EF] bg-opacity-60">
      <span>活动倒计时：</span>
      <span>7日55小时22分36秒</span>
    </div>
    <!-- 切换榜单按钮 -->
    <div
      class="relative w-[670px] h-[89px] mx-auto mt-[28px] bg-cover-center"
      :style="{ backgroundImage: `url(${getAssetsImages(`tab${rankType}`)})` }">
      <img v-show="rankType === 1" src="@/assets/images/tab1.png" class="absolute w-full h-full z-1" />
      <img v-show="rankType === 2" src="@/assets/images/tab2.png" class="absolute w-full h-full z-1" />
      <img v-show="rankType === 3" src="@/assets/images/tab3.png" class="absolute w-full h-full z-1" />
      <div class="relative flex-center w-full h-full z-3">
        <div class="flex-1 h-full" @click="rankType = 1"></div>
        <div class="flex-1 h-full" @click="rankType = 2"></div>
        <div class="flex-1 h-full" @click="rankType = 3"></div>
      </div>
    </div>
    <!-- 榜单 -->
    <div class="rank-bg-area w-[690px] min-h-[786px] mx-auto mt-[21px] pt-[31px] px-[19px] pb-[16px]">
      <div class="relative w-full h-[36px] text-[38px] text-[#3342AF]">
        <div class="absolute top-0 left-[26px]">排名</div>
        <div class="absolute top-0 left-[137px]">主播</div>
        <div class="absolute top-0 left-[521px]">里程碑</div>
      </div>
      <div class="rank-area w-full min-h-[680px] mt-[23px] px-[14px] pb-[9px]">
        <transition-group appear tag="div" name="fadeAn">
          <div
            v-for="(item, index) in currentRankData.slice(0, endRanking)"
            :key="index"
            class="flex-y-center justify-between w-full h-[123px] border-b border-b-[#B7C9FD] border-solid last:border-none">
            <!-- 排名 -->
            <svg width="40" height="25" class="inline-block ml-[10px] italic font-Alibaba">
              <defs>
                <linearGradient id="ranking" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" style="stop-color: #3e49d6" />
                  <stop offset="1" style="stop-color: #6c98fe" />
                </linearGradient>
              </defs>
              <text class="text" text-anchor="middle" x="50%" y="50%">{{ index + 1 }}</text>
            </svg>
            <!-- 主播信息 -->
            <div class="flex-y-center flex-1 ml-[25px]">
              <div class="flex-center flex-shrink-0 w-[80px] h-[80px] linear-3F4BD7-6993FB rounded-[50%]">
                <div class="w-[76px] h-[76px] rounded-[50%] bg-[#000]"></div>
              </div>
              <div class="w-[270px] text-[30px] text-[#4453DB] ml-[12px] single-ellipsis">我的名字有8个字</div>
            </div>
            <!-- 分数 -->
            <div class="w-[120px] text-center text-[28px] text-[#CB52EE] leading-[initial] whitespace-nowrap">
              10000067
            </div>
          </div>
        </transition-group>
        <img
          v-if="endRanking < currentRankData.length"
          class="w-[97px] h-[41px] mx-auto mt-[12px]"
          src="@/assets/images/more_btn.png"
          @click="endRanking = currentRankData.length" />
      </div>
    </div>
  </div>

  <!-- 燃力补给弹窗 -->
  <van-overlay :show="dailyTaskShow" z-index="99" @click.self="dailyTaskShow = false">
    <div class="position-center w-full">
      <img src="@/assets/images/dialog_title.png" class="w-[572px] h-[109px] mx-auto mb-[15px]" />
      <div
        class="relative w-[665px] h-[494px] pt-[51px] mx-auto bg-cover-center"
        :style="{ backgroundImage: `url(${getAssetsImages('dialog_bg')})` }">
        <!-- 每日0点刷新 -->
        <div class="absolute top-[13px] right-[43px] text-[24px] text-[#99D6EF] font-Alibaba">每日0点刷新</div>
        <!-- 任务列表区域 -->
        <div class="w-full px-[24px]">
          <div
            class="flex justify-between pl-[21px] pr-[7px] w-[617px] h-[119px] bg-[#CAE5FF] rounded-[15px] box-shadow-4A64D5 mb-[25px]">
            <img src="@/assets/images/user_icon.png" class="flex-shrink-0 self-center w-[70px] h-[79px] mr-[16px]" />
            <div class="flex-1 mt-[19px]">
              <div class="font-Alibaba text-[28px]">
                <span class="text-[#342DB5] mr-[15px]">每日登陆</span>
                <span class="text-[#B066DF]">0/1</span>
              </div>
              <div class="flex items-end mt-[16px] font-Alibaba">
                <div class="w-[35px] h-[35px] bg-[#C1C8FF] rounded-[5px] mr-[4px]"></div>
                <span class="text-[24px] text-[#5F70F6]">爱妮城堡*1</span>
              </div>
            </div>
            <div
              class="w-[146px] h-[74px] mt-[15px] bg-cover-center"
              :style="{ backgroundImage: `url(${getAssetsImages('complete_btn')})` }"></div>
          </div>
          <div
            class="flex justify-between pl-[21px] pr-[7px] w-[617px] h-[119px] bg-[#CAE5FF] rounded-[15px] box-shadow-4A64D5 mb-[25px]">
            <img src="@/assets/images/live_icon.png" class="flex-shrink-0 self-center w-[66px] h-[78px] mr-[18px]" />
            <div class="flex-1 mt-[19px]">
              <div class="font-Alibaba text-[28px]">
                <span class="text-[#342DB5] mr-[15px]">观看直播10分钟</span>
                <span class="text-[#B066DF]">0/10</span>
              </div>
              <div class="flex items-end mt-[16px] font-Alibaba">
                <div class="w-[35px] h-[35px] bg-[#C1C8FF] rounded-[5px] mr-[4px]"></div>
                <span class="text-[24px] text-[#5F70F6]">爱妮城堡*1</span>
              </div>
            </div>
            <div
              class="w-[146px] h-[74px] mt-[15px] bg-cover-center"
              :style="{ backgroundImage: `url(${getAssetsImages('toComplete_btn')})` }"></div>
          </div>
          <div
            class="flex justify-between pl-[19px] pr-[7px] w-[617px] h-[119px] bg-[#CAE5FF] rounded-[15px] box-shadow-4A64D5">
            <img src="@/assets/images/barrage_icon.png" class="flex-shrink-0 self-center w-[72px] h-[61px] mr-[14px]" />
            <div class="flex-1 mt-[19px]">
              <div class="font-Alibaba text-[28px]">
                <span class="text-[#342DB5] mr-[15px]">发送10条弹幕</span>
                <span class="text-[#B066DF]">0/10</span>
              </div>
              <div class="flex items-end mt-[16px] font-Alibaba">
                <div class="w-[35px] h-[35px] bg-[#C1C8FF] rounded-[5px] mr-[4px]"></div>
                <span class="text-[24px] text-[#5F70F6]">爱妮城堡*1</span>
              </div>
            </div>
            <div
              class="w-[146px] h-[74px] mt-[15px] bg-cover-center"
              :style="{ backgroundImage: `url(${getAssetsImages('completed_btn')})` }"></div>
          </div>
        </div>
      </div>
    </div>
  </van-overlay>

  <!-- 奖励弹窗 -->
  <van-overlay :show="awardShow" z-index="99" @click.self="awardShow = false">
    <div
      class="position-center w-[400px] h-[399px] pt-[87px] bg-[#CAE5FF] rounded-[30px] border-[3px] border-solid border-[#6F86EA]">
      <img src="@/assets/images/award_dialog_title.png" class="position-x-center w-[542px] h-[231px] top-[-192px]" />
      <div class="w-[129px] h-[129px] bg-[#C1C8FF] rounded-[20px]"></div>
    </div>
  </van-overlay>
</template>

<script setup lang="ts">
  import { getAssetsImages } from '@/utils';

  //#region 榜单逻辑
  const currentRankData = reactive(new Array(25).fill(1)); // 榜单数据
  const endRanking = ref(20); // 榜单显示数据量
  const rankType = ref(1); // 当前榜单 1-月之征途 2-飞船争霸 3-月之守护
  watch(rankType, (val) => {
    // console.log(val);
  });
  //#endregion

  //#region 弹窗逻辑
  const dailyTaskShow = ref(false); // 燃力补给弹窗是否显示
  const awardShow = ref(true); // 奖励弹窗是否显示
  //#endregion
</script>

<style scoped lang="scss">
  #home {
    padding-bottom: 24px;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/texture.png') no-repeat center 486px/ 750px 750px,
      url('@/assets/images/texture1.png') no-repeat right bottom/ 740px 607px,
      url('@/assets/images/header_bg.png') no-repeat center top/ 750px 750px,
      linear-gradient(0deg, #07257f 0%, #2781d6 calc(100% - 697px));

    .count-down-area {
      background: linear-gradient(
        90deg,
        rgba(49, 123, 207, 0) 0%,
        rgba(49, 123, 207, 0.99) 46%,
        rgba(49, 123, 207, 0) 100%
      );
    }

    .box-shadow-4A64D5 {
      box-shadow: 0 2px 10px 0 #4a64d5;
    }

    .rank-bg-area {
      background: url('@/assets/images/rank_bg_top.png') no-repeat center top/690px 417px,
        url('@/assets/images/rank_bg_main.png') no-repeat center 416px/690px calc(100% - 563px),
        url('@/assets/images/rank_bg_footer.png') no-repeat center bottom/690px 150px;
    }

    .rank-area {
      border-radius: 20px;
      background: url('@/assets/images/rank_top.png') no-repeat center top/652px 183px,
        url('@/assets/images/rank_main.png') no-repeat center 182px/652px calc(100% - 300px),
        url('@/assets/images/rank_footer.png') no-repeat center bottom/652px 121px;

      .linear-3F4BD7-6993FB {
        background: linear-gradient(0deg, #3f4bd7, #6993fb);
      }

      .text {
        text-anchor: middle;
        dominant-baseline: middle;
        fill: url(#ranking);
      }
    }

    .fadeAn-enter-from {
      padding-bottom: 53px;
      height: 0 !important;
      opacity: 0;
    }

    .fadeAn-leave-to {
      padding-bottom: 0;
      opacity: 1;
    }

    .fadeAn-enter-active,
    .fadeAn-leave-active {
      transition-duration: 0.3s;
    }

    .fadeAn-enter-to,
    .fadeAn-leave-from {
      padding-bottom: 53px;
      opacity: 1;
    }
  }
</style>
