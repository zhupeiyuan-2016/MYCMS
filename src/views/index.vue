<template>
  <div>
    <h1>主页</h1>
       <div id="nav">
        <router-link to="/login">login</router-link>
        <router-link to="/">index</router-link>
    </div>
    <router-view/>
  </div>
</template>
