---
sidebar_position: 3
---

# LuaDev

> A simple library to help developers run lua code in-game.

# Установка

1. Скачать репозиторий https://github.com/Metastruct/luadev

2. Создать в папке `garrysmod/addons` папку `luadev`

3. Перекинуть папку `lua` из скачанного архива в папку `luadev`

4. Перенести из папки `luadev` содержимое папки `bin` в `garrysmod/lua/bin` (если папки bin нет, создайте её вручную)

5. Скачать расширение для VS Code - https://marketplace.visualstudio.com/items?itemName=ultango.luadev

6. Открыть настройку для бинда клавиш (CTRL + SHIFT + P)

   ![](https://i.imgur.com/PJTYsOu.png)

7. Вставить туда следующий набор клавиш (если у вас уже есть какие-то бинды, лучше добавьте в уже сущствующий, без замены)
        ```json
            [
                {
                    "key": "ctrl+s",
                    "command": "workbench.action.files.save"
                },
                {
                    "key": "ctrl+1",
                    "command": "gmod-luadev.server"
                },
                {
                    "key": "ctrl+2",
                    "command": "gmod-luadev.shared"
                },
                {
                    "key": "ctrl+3",
                    "command": "gmod-luadev.clients"
                },
                {
                    "key": "ctrl+1",
                    "command": "-workbench.action.focusFirstEditorGroup"
                },
                {
                    "key": "ctrl+2",
                    "command": "-workbench.action.focusSecondEditorGroup"
                },
                {
                    "key": "ctrl+3",
                    "command": "-workbench.action.focusThirdEditorGroup"
                }
            ]
        ```

Теперь мы можем делать хот-релоад скриптов в реальном времени. Если вы не меняли кнопки, то у вас будет следующая конфигурация:

CTRL + 1 - Запустить скрипт на **Server**

CTRL + 2 - Запустить скрипт на **Shared**

CTRL + 3 - Запустить скрипт на **All Clients** (на всех игроках на сервере)