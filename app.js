const app = Vue.createApp({
    template: '',
    data() {
        return {
            firstName: 'John',
            email: 'johndoe@gmail.com',
            lastName: 'Doe',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        };
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const {
                results: [
                {
                    gender: gender1,
                    email: email1,
                    name: {
                        first: firstName1,
                        last: lastName1
                    },
                    picture: {large:picture1}
                }]
            } = await res.json();

            this.firstName = firstName1;
            this.lastName = lastName1;
            this.gender = gender1;
            this.email = email1;
            this.picture = picture1;
            
        }
    }
});

app.mount('#app');