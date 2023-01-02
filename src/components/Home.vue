<template>
  <main class="home">
    <svg
      width="169"
      height="169"
      viewBox="0 0 169 169"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.5 0C37.8364 0 0 38.8172 0 86.6502C0 124.939 24.2183 157.381 57.792 168.849C58.2629 168.951 58.7436 169.002 59.2254 169C62.3565 169 63.5636 166.699 63.5636 164.699C63.5636 162.625 63.4882 157.193 63.4504 149.95C60.6553 150.605 57.7958 150.947 54.925 150.968C38.6663 150.968 34.9694 138.331 34.9694 138.331C31.1217 128.334 25.5763 125.656 25.5763 125.656C18.2203 120.488 25.5386 120.337 26.1045 120.337H26.1422C34.6299 121.091 39.0813 129.315 39.0813 129.315C43.3063 136.709 48.9647 138.784 54.0196 138.784C57.3621 138.717 60.6528 137.946 63.6768 136.52C64.4313 130.937 66.6192 127.127 69.0335 124.939C50.285 122.751 30.5558 115.32 30.5558 82.1234C30.5558 72.6549 33.8377 64.9216 39.2321 58.8859C38.3645 56.698 35.4598 47.8707 40.062 35.9502C40.6794 35.8025 41.3139 35.739 41.9482 35.7616C45.0038 35.7616 51.9071 36.931 63.2996 44.8529C77.1422 40.9799 91.7823 40.9799 105.625 44.8529C117.017 36.931 123.921 35.7616 126.976 35.7616C127.611 35.739 128.245 35.8025 128.863 35.9502C133.465 47.8707 130.56 56.698 129.692 58.8859C135.087 64.9594 138.369 72.6926 138.369 82.1234C138.369 115.395 118.602 122.714 99.7779 124.864C102.796 127.542 105.512 132.823 105.512 140.896C105.512 152.477 105.399 161.833 105.399 164.662C105.399 166.699 106.568 169 109.699 169C110.206 169.002 110.712 168.952 111.208 168.849C144.819 157.381 169 124.902 169 86.6502C169 38.8172 131.164 0 84.5 0Z"
        fill="black"
      />
    </svg>

    <form>
      <div class="options">
        <label>
          Repositório
          <input type="radio" value="Repositório" name="search_option" />
        </label>
        <label>
          Usuário
          <input type="radio" value="Usuário" name="search_option" />
        </label>
      </div>
      <div class="search-field">
        <label for="search"> O que você procura?</label>
        <input type="search" placeholder="Buscar..." id="search" />

        <button title="Procurar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
            />
          </svg>
        </button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
}

label > input,
label[for="search"] {
  position: absolute;
  visibility: hidden;
}

form {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}

#search {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 2px solid var(--black);
  padding: 1.2rem 2rem;
  width: 100%;
}

.search-field {
  position: relative;
}

.search-field button {
  position: absolute;
  top: 1.1rem;
  right: 1rem;
  height: 1.7rem;
  width: 1.7rem;
}

.options {
  margin-bottom: 2.5rem;
}

.options label {
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.options label:first-of-type {
  background: var(--black);
  color: var(--white);
  margin-right: 2.5rem;
}
</style>
