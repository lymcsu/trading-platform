<template>
    <div class="news-page">
         <div class="np-header clear-fix">
            <h1 class="np-title">最新动态</h1>
            <el-button type="primary" class="np-searchBtn">搜索</el-button>
            <el-input placeholder="动态检索" class="np-search"></el-input>        
        </div>
        <div class="np-news">
            <ul class="np-news-list">
                <li v-for="data in tableData">
                    <a class="np-news-title">{{ data.news_title }}</a>
                    <p class="np-news-date">{{ data.news_date }}</p>
                </li>
            </ul>
            <div class="np-pagination">
                <el-pagination background  layout=" prev, pager, next" :total="1000"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'news',
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    data () {
        return {
            tableData: [{
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }, {
            news_date: '2016-05-02',
            news_title: '【系统】BCEX即将开启LLT兑换为SNET通道，并上线SNET对ETH交易'
            }]
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
.el-menu-item {
    padding: 0;
    a {
        display: block;
        padding: 0 20px;
    }
}

.news-page {
    line-height: 50px;
    margin: 25px 15% 0 15%;
    background: $backgroundColor;
    border: 1px solid $componentsBorderGrey;
}

.np-header {
    width: 100%;
    padding: 15px 20px;
    color: $fontColorBlack;
    border-bottom: 1px solid $componentsBorderGrey;
}
.np-title {
    float: left;
    font-weight: normal;
    font-size: 20px;
}

.np-search {
    width: 200px;
    float: right;
}
.np-searchBtn {
    float: right;
    margin-left: 15px;
    margin-top: 5px; 
}
.np-news {
    width: 100%;
}
.np-news-list li {
    border-bottom: 1px dashed $componentsBorderGrey;
    height: 50px;
    padding: 0 20px;
    font-size: 14px;
}
.np-news-title {
    float: left;
    &:hover {
        color: $blue;
    }
    color: $fontColorBlack;
}
.np-news-date {
    float: right;
    color: $fontColorBlack;
}
.np-pagination {
    margin: 20px 0 0 28%;
    height: 40px;
}
</style>
