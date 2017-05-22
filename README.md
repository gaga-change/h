## 备注

### 无法解析scss中的中文备注

在 `C:\Ruby23-x64\lib\ruby\gems\2.3.0\gems\sass-3.4.23\lib\sass` 该目录下找到 `engine.rb`
添加 `Encoding.default_external = Encoding.find('utf-8')`。 记得前后换行

### linux 创建文件

`vi name.js`

