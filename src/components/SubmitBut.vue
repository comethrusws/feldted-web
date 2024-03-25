<template>
  <button class="btn">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeR8TM4GWQa9pZKJVXNvaSGvsvQYRhTsqn8bRf4MnOkW2kUnQ/viewform?usp=sharing"
      class="bt"
      target="_blank"
      >Proceed to Submission</a
    >
  </button>
</template>

<script>
export default {
  name: "SubmitBut",
};
</script>

<style scoped>
.btn {
  align-items: center;
  margin-top: 2rem;
  display: inline-block;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: inherit;

  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn:hover {
  background-color: #071808;
}
.bt {
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: inherit;
  text-transform: uppercase;
}
</style>
