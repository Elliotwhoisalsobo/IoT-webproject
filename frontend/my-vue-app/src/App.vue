<script setup>
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav>
      <RouterLink to="/">Login</RouterLink>&nbsp;
      <RouterLink to="/devices">Devices</RouterLink>&nbsp;
      <RouterLink to="/sensors">Sensors</RouterLink>&nbsp;
      <RouterLink to="/temperature">Temperature</RouterLink>&nbsp;
      <RouterLink to="/led">Led</RouterLink>&nbsp;
    </nav>

    <RouterView />
  </div>
</template>
