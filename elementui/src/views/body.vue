<template>
  <div>
  <el-row id="part1">
    <el-col class="part1Title"><span>财鱼更懂你</span></el-col>
    <el-col :sm="20" offset="2" class="part-cnt">
      <el-row>
        <el-col :sm="12">
          <div class="part1_cnt_box img-bg">
            <img src="../assets/img/part1_cnt_lt_bg.png" class="banner-img am-img-responsive"  alt="">
            <div class="part1_cnt_bg lt_bg">
              <div class="part1_cnt_title">企业</div>
              <div class="part1_cnt_txt">税收政策变化快、更严格用工方式多样化、雷区多白白浪费大量 <br>精力、人力、物力、财力</div>
            </div>
          <div class="part1_cnt_bootom">利润少！风险大！</div>
          </div>
        </el-col>
        <el-col :sm="12">
          <div class="part1_cnt_box img-bg">
            <img src="../assets/img/part1_cnt_rt_bg.png" class="banner-img am-img-responsive"  alt="">
            <div class="part1_cnt_bg rt_bg">
              <div class="part1_cnt_title">个人</div>
              <div class="part1_cnt_txt">不懂财务、不懂税收<br>算税、交税无从下手<br>生活成本太高，交税交到心疼</div>
            </div>
          <div class="part1_cnt_bootom">收入低！税太高！</div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <div class="am-cf"></div>
  <el-row id="part2">
    <el-col class="part1Title"><span>管家更靠谱</span></el-col>
    <el-col>
      <div class="part2-cnt">
        <P>政府认可、紧跟政策</P>
        <P>税务筹划合理、合法、合规</P>
        <P>一对一量身定制方案</P>
        <P>专业、安全、高效、省心、贴心</P>
      </div>
    </el-col>
  </el-row>
  <div class="am-cf"></div>
  <el-row id="smallBanner">
    <div class="smbanner-cnt">
      <ul class="am-cf">
        <li><p>企业管理</p></li>
        <li><p>资金监管</p></li>
        <li class="sm-txt"><p><span>便捷签约</span><span>查合同</span><span>查工资</span></p></li>
        <li><p>一键发薪</p></li>
        <li> <p>员工维护</p></li>
      </ul>
    </div>
  </el-row>
  <div class="am-cf"></div>
  <el-row id="part3">
    <el-col class="part3-tlt">节税效果</el-col>
    <el-col class="part3-cnt am-cf">
      <el-row>
        <el-col :sm="22" offset="1" class="part3-cnt-dl">
          <el-row >
            <el-col :sm="12" class="lt-dl">合作前</el-col>
            <el-col :sm="12" class="rt-dl">合作后</el-col>
          </el-row>
       </el-col>
        <el-col :sm="22" offset="1" class="part3-cnt-dl">
          <el-row >
            <el-col :sm="12" class="lt-dl">利润总额：300万</el-col>
            <el-col :sm="12" class="rt-dl">利润总额：300万</el-col>
          </el-row>
        </el-col>
        <el-col :sm="22" offset="1" class="part3-cnt-dl">
          <el-row >
            <el-col :sm="12" class="lt-dl">企业所得税：300万*25%=75万</el-col>
            <el-col :sm="12" class="rt-dl">企业所得税：<span class="color-ffd">0</span></el-col>
          </el-row>
        </el-col>
        <el-col :sm="22" offset="1" class="part3-cnt-dl">
          <el-row >
            <el-col :sm="12" class="lt-dl">个人所得税：（300万-75万）*20%=45万</el-col>
            <el-col :sm="12" class="rt-dl">个人所得税：<span class="color-ffd">500万*3.5%=17.5万</span></el-col>
          </el-row>
        </el-col>
        <el-col :sm="22" offset="1" class="part3-cnt-dl">
          <el-row >
            <el-col :sm="12" class="lt-dl">税收合计：120万</el-col>
            <el-col :sm="12" class="rt-dl">税收合计：<span class="color-ffd">17.5万</span></el-col>
          </el-row>
        </el-col>
        <el-col :sm="22" offset="1" class="part3-cnt-dl">
          <el-row >
            <el-col :sm="12" class="lt-dl">综合税负：40%</el-col>
            <el-col :sm="12" class="rt-dl">综合税负： <span class="color-ffd">5.8%</span></el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="part3-bom"><p>该方案为通用方案，根据不同的行业发薪需求，税筹方案也会不同，</p><p>在线留言或电话咨询，将会有专人为您详细解答</p></el-col>
  </el-row>
  <div class="am-cf"></div>
  <el-row id="part4">
    <el-col class="part1Title"><span>合作更便捷</span></el-col>
    <el-col class="part4-cnt">
      <el-row>
        <el-col :sm="18" offset="3" class="part4-cnt-box">
          <div class="part4-cnt-box-tbg am-cf">
            <div class="part4-cnt-box-item">
              <div class="item-index"><span>1</span></div>
              <div class="item-name">平台咨询</div>
              <div class="item-pic"><img src="../assets/img/p4_item_img1.png" alt=""></div>
            </div>
            <div class="part4-cnt-box-item">
              <div class="item-index"><span>2</span></div>
              <div class="item-name">确定方案</div>
              <div class="item-pic"><img src="../assets/img/p4_item_img2.png" alt=""></div>
            </div>
            <div class="part4-cnt-box-item">
              <div class="item-index"><span>3</span></div>
              <div class="item-name">签署协议</div>
              <div class="item-pic"><img src="../assets/img/p4_item_img3.png" alt=""></div>
            </div>
            <div class="part4-cnt-box-item">
              <div class="item-index"><span>4</span></div>
              <div class="item-name">享受服务</div>
              <div class="item-pic"><img src="../assets/img/p4_item_img4.png" alt=""></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <div class="am-cf"></div>
    <el-col class="part4-bom">
      <el-button type="info" class="message-btn">在线留言</el-button>
      <p>您也可以拨打0571-81903306 电话咨询</p>
    </el-col>
  </el-row>
  <div class="am-cf"></div>
  <el-row id="part5">
      <el-col class="part1Title"><span>更值得信赖</span></el-col>
      <el-col class="part5-cnt">
        <el-row>
          <el-col :sm="20" offset="2">
            <div class="part5-cnt-p">
              <p>财鱼是由政府扶持、授权资质，专注于提供国家税收优惠政策信息，确保税务筹划效果的落地执行和管理的平台。</p>
              <p>财鱼为企业、企业全职/兼职员工、自由职业者提供税收筹划等一站式服务，合理节税，有效解决传统模式下的员工（自由职业者）高个税、企业高所得税问题，实现企业可以长期、稳定、无风险的享受税收优惠政策的长远目标。</p>
              <p>我们的团队深耕地方政府多年，工商、税务、财政、招商、园区关系到位。我们强于合法合规的税收筹划，你的所有事项全部打包给我们，无需操心与来回奔波，更省心、安心。</p>
            </div>
          </el-col>
          <el-col :sm="20" offset="2">
            <div class="part5-cnt-bom">
              <div class="part-bom-item">
                <img src="../assets/img/part5_cnt_img1.png" alt="">
                <p>丰富的行业经验</p>
              </div>
              <div class="part-bom-item">
                <img src="../assets/img/part5_cnt_img2.png" alt="">
                <p>专业的团队服务</p>
              </div>
              <div class="part-bom-item">
                <img src="../assets/img/part5_cnt_img3.png" alt="">
                <p>政府授权品质保障</p>
              </div>
              <div class="part-bom-item">
                <img src="../assets/img/part5_cnt_img4.png" alt="">
                <p>政策优惠覆盖全国</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  <div class="am-cf"></div>
  <el-row id="part6">
    <el-col class="part6-cnt"><strong>数万企业、千万用户</strong>信赖财鱼</el-col>
  </el-row>



  </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
