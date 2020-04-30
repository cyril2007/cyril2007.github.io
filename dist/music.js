const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed: true, 
    autoplay: false, //自动播放
    //theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 0, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: 'Cytus II Theme - Used to be', //音频名称
            artist: 'KIVΛ', //音频艺术家
            url: 'http://m10.music.126.net/20200430092246/ed82433328f9343d211cf75fcd13493a/ymusic/0f5d/535a/055c/878919ff8bd09a202e6e26304d17797a.mp3', //音频外链
            cover: 'http://p2.music.126.net/lTQNrOTbYD3NVhWwKMXOOg==/109951164489323061.jpg', //音频封面
            lrc: 'http://m10.music.126.net/20200430090130/6dd566d681f8df6d70c5c8f7391d2393/ymusic/0f5d/535a/055c/878919ff8bd09a202e6e26304d17797a.lrc', //音频歌词，配合上面的lrcType使用
        }, 
        {
            name: '一目惚れ', //音频名称
            artist: 'バンドハラスメント', //音频艺术家
            url: 'http://m10.music.126.net/20200430085933/21dc2ee15ace5d5e041ade858fe5c5aa/ymusic/020f/565a/5252/5e051dd85aa0ea1673a5e8493ba29ccd.mp3', //音频外链
            cover: 'http://p1.music.126.net/ammyavjPOiQEyRBIghl_sA==/109951164612058107.jpg', //音频封面
            lrc: 'dist/music/This is the show.lrc', //音频歌词，配合上面的lrcType使用
        },
        
    ]
});