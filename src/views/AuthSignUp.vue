<script setup lang="ts">
import AuthTemplate from '../components/AuthPage/AuthTemplate.vue'
import main from '../ts/VueRouter'
const {toSection} = main()
</script>

<template>
    <div>
      <AuthTemplate>
        <template #authSelect>
          Sign up
        </template>
        <template #btnName>
          Sign up with Email
        </template>
        <template #select>
          Already signed up?
          <u class="cursor-pointer" @click="toSection('/auth/login')">Go to login</u>
        </template>
      </AuthTemplate>  
    </div>
</template>