<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
    </div>
</template>

<script>
import navbar from './components/navbar'

export default {
    name: 'App',
    components: {
        'navbar': navbar
    }
}
</script>

<style>
@import './assets/_mixin.scss'

html, body{
    font: 14px/1.4 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', 'arial', 'Tahoma', 'SimSun', 'sans-serif';
    width: 100%;
    height: 100%;
    margin: 0;
    min-height: 600px;
}
body, dd, dl, dt, h2, h3, h4, h6, li, ol, p, ul{
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-text-size-adjust: none;
}
body{
    background-color: #eff3f6;
    overflow-x: hidden;
    overflow-y: scroll;
}
img{
    border: 0;
}
em, i, h2, h3, h4, h6{
    font-style: normal;
}
a{
    cursor: pointer;
    text-decoration: none;
    color: $fontColorLightGrey;
}
*, *:before, *:after{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:focus{
    outline: none;
}
:visited{
    color: $fontColorLightGrey;
}
::-webkit-scrollbar{
    width: 3px;
    height: 3px;
}
::-webkit-scrollbar-track-piece{
    -webkit-border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical{
    height: 5px;
    -webkit-border-radius: 3px;
    background-color: #666;
}
::-webkit-scrollbar-thumb:horizontal{
    width: 5px;
    -webkit-border-radius: 3px;
    background-color: #666;
}

.clear-fix{
    zoom: 1;
}
.clear-fix:after{
    display: block;
    clear: both;
    content: '';
}
.pull-left{
    float: left;
}
.pull-right{
    float: right;
}

#app{
    width: 100%;
    height: 100%;
}
</style>
