<template>
  <div class="boxUser" id="{{id}}">
    <img :src="img" :alt="alt" />
    <div class="details">
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  props: {
    name: String,
    alt: String,
    description: String,
    img: String,
    id: Number,
  },
};
</script>

<style lang="scss" scoped>
.boxUser {
  display: flex;
  background: #ffffff;
  height: 171px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  img {
    margin: 13px;
    display: block;
  }
  .details {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    h3 {
      font-family: "Rubik", sans-serif;
      font-size: 36px;
      margin-bottom: 4%;
      margin-top: 4%;
    }
    p {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: #757575;
      margin-bottom: 1%;
    }
  }
}
.boxUser :hover {
  cursor: pointer;
}
</style>
