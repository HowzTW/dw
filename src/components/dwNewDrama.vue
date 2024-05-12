<script setup>
import { ref } from "vue"
import { Modal } from 'ant-design-vue';
import { dwFetchJsonFile, dwDramaFilename } from '/src/assets/dwServices.js'


let myDramaHistory = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
let mylist = ref([]);
mylist.value = myDramaHistory;

const mySites = JSON.parse(localStorage.getItem('dwMySites'));
const siteValue = ref("");
siteValue.value = mySites[0];
const optionSites = ref([]);
for(let i=0; i<mySites.length; i++)
{
    let site = {
        value: mySites[i],
        label: mySites[i],
    }
    optionSites.value.push(site);
}

let dramaFilename = ref("");

const newDramaId = ref("");
const newDrama = () => {
    const newItem = `${siteValue.value}.${newDramaId.value}`;
    const pos = ref(-1);
    pos.value = myDramaHistory.indexOf(newItem);
    if( pos.value > -1 ) {
        myDramaHistory.splice(pos.value, 1);
        myDramaHistory.push(newItem);
        localStorage.setItem('dwMyDramaHistory', JSON.stringify(myDramaHistory));
        mylist.value = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
        Modal.success({
            title: '完成',
            content: `已經完成新增影集 ${newItem}！`,
        });
        newDramaId.value = "";
    }
    else {
        dramaFilename = dwDramaFilename(newItem);
        fetch(dramaFilename)
        .then((r) => r.json())
        .then(
            (json) => {
                myDramaHistory.push(newItem);
                localStorage.setItem('dwMyDramaHistory', JSON.stringify(myDramaHistory));
                mylist.value = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
                Modal.success({
                    title: '完成',
                    content: `已經完成新增影集 ${newItem}！`,
                });
                newDramaId.value = "";
            }
        ) //then
        .catch( 
            (reason) => {
                console.log('(dwNewDrama.vue) Error: ', reason)
                jsonObj.value = "";
            }
        );
    }
}

</script>

<template>
    <a-flex vertical justify="flex-start" style="width: 100%" gap="small">
        <a-flex>
            <h1>新增影集</h1>
        </a-flex>
        <a-flex vertical>
            <a-flex>
                <h3>請選擇影集來源網站：</h3>
            </a-flex>
            <a-flex>
                <a-input-group compact>
                    <a-select v-model:value="siteValue" style="width: 200px" :options="optionSites">
                    </a-select>
                </a-input-group>
            </a-flex>
        </a-flex>
        <a-flex vertical>
            <a-flex>
                <h3>請輸入影集編號：</h3>
            </a-flex>
            <a-flex>
                <a-input-group compact>
                    <a-input v-model:value="newDramaId" style="width: 200px" />
                    <a-button type="primary" @click="newDrama()">新增</a-button>
                </a-input-group>
            </a-flex>
        </a-flex>
        <a-flex>
            <a-divider orientation="left"  orientation-margin="20px">已登錄影集編號清單 ({{ mylist.length }})</a-divider>
        </a-flex>
        <a-flex>
            <a-list size="large" bordered :data-source="mylist" style="width: 100%">
                <template #renderItem="{ item }">
                <a-list-item>{{ item }}</a-list-item>
                </template>
            </a-list>
        </a-flex>
    </a-flex>
</template>