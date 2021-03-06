class LoginController {
    constructor(djangoHTTP) {
        this.username = '';
        this.password = '';
        this.djangoHTTP = djangoHTTP;
    }

    login() {
        this.djangoHTTP.post(
            '/players/login',
            {
                username: this.username,
                password: this.password
            }
        ).then((res) => {
            console.log(res);
        });
    }

    logout() {
        this.djangoHTTP.post('/players/logout').then((res) => {
            console.log(res);
        });
    }
}
LoginController.$inject = ['djangoHTTP'];
export default LoginController;