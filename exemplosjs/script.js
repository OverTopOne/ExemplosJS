new Vue({
    el: '#usuarios',
    data: function() {
        return {
            users: []
        };
    },
    mounted: function() {
        this.loadUsers();
    },
    methods: {
        loadUsers: function() {
            fetch('https://reqres.in/api/users?per_page=10')
                .then(response => response.json())
                .then(data => {
                    this.users = data.data;


                    this.users.push({
                        "id": 12,
                        "email": "newuser@example.com",
                        "first_name": "New",
                        "last_name": "User",
                        "avatar": "https://reqres.in/img/faces/12-image.jpg"
                    });
                })
                .catch(error => console.error('Erro:', error));
        }
    }
});
