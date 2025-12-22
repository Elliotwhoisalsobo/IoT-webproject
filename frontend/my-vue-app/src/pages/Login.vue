<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let username = ref('');
let password = ref('');
let errorMessage = ref('');

const login = async () => {
    if (!username.value || !password.value) {
        errorMessage.value = "Username and password required!";
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        });

        const data = await res.json();

        if (!res.ok) {
            errorMessage.value = data.error || 'Login failed';
            return;
        }


        // After successful login --> store user session data
        localStorage.setItem('role', data.role);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userid', data.userid);


        // Redirect based on role
        if (data.role === 'admin') {
            localStorage.setItem('role', data.role);
            router.push('/device');
        } else {
            localStorage.setItem('role', data.role);
            router.push('/control');
            // Role is now globally available
        }

    } catch (err) {
        console.error(err);
        errorMessage.value = 'Server error';
    }
};

</script>

<template>
    <h1>Login</h1>

    <div v-if="errorMessage" style="color:red;">{{ errorMessage }}</div>

    <label>Username</label>&nbsp;
    <input type="text" v-model="username" /><br /><br />
    <label>Password</label>&nbsp;
    <input type="password" v-model="password" /><br /><br />

    <button @click="login">Login</button>
</template>
