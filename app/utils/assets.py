from flask_assets import Bundle

bundles = {
    'main_scss' : Bundle(
        'scss/main.scss',
        filters="libsass",
        depends=[
            'scss/*.scss',
            'scss/base/*.scss',
            'scss/components/*.scss',
            'scss/pages/*.scss',
            'scss/sections/*.scss'
        ],
        output='gen/css/main.%(version)s.css'
    ),
    'base_js':Bundle(
        # 'js/base/contact_modal.js',
        # 'js/base/dramatic_h1.js',
        'js/base/base.js',
        'js/pages/index.js',
        # filters='jsmin',
        depends=[
            'js/base/*.js',
            'js/pages/*.js',
        ],
        output='gen/js/base.%(version)s.js'
    ),
}