/**
 * Created by ArvinChen9539 on 2017/11/1.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            "browsers": [
                "ie >= 9",
                "Firefox >= 20",
                "> 5%",
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31"
            ]
        })
    ]
}