<template>
  <div>manage</div>
  <button @click="handleUser">跳转user</button>
</template>

<script setup lange="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const handleUser = () => {
  router.push('/home/user');
};
</script>
