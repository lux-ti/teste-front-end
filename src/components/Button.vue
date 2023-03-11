<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: 'Btn',
    props: {
        text: String,
    }
}
</script>

<style lang="scss" scoped>
.btn {
  font-family: "Inter";
  width: 168px;
  height: 46px;
  background: #ffffff;
  color: #000000;
  border: black solid 2px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  margin-top: 5%;
}
.btn:hover {
  transition: 0.3s;
  background: #000000;
  color: #ffffff;
}
</style>
