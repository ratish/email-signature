//Instantiate vee-validate plugin
Vue.use(VeeValidate);

const app = new Vue({
    el: "#signature_app",
    data: {
        show: false,
        signature: {
            fullname: "",
            title: "",
            department: "",
            phone: "",
            mobile: "",
            email: "",
            website: "example.com",
        },
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                result ? this.showSignature() : this.hideSignature();
            });
        },
        showSignature: function () {
            this.show = true;
        },
        hideSignature: function () {
            this.show = false;
        },
    },
    watch: {
        signature: {
            handler: function () {
                this.hideSignature();
            },
            deep: true,
        },
    },
    filters: {
        formatPhone: function (phone) {
            const phoneDigits = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
            return !phoneDigits ? null : "(" + phoneDigits[1] + ") " + phoneDigits[2] + "-" + phoneDigits[3];
        },
    },
});
