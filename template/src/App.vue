<template>
<div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
</div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld';

{{/unless}}
export default {
    name: 'app'{{#router}}{{else}},
    components: {
        HelloWorld
    }{{/router}}
};
</script>

<style lang="less">
@import url('../node_modules/@baidu/lego-events-zhishu/src/assets/css/global.less');
@import url('../node_modules/@baidu/lego-events-zhishu/src/assets/css/variables.less');
@import url('../node_modules/fonts.css/dist/fonts.less');
html, body {
    background: {{ pageColor }};
    font-family: Noto Sans CJK SC, Source Han Sans SC, Source Han Sans CN;
    .zs-loading {
        margin-top: 60px;
    }
}
</style>
