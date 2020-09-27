export default {
    devServer: {
        open: true
    },
    cssPreprocessOptions: {
        less: {
            modifyVars: {
                'preprocess-custom-color': 'green'
            }
        }
    }
}