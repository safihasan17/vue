<script setup lang="ts">
import { api } from '@/api';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('asia@mail.com');
const password = ref('123');
const showPassword = ref(false);
const message = ref('');
const route = useRouter();

function handleSubmit() {
  // message.value = 'Authentication is not configured yet.';
  api.post('/login', {
    email: email.value,
    password: password.value
  })
  .then((response) => {
      // console.log('Login successful:', response.data);
      // message.value = 'Login successful!';
      localStorage.setItem('vuetoken', response.data.token);
      route.push('/');  
    })
    .catch((error) => {
      console.error('Login failed:', error);
      message.value = 'Login failed. Please check your credentials.';
    });
}
</script>

<template>
  <main class="login-page">
    <section class="login-card" aria-labelledby="login-title">
      <div class="login-icon" aria-hidden="true">
        <i class="bi bi-person-lock"></i>
      </div>
      <p class="login-eyebrow">AdminPro</p>
      <h1 id="login-title">Welcome back</h1>
      <p class="login-description">Sign in to continue to your account.</p>

      <form class="login-form" @submit.prevent="handleSubmit">
        <div class="form-field">
          <label for="email" class="form-label">Email address</label>
          <input
            id="email"
            v-model="email"
            class="form-control"
            type="email"
            name="email"
            autocomplete="username"
            placeholder="you@example.com"
            required
          >
        </div>

        <div class="form-field">
          <label for="password" class="form-label">Password</label>
          <div class="password-field">
            <input
              id="password"
              v-model="password"
              class="form-control"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              autocomplete="current-password"
              placeholder="Enter your password"
              required
            >
            <button
              class="password-toggle"
              type="button"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div class="login-options">
          <label class="remember-option">
            <input type="checkbox" name="remember">
            <span>Remember me</span>
          </label>
        </div>

        <button class="btn btn-primary w-100" type="submit">Sign in</button>
        <p v-if="message" class="login-message" role="status">{{ message }}</p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.login-page {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: #f5f7fb;
}

.login-card {
  width: min(100%, 420px);
  padding: clamp(1.5rem, 5vw, 2.5rem);
  border: 1px solid #e8ebf2;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 1rem 3rem rgb(24 39 75 / 10%);
}

.login-icon {
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  margin-bottom: 1.25rem;
  border-radius: .85rem;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 1.4rem;
}

.login-eyebrow {
  margin-bottom: .35rem;
  color: #4f46e5;
  font-size: .85rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #172033;
  font-size: 1.8rem;
  font-weight: 700;
}

.login-description {
  margin: .5rem 0 1.75rem;
  color: #687386;
}

.login-form {
  display: grid;
  gap: 1.15rem;
}

.form-field {
  display: grid;
  gap: .45rem;
}

.form-label {
  margin: 0;
  color: #263248;
  font-size: .9rem;
  font-weight: 600;
}

.form-control {
  min-height: 2.9rem;
  border-color: #dce1ea;
}

.password-field {
  position: relative;
}

.password-field .form-control {
  padding-inline-end: 3rem;
}

.password-toggle {
  position: absolute;
  inset-block: 0;
  inset-inline-end: .25rem;
  width: 2.5rem;
  border: 0;
  background: transparent;
  color: #687386;
}

.password-toggle:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: -3px;
  border-radius: .4rem;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4b5565;
  font-size: .9rem;
}

.remember-option {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
}

.remember-option input {
  width: 1rem;
  height: 1rem;
  accent-color: #4f46e5;
}

.login-button {
  min-height: 2.9rem;
  border: 0;
  border-radius: .55rem;
  background: #4f46e5;
  color: #fff;
  font-weight: 600;
}

.login-button:hover {
  background: #4338ca;
}

.login-message {
  margin: 0;
  color: #a33a32;
  font-size: .9rem;
}
</style>
