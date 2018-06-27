commander介绍：
    commander用于帮助简化命令行开发
        提供了用户命令行输入和参数解析强大功能
    特性：
        1.自动记录代码
        2.自动生成帮助
        3.合并短参数
        4.默认选项
        5.强制选项
        6.命令解析
        7.提示符
    安装：
        npm install --save commander
    
    API:
        command(): 定义一个命令名字
        action(): 注册一个callback函数
        option(): 定义参数，需要设置“关键字”和“描述”，关键字包括“简写”和“全写”两部分，以”,”,”|”,”空格”做分隔。
        parse(): 解析命令行参数argv
        description(): 设置description值
        usage(): 设置usage值

    示例代码：
        参见test/myServer.js
    
    本文链接：
        http://blog.fens.me/nodejs-commander/
