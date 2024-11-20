// 防恶意反代
const allowedDomains = ['localhost','xingji.fun','love.xingji.fun','cloudflare.xingji.fun','xingji.netlify.app','xingji-love.github.io','blog.zsrooj.site'];

if (!allowedDomains.includes(document.domain)) {
    Snackbar.show({
    text: decodeURI('您现在处于恶意镜像站中,即将跳转回源站!'),
    pos: 'top-center',
    actionText: '确定',
    duration: 5000,
    onActionClick: () => window.location.href = 'https://love.xingji.fun'
    });

    setTimeout(() => window.location.href = 'https://love.xingji.fun', 5000);
}
