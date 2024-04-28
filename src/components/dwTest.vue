<script setup>
/*
import axios from 'axios';

function getWebsiteData(){
    let self = this;
    let url = 'https://www.msn.com/en-au?AR=1'; // url we get data from
    let dataArray = [];                         // we put data in this array
    // GET request for remote image in node.js
    axios({
        method: 'get',
        url: url,
    })
        .then(function (response) {
            let html = response.data;

            let $ = cheerio.load(html);

            $("ul.tertiary li").each(function () {
                const title = $(this).find('h3').attr('aria-label');
                const image = $(this).find('img').attr('src');

                // putting data in array.

                dataArray.push({
                    'title': title,
                    'image': image
                })
            });

            self.lastestArticles = dataArray;     // Here we assign value to vuejs variable

            console.log(dataArray);
        });
}

getWebsiteData();
*/ 

/*
const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
const url = 'https://www.msn.com/zh-tw'; // origin api url

//const htmlMsg = ref("");

// fetch api url by cors-anywhere 
axios.get(`${cors}${url}`)
  .then((response) => {
    const msg = response.data;
    //htmlMsg.value = JSON.stringify(msg)
  })
  .catch(function (error) { 
   
   console.log(error);
 });

*/
 
/*
 axios({
    url: 'https://nodejs.org/en/blog/',
    method: 'get',
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(postBody)
})  
.then((response) => {
    const msg = response.data;
    //htmlMsg.value = JSON.stringify(msg)
  })
  .catch(function (error) { 
   
   console.log(error);
 });

*/
import { ref } from "@vue/reactivity"
import axios from 'axios';

const result = ref("");

axios
.get('https://nodejs.org/en/blog/')
.then(
    response => {
        console.log("OKKKKKKK");
        result.value = "OK"
    }
)
.catch(
    error => {
        console.log(error);
        result.value = "NO"
    }
)


</script>

<template>
    <div>
        <h1> Web Scraper</h1>
        <h2>{{ result }}</h2>
    </div>
</template>

<style></style>