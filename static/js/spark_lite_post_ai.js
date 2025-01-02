const summaryData = new DataProxy('', [])//响应式对象
const config = {//配置
    summaryElConfig: { // 盒子参数
        appendBeforeEl: '#post #article-container', // 需要添加在哪个DIV的前面
        buttons: [{
            text: '重新生成', // 按钮文字
            bgColor: 'rgba(12,107,166,0.7)', // 按钮背景色
            onClick: async () => {// 按钮点击事件
                // 获取博文内容
                const postContent = getPostContent(config.postContentConfig)
                // 发送请求获取摘要
                if (config.sparkConfig.stream) {//是否流式
                    getSummaryFromSparkStream(postContent, config.sparkConfig, summaryData)
                } else {
                    const summary =  await getSummaryFromSpark(postContent, config.sparkConfig)
                    summaryData.setValue(summary)
                }
            }
        }, {
            text: '介绍自己', // 按钮文字
            bgColor: 'rgba(40,167,69,0.7)', // 按钮背景色
            onClick: () => {// 按钮点击事件
                aiIntroduce(config.sparkConfig, summaryData)
            }
        }, ],
    },
    postContentConfig: { // 文章参数
        titleEl: 'h1', // 标题元素
        headEl: 'h1,h2,h3,h4,h5,h6', // 文章内容目录元素
        contentEl: '#post #article-container', // 文章内容元素
    },
    sparkConfig: { // 讯飞星火配置
        /*官方地址 https://spark-api-open.xf-yun.com/v1/chat/completions
        * Worker地址 https://spark-api.xxx.xxx */
        apiUrl: 'https://spark.xpin.us.kg',
        apiPassword: 'fvhlOgZOuSMbsgFUeEaQ:YyNtwoedJtzJHUPmxaHV',//API密钥
        model: 'lite',//模型
        stream: true,//是否流式传输
    },
    urlValidList: [//在什么页面有效
        'posts',//文章页面
    ],
    urlBlacklist: [//摘要黑名单URL关键字（覆盖有效设置）
        // 求生之路日志
        'e8598403',
        'a15ff462',
        // 我的世界日志
        'b4c68f75',
        // 服务器日志
        '9e7fad42',
        'd7252e66',
        '17241f42',
        // 个人电脑日志
        'e8b927d9',
    ],
}
init(config).then((flag) => {// 初始化
    if (flag) {
        console.log(`%cSpark-Lite-Post-AI InsectMk摘要工具测试版:%chttps://insectmk.cn%c`,
            `border:1px solid transparent;background:linear-gradient(45deg, #ff7e5f, #feb47b);border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;font-weight:bold;margin:10px 0;`,
            `border:1px solid transparent;background:linear-gradient(45deg, #fbc2eb, #a6c1ee);border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;color:white;font-weight:bold;`, '');
    }
})
/**
 * 初始化函数
 * @param config 自定义配置
 */
async function init(config) {
    const href = window.location.href
    // 跳过黑名单
    if (!config.urlValidList.some(item => href.includes(item))//不在有效名单
        || config.urlBlacklist.some(item => href.includes(item))) {//在黑名单
        return false
    }
    // 创建摘要盒子
    const summaryEl = createSummaryEl(config.summaryElConfig)
    // 获取博文内容
    const postContent = getPostContent(config.postContentConfig)
    summaryData.addEl(summaryEl)//响应式数据，绑定元素
    // 发送请求获取摘要
    if (config.sparkConfig.stream) {//是否流式
        getSummaryFromSparkStream(postContent, config.sparkConfig, summaryData)
    } else {
        const summary =  await getSummaryFromSpark(postContent, config.sparkConfig)
        summaryData.setValue(summary)
    }
    return true
}
/*******************按钮功能*******************/
/**
 * AI自我介绍
 * @param sparkConfig 星火配置
 * @param summaryData 响应式对象
 */
function aiIntroduce(sparkConfig, summaryData) {
    chatWithSparkStream(sparkConfig.apiUrl,
        getSparkFetchOptions(sparkConfig, '你是一个智能摘要生成工具，专注于从给定的文章内容中提取并总结关键信息。你的任务是简洁明了地介绍自己的功能和目的，不要换行，不要超过200字，不需要提出建议和缺少的东西，请用中文回答。'),
        summaryData)
}
/*******************内置库*******************/
/**
 * 获取讯飞接口的请求选项
 * @param sparkConfig
 * @param content
 * @returns {{method: string, headers: {Authorization: string, "Content-Type": string}, body: string}}
 */
function getSparkFetchOptions(sparkConfig, content) {
    return {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sparkConfig.apiPassword}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: sparkConfig.model,
            messages: [
                {
                    role: 'user',
                    content: content
                }
            ],
            stream: sparkConfig.stream
        })
    }
}
/**
 * 获取讯飞接口的请求选项-摘要
 * @param postContent
 * @param sparkConfig
 * @returns {{method: string, headers: {Authorization: string, "Content-Type": string}, body: string}}
 */
function getSparkSummaryFetchOptions(postContent, sparkConfig) {
    return getSparkFetchOptions(sparkConfig, `你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西，请用中文回答。文章标题为：${postContent.title}，小结标题为${postContent.heads.join('\t')}内容为：${postContent.content}`)
}
/**
 * 通过讯飞星火Lite获取摘要（流式）
 * @param postContent 文章内容
 * @param sparkConfig 讯飞配置
 * @param summaryData 响应式对象
 */
function getSummaryFromSparkStream(postContent, sparkConfig, summaryData) {
    chatWithSparkStream(sparkConfig.apiUrl,
        getSparkSummaryFetchOptions(postContent, sparkConfig),
        summaryData)
}
/**
 * 与讯飞对话（流式）
 * @param apiUrl api地址
 * @param fetchOptions fetch选项
 * @param summaryData 响应式对象
 */
function chatWithSparkStream(apiUrl, fetchOptions, summaryData) {
    fetch(apiUrl, fetchOptions).then(response => {
        // 检查响应是否成功
        if (!response.ok) throw new Error('讯飞响应错误！')
        // 获取 response body 的流对象
        const reader = response.body.getReader()
        // 创建解码器和文本处理器
        const decoder = new TextDecoder()
        let summary = ''//摘要
        // 逐步读取流数据
        function readStream() {
            reader.read().then(({ done, value }) => {
                if (done) return//读取完成则结束
                let _value = value ? decoder.decode(value, { stream: true }) : ''
                let _data = _value?.split('\n') || []
                for (const it of _data) {
                    let _it = it.replace(/^(data: \[DONE\])|(data:)/, '')
                    if (_it) {
                        summary += JSON.parse(_it).choices[0].delta.content
                        summaryData.setValue(summary)//更新摘要
                    }
                }
                // 继续读取
                readStream()
            }).catch(err => {
                console.error('读取流失败:', err)
            })
        }
        readStream()//再次读取
    }).catch(err => {
        console.error('请求失败:', err)
    })
}
/**
 * 通过讯飞星火Lite获取摘要
 * 参考 https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html#_3-%E8%AF%B7%E6%B1%82%E8%AF%B4%E6%98%8E
 * https://console.xfyun.cn/services/cbm
 * @param postContent 文章内容
 * @param sparkConfig 讯飞星火配置
 * @returns {string} AI摘要
 */
async function getSummaryFromSpark(postContent, sparkConfig) {
   try {
        const response = await fetch(sparkConfig.apiUrl, getSparkSummaryFetchOptions(postContent, sparkConfig))
        const data = await response.json()
        return data.choices[0].message.content // 返回响应数据
    } catch (error) {
        throw error // 抛出错误，可以在调用函数的地方捕获
    }
}
/**
 * 获取博文内容
 * @param postContentConfig 博文配置
 */
function getPostContent(postContentConfig) {
    // 获取文章标题，默认为页面标题
    const title = postContentConfig.titleEl ?
        document.querySelector(postContentConfig.titleEl).textContent : document.title
    // 获取文章内容目录标题
    const headEls = document.querySelectorAll(postContentConfig.headEl ?
        postContentConfig.headEl  : 'h1,h2,h3,h4,h5,h6')
    const heads = Array.from(headEls).map(heading => heading.textContent)
    // 获取文章内容
    const content =
        document.querySelector(postContentConfig.contentEl ?
            postContentConfig.contentEl : '#post #article-container').textContent
    return {
        title,//标题
        heads,//文章小结标题
        content,//文章内容
    }
}
/**
 * 创建摘要盒子
 * @param summaryElConfig 盒子自定义配置
 * @param summaryElConfig.appendBeforeEl (string) 目标元素的选择器，摘要盒子将插入到该元素之前
 * @param summaryElConfig.buttons (array) 按钮配置数组，每个元素是一个对象，包含按钮的文字和点击事件
 * @return 最小的盒子 用于装载文本内容
 */
function createSummaryEl(summaryElConfig) {
    // 获取目标元素
    let targetEl = document.querySelector(summaryElConfig.appendBeforeEl || '#post #article-container')
    // 创建摘要元素
    let summaryEl = document.createElement('div')
    // 给摘要元素添加样式
    summaryEl.style.border = '1px solid #ccc'
    summaryEl.style.padding = '5px 16px 0 16px'
    summaryEl.style.marginBottom = '8px'
    summaryEl.style.borderRadius = '8px'
    summaryEl.style.backgroundColor = 'rgba(247, 247, 249, 0.5)'
    summaryEl.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
    summaryEl.style.fontFamily = 'Arial, sans-serif'
    // 创建标题
    let titleEl = document.createElement('span')
    titleEl.innerText = '文章摘要'
    titleEl.style.fontSize = '13px'
    titleEl.style.fontWeight = '600'
    titleEl.style.marginBottom = '12px'
    titleEl.style.color = '#333'
    summaryEl.appendChild(titleEl)
    // 创建摘要内容
    let contentEl = document.createElement('p')
    contentEl.style.minHeight = '80px'
    contentEl.style.margin = '5px 0'
    contentEl.style.padding = '5px'
    contentEl.style.fontSize = '14px'
    summaryEl.style.border = '1px solid #ccc'
    contentEl.style.backgroundColor = 'rgba(255,255,255,0.5)'
    contentEl.style.borderRadius = '8px'
    contentEl.style.color = '#666'
    contentEl.style.lineHeight = '1.6'
    summaryEl.appendChild(contentEl)
    // 添加自定义按钮
    if (Array.isArray(summaryElConfig.buttons) && summaryElConfig.buttons.length > 0) {
        let buttonContainer = document.createElement('div')
        summaryElConfig.buttons.forEach(buttonConfig => {
            let buttonEl = document.createElement('button')
            buttonEl.innerText = buttonConfig.text || '按钮'
            buttonEl.style.padding = '5px'
            buttonEl.style.margin = '0 5px 5px 0'
            buttonEl.style.fontSize = '12px'
            buttonEl.style.color = '#fff'
            buttonEl.style.backgroundColor = buttonConfig.bgColor || 'rgba(0,123,255,0.7)'
            buttonEl.style.border = 'none'
            buttonEl.style.borderRadius = '4px'
            buttonEl.style.cursor = 'pointer';
            buttonEl.addEventListener('click', buttonConfig.onClick)
            buttonContainer.appendChild(buttonEl)
        });
        summaryEl.appendChild(buttonContainer)
    }
    // 将摘要元素添加到目标元素
    targetEl.insertBefore(summaryEl, targetEl.firstChild);
    return contentEl
}
/**
 * 数据绑定代理
 * @param value
 * @param els
 * @constructor
 */
function DataProxy(value, els) {
    /*对象属性*/
    this.value = value ? value : []
    this.els = els ? els : []
    /*对象方法*/
    this.setValue = function(value) {//设置数据
        this.value = value
        this.els.forEach(el => {el.innerText = this.value})
    }
    this.getValue = function() {//获取元素
        return this.value
    }
    this.addEl = function(el) {//添加一个元素绑定
        this.els.push(el)
        el.innerText = this.value
    }
    this.removeEl = function(el) {//删除一个元素绑定
        this.els.splice(this.els.indexOf(el), 1)
    }
    /*初始化操作*/
    // 给绑定元素赋值
    for (let el of this.els) {
        el.innerText = this.value
    }
}