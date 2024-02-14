---

sidebar_position: 3

---

# Первый серверный скрипт

### Создание первого серверного скрипта

Для создания своего первого серверного скрипта нам потребуется создать папку нашего аддона в директории с сервером в `addons/myaddon/lua/autorun/server`, а затем создать файл с любым названием, к примеру: `hello.lua`

### Пример серверного скрипта

Ниже приведен пример простого серверного скрипта, который отправляет приветственное сообщение, когда игрок подключается к серверу:

```lua
hook.Add("PlayerInitialSpawn", "WelcomeMessage", function(ply)
    -- Отправляем привественное сообщение игроку
    ply:ChatPrint("Приветсвую тебя на сервере!")
end)
```