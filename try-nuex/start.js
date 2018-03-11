require('babel-core/register')({//实时使用node最新版本
    'presets':[
        'stage-3',
        ['latest-node', {"target":"current"}]
    ]
})
require('./server')