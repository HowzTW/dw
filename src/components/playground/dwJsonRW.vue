<script setup>
import axios from 'axios'



const updateJSON = () => {
    // 读取本地JSON文件
    axios.get('data/drama/gimy.ai.258606.json')
    .then( (response) => {
        // 修改JSON数据
        const data = response.data;
        console.log("original data: " + data.dramaTitle);
        data.dramaTitle = (data.dramaTitle + "C"); // 这里假设要更新的属性是foo
        console.log("new data: " + data.dramaTitle);

        // 发送PUT请求来更新JSON文件
        axios.put('data/drama/gimy.ai.258606.json', data)
        .then(() => {
            console.log('JSON文件更新成功');
        })
        .catch( (error) => {
            console.error('JSON文件更新失敗', error);
        });
    })
    .catch( (error) => {
        console.error('讀取JSON文件失敗', error);
    });
}

updateJSON();

const arr = [];
const data = {
    id: 0,
    value: 0
}

const forloop = () =>
{
    for(let i=0; i<10; i++)
    {
        data.id = i;
        data.value = i * 2;
        arr.push(data);
        console.log("data: " + arr)
    };
}

forloop();

const savefile = () => {
    const jsonObj = JSON.stringify(arr)
    const fs = require('fs');
    try { 
        fs.writeFileSync('data/drama/test.json', jsonObj, 'utf-8'); 
        console.log('OK');
    }
    catch(e) { console.log('Failed to save the file !'); }
}

savefile();

</script>

<template>
<h1>JSON RW</h1>
</template>

<style scoped>

</style>