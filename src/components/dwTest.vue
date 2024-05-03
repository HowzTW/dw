<template>
    <div>
      <input type="text" v-model="filename" placeholder="Enter filename">
      <textarea v-model="datastr" placeholder="Enter data"></textarea>
      <button @click="saveToFile">Save to File</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        filename: '',
        datastr: ''
      };
    },
    methods: {
      saveToFile() {
        if (this.filename && this.datastr) {
          const blob = new Blob([this.datastr], { type: 'text/plain' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = this.filename;
          link.click();
        } else {
          alert('Please enter filename and data');
        }
      }
    }
  }
  </script>