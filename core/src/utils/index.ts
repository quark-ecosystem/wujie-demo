export function throttle(func, delay) {
    let lastExecutionTime = 0; // 上次执行时间

    return function() {
        const context = this; // 保存this上下文
        const args = arguments; // 保存传入的参数
        
        const now = new Date().getTime(); // 获取当前时间
        if (now - lastExecutionTime >= delay) {
            // 如果达到了延迟时间，则执行函数
            func.apply(context, args);
            lastExecutionTime = now; // 更新上次执行时间为当前时间
        }
    };
}