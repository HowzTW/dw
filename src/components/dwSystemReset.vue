<script setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { ref, createVNode, watch } from 'vue';
import { Modal } from 'ant-design-vue';
import { dwInitAppLocalStorage } from '/src/assets/dwServices.js'


const passwd = ref("");
let userRole = ""; //空字串
let myDramaHistory = ["pttplay.co.257106", "pttplay.co.256822"] //空陣列
let myEpisodeHistory = {} //空字典
let mySites = ["pttplay.co", "gimy.ai"] //空字典


const sysInit = () => {
    dwInitAppLocalStorage();

    userRole = (passwd.value == '12345678') ? "admin" : "user";
    localStorage.setItem('dwUserRole', userRole);
    
    localStorage.setItem('dwMyDramaHistory', JSON.stringify(myDramaHistory));
    localStorage.setItem('dwMyEpisodeHistory', JSON.stringify(myEpisodeHistory));
    localStorage.setItem('dwMySites', JSON.stringify(mySites));

    retrieveLocalStorage();
    Modal.success({
        title: '完成',
        content: '已經完成系統資料重設！',
    });
}

const confirm = () => {
    // if(passwd.value == '12345678') {
    //     Modal.confirm({
    //         title: '資料重設之後將無法回覆',
    //         icon: createVNode(ExclamationCircleOutlined),
    //         content: '請問確認是否要將系統資料重設嗎？',
    //         okText: '確定',
    //         cancelText: '取消',
    //         onOk() {
    //             dwInitAppLocalStorage();
    //             retrieveLocalStorage();
    //             Modal.success({
    //                 title: '完成',
    //                 content: '已經完成系統資料重設！',
    //             });
    //         }
    //     });
    // }
    // else {
    //     Modal.error({
    //         title: '重設密碼錯誤',
    //         content: '很抱歉！密碼錯誤無法執行系統資料重設！',
    //         okText: '關閉'
    //     });
    // }
        
    Modal.confirm({
        title: '資料重設之後將無法回覆',
        icon: createVNode(ExclamationCircleOutlined),
        content: '請問確認是否要將系統資料重設嗎？',
        okText: '確定',
        cancelText: '取消',
        onOk() {
            sysInit();
        }
    });

}

const localStorageData = ref("");

const retrieveLocalStorage = () => {
    localStorageData.value = "";
    localStorageData.value += `localStorage items：${localStorage.length} \n`;
    for(let i=0; i < localStorage.length; i++) {
        localStorageData.value += `[${localStorage.key(i)}]：${localStorage.getItem(localStorage.key(i))} \n`;
    }
};
retrieveLocalStorage();


</script>

<template>
    <a-flex vertical justify="flex-start" style="width: 100%" gap="small">
        <a-flex>
            <h1>系統資料重設</h1>
        </a-flex>
        <a-flex vertical>
            <a-flex>
                <h3>請輸入密碼：</h3>
            </a-flex>
            <a-flex>
                <a-input-group compact>
                    <a-input-password v-model:value="passwd" style="width: 200px" />
                    <a-button type="primary" @click="confirm">重設</a-button>
                </a-input-group>
            </a-flex>
        </a-flex>
        <a-flex>
            <a-textarea
            v-model:value="localStorageData"
            placeholder=""
            :auto-size="{ minRows: 15, maxRows: 20 }"
            />
        </a-flex>
    </a-flex>
</template>