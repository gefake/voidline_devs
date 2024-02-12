---
sidebar_position: 2
---

# Примеры реализации

Если ты всё ещё в процессе создания своей версии игры и хочешь создать её без подсказок, не открывай эти блоки.

В любом другом случае, можешь набираться опыта и подсматривать решения 🐌

:::info
Код из сносок ниже в большинстве своём написан новичками, и его реализация может быть далека от идеала.
Чтобы добавить свой код, воспользуйся кнопкой "Отредактировать эту страницу" внизу страницы
:::

----

<details>
  <summary>Lina</summary>
  ```lua
math.randomseed(os.time())

local PlayerHP, PC_HP = 100, 100
local Players = {
    [1] = "Игрок",
    [2] = "Противник"
}

local IsActiveGame = true
local PCValdmg, PlayerValdmg = 0, 0
local PlayerDodge, PCDodge = false, false

--создаем функцию выбора случайного значения
local function GenerateRandomVal(min, max)
local r = math.random(min, max)
    return r
end

--созаем функцию выбора случайного события
local function GenerateRandomEvent()
local r = GenerateRandomVal(1, 2) --> где 1 это стрелять, 2 это уклоняться
    return r
end

--генерация рандомного значения урона
local function Shoot()
local mindmg = 20
local maxdmg = 40
local dmg = GenerateRandomVal(mindmg, maxdmg)
    return dmg
end

--расчет успешно ли уклонение
local function GenerateDodgeChance()
local MidleVal = 50
local a = GenerateRandomVal(1, 100)
    if a < MidleVal then
        return false
    else
        return true
    end
end

--создаем функцию хода атаки
local function IsAttack()
local Valdmg = Shoot()
local Dodge = false
    return Valdmg, Dodge
end

--создаем функцию хода уворота
local function IsDodge()
local Valdmg = 0
local Dodge = GenerateDodgeChance()
    return Valdmg, Dodge
end

--функция выбора действия компьютера
local function MovesPC()
    print(string.format("Сейчас ходит %s", Players[2]))
    local r = GenerateRandomEvent()
    return r
end

--функция выбора хода игрока
local function MovesPlayer()
    print(string.format("Сейчас ходит %s", Players[1]))
    print("Что необходимо сделать?\n1.Выстрелить\n2.Уклониться\nВведите число необходимого действия\n")
    local r = tonumber(io.read())
    return r
end

--функция вывода информационного сообщения о нанесеном уроне
local function PrintDmg(a, b, c)
    print(string.format("%s получил %d урона. Текущее здоровье: %d", a, b, c))
end

--функция ход игрока 
local function PlayerMove(PCValdmg, PlayerHP, IsActiveGame)
    if not IsActiveGame then
        return PCValdmg, PlayerHP, IsActiveGame
    else
        local PlayerChoice = MovesPlayer()
        if PlayerChoice == 1 then
        PlayerValdmg, PlayerDodge = IsAttack()
        else
        PlayerValdmg, PlayerDodge = IsDodge()
        end
        if not PlayerDodge then
        if PCValdmg > 0 then
            PlayerHP = PlayerHP - PCValdmg
            print(PrintDmg(Players[1], PCValdmg, PlayerHP))
            if PlayerHP <= 0 then
                IsActiveGame = false
            end
        end
        else
        print("Успешно уклонились")
        end
        return PlayerValdmg, PlayerHP, IsActiveGame
    end
end

--функция хода компьютера
local function PCMove(PlayerValdmg, PC_HP, IsActiveGame)
    if not IsActiveGame then
        return PCValdmg, PC_HP, IsActiveGame
    else
        local PCChoice = MovesPC()
        if PCChoice == 1 then
            print("Противник решил стрелять")
            PCValdmg, PCDodge = IsAttack()
        else
            print("Противник решил улониться")
            PCValdmg, PCDodge = IsDodge()
        end
        if not PCDodge then
            if PlayerValdmg > 0 then
            PC_HP = PC_HP - PlayerValdmg
            print(PrintDmg(Players[2], PlayerValdmg, PC_HP))
                if PC_HP <= 0 then
                IsActiveGame = false
                end
            end
        else
            print("Противник уклонился\n")
        end
    end
    return PCValdmg, PC_HP, IsActiveGame
end

--тело игры

print("Игра началась\n")
local first = GenerateRandomVal(1, #Players)

repeat
    if first == 1 then
        -- ход игрока
        PlayerValdmg, PlayerHP, IsActiveGame = PlayerMove(PCValdmg, PlayerHP, IsActiveGame)
        -- ход компьютера
        PCValdmg, PC_HP, IsActiveGame = PCMove(PlayerValdmg, PC_HP, IsActiveGame)
    else
        -- ход компьютера
        PCValdmg, PC_HP, IsActiveGame = PCMove(PlayerValdmg, PC_HP, IsActiveGame)
        -- ход игрока
        PlayerValdmg, PlayerHP, IsActiveGame = PlayerMove(PCValdmg, PlayerHP, IsActiveGame)
    end
until not IsActiveGame

if PlayerHP <= 0 then
    print("Победил компьютер")
else
    print("Победил Игрок")
end
  ```
</details>

<details>
  <summary>What event?</summary>
    ```lua
    -- Функция для генерации случайных чисел в диапазоне
    local function randomInRange(min, max)
        return math.random(min, max)
    end

    -- Функция для определения действия компьютера (рандомный выбор)
    local function computerAction()
        local action = math.random(1, 2)
        return action == 1 and "Выстрелить" or "Уклониться"
    end

    -- Инициализация здоровья для игрока и компьютера
    local playerHealth = 100
    local computerHealth = 100

    -- Определение первого хода
    local currentPlayer = math.random(1, 2)
    print(currentPlayer == 1 and "Вы начинаете!" or "Компьютер начинает!")

    -- Основной игровой цикл
    while playerHealth > 0 and computerHealth > 0 do
        -- Ход игрока
        if currentPlayer == 1 then
            print("Ваш ход:")
            local playerChoice = io.read()
            if playerChoice == "Выстрелить" then
                local damage = randomInRange(20, 40)
                computerHealth = computerHealth - damage
                print("Вы нанесли " .. damage .. " урона компьютеру!")
            elseif playerChoice == "Уклониться" then
                local dodgeChance = math.random(0, 100)
                if dodgeChance <= 50 then
                    print("Вы уклонились от выстрела компьютера!")
                else
                    print("Компьютер попал в вас!")
                    playerHealth = playerHealth - randomInRange(20, 40)
                end
            else
                print("Неверный выбор действия! Вы потеряли свой ход.")
            end
            currentPlayer = 2
        -- Ход компьютера
        else
            local computerChoice = computerAction()
            print("Ход компьютера: " .. computerChoice)
            if computerChoice == "Выстрелить" then
                local damage = randomInRange(20, 40)
                playerHealth = playerHealth - damage
                print("Компьютер нанес " .. damage .. " урона вам!")
            elseif computerChoice == "Уклониться" then
                local dodgeChance = math.random(0, 100)
                if dodgeChance <= 50 then
                    print("Компьютер уклонился от вашего выстрела!")
                else
                    print("Вы попали в компьютер!")
                    computerHealth = computerHealth - randomInRange(20, 40)
                end
            end
            currentPlayer = 1
        end
        -- Вывод текущего состояния здоровья
        print("Ваше здоровье: " .. playerHealth)
        print("Здоровье компьютера: " .. computerHealth)
    end

    -- Определение победителя
    if playerHealth <= 0 then
        print("Компьютер одержал победу!")
    elseif computerHealth <= 0 then
        print("Игрок одержал победу!")
    end
    ```
</details>