# cli-voice

命令行发音工具

## 安装
``` bash
  $ npm install cli-voice -g
```

## 使用

支持英文发音，支持Windows和macOS

**例子**
``` bash
  $ voice hello
  > [həˈləʊ] ✔️
  $ voice world
  > [wɜːld] ✔️
```

**参数**
``` bash
  $ voice -h

  Usage: voice [word]

  Options:
    -V, --version  output the version number
    -h, --help     output usage information        output usage information
```

## 其他

参考了 [cli-dict](https://github.com/mistory/cli-dict), 使用了有道的发音接口