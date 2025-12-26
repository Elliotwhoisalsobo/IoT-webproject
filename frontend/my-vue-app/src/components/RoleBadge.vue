<script setup>
import { computed } from 'vue';

const role = localStorage.getItem('role'); // User session

const badgeText = computed(() =>
  role === 'admin' ? 'ADMIN' : 'USER'
);

const badgeClass = computed(() =>
  role === 'admin' ? 'badge-admin' : 'badge-user'
);
</script>

<template>
  <span :class="['role-badge', badgeClass]">
    {{ badgeText }}
  </span>
</template>

<style scoped>
.role-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
}

.badge-admin {
  background-color: #d32f2f; /* red */
}

.badge-user {
  background-color: #1976d2; /* blue */
}
</style>
