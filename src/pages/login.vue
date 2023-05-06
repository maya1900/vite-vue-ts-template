<template>
  <div>about</div>
  <router-link to="/home"> 跳转home </router-link>;
</template>

<script setup lang="ts">
import { getList, postData } from '@/api/user';

getList({ id: 2 });
postData({ id: 1, name: 'name' });
</script>
