<template>
    <div class="homePage">
        <div class="block">
            <el-carousel height="500px">
                <el-carousel-item v-for="(cover, index) in covers" :key="index">
                    <img class="coverBanner" :src="cover">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="mainContent">
            <p class="noticeLine">
                <i class="el-icon-bell"></i>
                <span>最新公告： <a class="latestNews">DCON與HOTC交易排名賽活動獎品已發放</a>
                    <a class="moreNews" href="javascript:;">查看更多</a>
                </span>
            </p>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane className="eee" label="CK.USD交易区" name="first">
                    <el-table
                    stripe
                    fit
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                        prop="name"
                        label="幣名"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="lastestPrice"
                        label="最新價格(CNET)"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="count24"
                        label="24H成交量">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="money24"
                        label="24H成交額(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="sumWorth"
                        label="總市值(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="updown24h"
                        label="24H漲跌">
                        </el-table-column>
                        <el-table-column
                        prop="updown7d"
                        align="center"
                        label="7D漲跌">
                        </el-table-column>
                        <el-table-column
                        label="操作" align="center" style="text-align: center;">
                            <template slot-scope="scope">
                                <el-button icon="el-icon-view"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="ETH交易区" name="second">
                    <el-table
                    stripe
                    fit
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                        prop="name"
                        label="幣名"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="lastestPrice"
                        label="最新價格(CNET)"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="count24"
                        label="24H成交量">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="money24"
                        label="24H成交額(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="sumWorth"
                        label="總市值(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="updown24h"
                        label="24H漲跌">
                        </el-table-column>
                        <el-table-column
                        prop="updown7d"
                        align="center"
                        label="7D漲跌">
                        </el-table-column>
                        <el-table-column
                        label="操作" align="center" style="text-align: center;">
                            <template slot-scope="scope">
                                <el-button icon="el-icon-view"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="BTC交易区" name="third">
                    <el-table
                    stripe
                    fit
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                        prop="name"
                        label="幣名"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="lastestPrice"
                        label="最新價格(CNET)"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="count24"
                        label="24H成交量">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="money24"
                        label="24H成交額(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="sumWorth"
                        label="總市值(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="updown24h"
                        label="24H漲跌">
                        </el-table-column>
                        <el-table-column
                        prop="updown7d"
                        align="center"
                        label="7D漲跌">
                        </el-table-column>
                        <el-table-column
                        label="操作" align="center" style="text-align: center;">
                            <template slot-scope="scope">
                                <el-button icon="el-icon-view"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="CNET交易区" name="fourth">
                    <el-table
                    stripe
                    fit
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                        prop="name"
                        label="幣名"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="lastestPrice"
                        label="最新價格(CNET)"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="count24"
                        label="24H成交量">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="money24"
                        label="24H成交額(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="sumWorth"
                        label="總市值(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="updown24h"
                        label="24H漲跌">
                        </el-table-column>
                        <el-table-column
                        prop="updown7d"
                        align="center"
                        label="7D漲跌">
                        </el-table-column>
                        <el-table-column
                        label="操作" align="center" style="text-align: center;">
                            <template slot-scope="scope">
                                <el-button icon="el-icon-view"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="分叉币交易区" name="fifth">
                    <el-table
                    stripe
                    fit
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                        prop="name"
                        label="幣名"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="lastestPrice"
                        label="最新價格(CNET)"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="count24"
                        label="24H成交量">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="money24"
                        label="24H成交額(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="sumWorth"
                        label="總市值(CNET)">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="updown24h"
                        label="24H漲跌">
                        </el-table-column>
                        <el-table-column
                        prop="updown7d"
                        align="center"
                        label="7D漲跌">
                        </el-table-column>
                        <el-table-column
                        label="操作" align="center" style="text-align: center;">
                            <template slot-scope="scope">
                                <el-button icon="el-icon-view"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'home',
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    data () {
        return {
            covers: [require('../assets/cover1.jpg'), require('../assets/cover2.jpg'), require('../assets/cover3.jpg')],
            activeName: 'first',
            tableData: [{
                lastestPrice: '8731.00↓',
                name: '比特幣 BTC',
                count24: 242,
                money24: 2304,
                sumWorth: 553793100.00,
                updown24h: '+1.87%',
                updown7d: '-13.74%'
            }, {
                lastestPrice: '8731.00↓',
                name: '比特幣 BTC',
                count24: 242,
                money24: 2304,
                sumWorth: 553793100.00,
                updown24h: '+1.87%',
                updown7d: '-13.74%'
            }, {
                lastestPrice: '8731.00↓',
                name: '比特幣 BTC',
                count24: 242,
                money24: 2304,
                sumWorth: 553793100.00,
                updown24h: '+1.87%',
                updown7d: '-13.74%'
            }, {
                lastestPrice: '8731.00↓',
                name: '比特幣 BTC',
                count24: 242,
                money24: 2304,
                sumWorth: 553793100.00,
                updown24h: '+1.87%',
                updown7d: '-13.74%'
            }]
        }
    },
    components: {
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style lang="scss">
@import '../assets/_mixin.scss';

.homePage {
    transform: translateY(-61px);
    min-width: 1200px;
    .el-tabs__item {
        font-size: 18px;
        height: 50px;
        color: #666;
        padding: 0 30px;
    }
    .el-tabs {
        margin-bottom: 50px;
    }
}
.coverBanner {
    transform: translateX(-50%);
    position: absolute;
    left: 50%
}
.mainContent {
    padding: 0 40px;
}
.noticeLine {
    background: #fff;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    height: 60px;
    margin: 20px auto;
    text-align: center;
    line-height: 60px;
    color: #4a5f7b;
    font-size: 14px;
    .el-icon-bell {
        color: $blue;
        font-size: 16px;
    }
    .latestNews:hover {
        color: $blue;
    }
    .moreNews {
        color: $blue;
        margin-left: 20px;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
