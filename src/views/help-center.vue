<template>
    <div class="helpCenterPage">
        <div class="hc-header clear-fix">
            <h1 class="hc-title">帮助中心</h1>
            <el-button type="primary" class="hc-searchBtn">搜索</el-button>
            <el-input placeholder="全局搜索" class="hc-search"></el-input>        
        </div>
        <div class="hc-results">
             <ul class="hc-results-list">
                 <li>
                     <a class="hc-results-title">交易界面介绍及挂单说明</a>
                     <p class="hc-results-desc">交易界面介绍 交易说明 【委托信息】买卖价格是平台用户自由决定的</p>
                 </li>
                 <li>
                     <a class="hc-results-title">交易界面介绍及挂单说明</a>
                     <p class="hc-results-desc">交易界面介绍 交易说明 【委托信息】买卖价格是平台用户自由决定的</p>
                 </li>
                 <li>
                     <a class="hc-results-title">交易界面介绍及挂单说明</a>
                     <p class="hc-results-desc">交易界面介绍 交易说明 【委托信息】买卖价格是平台用户自由决定的</p>
                 </li>
             </ul>
        </div>
        <div class="hc-body">
            <div class="hc-list">
                <p>账户安全</p>
                <ul>
                    <li><a>新手入门视频</a></li>
                    <li><a>注册账户</a></li>
                    <li><a>实名认证（共享护照实时完成认证）</a></li>
                    <li><a>安全设置</a></li>
                    <li><a>更多账户相关问题>></a></li>
                </ul>
            </div>
            <div class="hc-list">
                <p>充值提现</p>
                <ul>
                    <li><a>如何用法定货币充值 / 提现</a></li>
                    <li><a>如何充币 / 提币BTC / ETH等数字货币</a></li>
                    <li><a>如何充值XRP、XLM等特殊币种</a></li>
                    <li><a>充币 / 提币不到账怎么办</a></li>
                    <li><a>更多充值提现相关问题>></a></li>
                </ul>
            </div>
            <div class="hc-list">
                <p>交易指南</p>
                <ul>
                    <li><a>BCEX交易规则及模式</a></li>
                    <li><a>交易界面介绍及挂单说明</a></li>
                    <li><a>综合交易示例（注册-充值-交易-变现）</a></li>
                    <li><a>服务费率标准汇总</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'help-center',
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    data () {
        return {
        }
    },
    components: {
    },
    methods: {
    }
}
</script>

<style lang="scss">
@import '../assets/_mixin.scss';
.helpCenterPage {
    padding: 0 25px;
    min-width: 1200px;
    line-height: 40px;
    .hc-header {
        width: 90%;
        margin: 30px auto 10px;
        padding-bottom: 15px;
        color: $fontColorBlack;
        border-bottom: 1px solid $componentsBorderGrey;
    }
    .hc-title {
        float: left;
        font-weight: normal;
        font-size: 20px;
    }
    .hc-search {
        width: 300px;
        float: right;
    }
    .hc-searchBtn {
        float: right;
        margin-left: 15px;
    }
    .hc-body {
        width: 90%;
        margin: 0 auto 50px;
        display: flex;
        .hc-list {
            flex: 1;
            font-size: 14px;
            color: $fontColorGrey;
            margin-right: 100px;
            p {
                color: $fontColorBlack;
                font-size: 18px;
            }
            li {
                line-height: 46px;
                border-bottom: 1px solid #ededf1;
                a:hover {
                    color: $blue;
                }
            }
        }
    }
    .hc-results {
        width: 90%;
        line-height: 1.5;
        margin: 0 auto 30px;
    }
    .hc-results-list li {
        border-bottom: 1px solid $componentsBorderGrey;
        padding: 15px 0;
    }
    .hc-results-title {
        font-size: 16px;
        &:hover {
            color: $blue;
        }
    }
    .hc-results-desc {
        max-width: 80%;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

</style>
