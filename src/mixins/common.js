export default {
    computed: {
        env() {
            return process.env;
        },
        headers() {
            return {
                Authorization: `Bearer 11111`
            }
        }
    }
}