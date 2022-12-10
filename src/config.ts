export default {
    // 填入你的session token
    chatGPTSessionToken: '',
    // 设置获取消息的重试次数
    retryTimes: 3,
    // 在群组中设置唤醒微信机器人的关键词
    groupKey: 'hello',
    // 在私聊中设置唤醒微信机器人的关键词
    privateKey: 'hello',
    // 重置上下文的关键词，如可设置为reset
    resetKey: 'reset',
    // 开启会后收到ChatGPT的自动回复
    autoReply: true,
    // 根据正则匹配是否自动通过好友验证
    friendShipRule: /chatgpt|chat/,
}