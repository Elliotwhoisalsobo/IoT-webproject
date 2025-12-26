<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const role = localStorage.getItem('role')

const badgeText = computed(() =>
  role === 'admin' ? 'ADMIN' : 'USER'
)

const badgeClass = computed(() =>
  role === 'admin' ? 'badge-admin' : 'badge-user'
)

const logout = () => {
  localStorage.clear()
  router.replace('/login')
}
</script>

<template>
  <div class="session-badge">
    <span :class="['role-badge', badgeClass]">
      {{ badgeText }}
    </span>

    <button class="logout-btn" @click="logout">
      Logout
    </button>
  </div>
</template>

<style scoped>
.session-badge {
  display: flex;
  align-items: center;
  gap: 10px;
}

.role-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
}

.badge-admin {
  background-color: #d32f2f;
}

.badge-user {
  background-color: #1976d2;
}

.logout-btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  background-color: #444;
  color: white;
}

.logout-btn:hover {
  background-color: #222;
}
</style>
