module.exports = {
    plugins: [
        require('autoprefixer')({
            "browsers": [
                "defaults",
                "not ie < 8",
                "last 2 versions",
                "> 1%",
                "iOS 8",
                "last 3 iOS versions"
            ]
        })
    ]
};