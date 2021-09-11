const PROXY_CONFIG = [
    {
        context: ["/api/product"],
        target: "http://localhost:2000",
        secure: false
    },
    {
        context: ["/api/feedback"],
        target: "http://localhost:1000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;