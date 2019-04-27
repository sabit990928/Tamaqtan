-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 27 2019 г., 09:28
-- Версия сервера: 10.1.31-MariaDB
-- Версия PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `api_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `recept` varchar(255) NOT NULL,
  `time_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `food`
--

INSERT INTO `food` (`id`, `name`, `recept`, `time_id`, `type_id`, `user_type_id`) VALUES
(1, 'Омлет', 'Разбить яйцо. Жарить на сковороде. Соль по вкусу', 1, 2, 5),
(2, 'Блины', 'Жарить на сковороде', 1, 2, 5),
(3, 'Eggs', 'eggs eggs eggs', 1, 2, 5),
(8, 'Test3', 'test1', 2, 1, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `food_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Структура таблицы `time`
--

CREATE TABLE `time` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `time`
--

INSERT INTO `time` (`id`, `name`) VALUES
(1, 'Завтрак'),
(2, 'Обед'),
(3, 'Ужин'),
(4, 'Поздний завтрак\r\n'),
(5, 'Полдник'),
(6, 'Поздний ужин');

-- --------------------------------------------------------

--
-- Структура таблицы `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Суп'),
(2, 'Zharennoe'),
(3, 'Тушенное'),
(4, 'Напитки');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(256) CHARACTER SET latin1 NOT NULL,
  `lastname` varchar(256) CHARACTER SET latin1 NOT NULL,
  `email` varchar(256) CHARACTER SET latin1 NOT NULL,
  `password` varchar(2048) CHARACTER SET latin1 NOT NULL,
  `is_user` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `is_user`, `created`, `modified`) VALUES
(1, 'Mike', 'Dalisay', 'mike@codeofaninja.com', '$2y$10$If0afR.cI32eI6EF7gbDTOj8hzH4jxUtM3zqjvrLGZ7NKLgC8fmoW', 0, '2019-03-06 12:08:10', '2019-03-06 06:08:10'),
(2, 'Nurbol', 'Tolegenov', 'naiman@gmail.com', '$2y$10$yg/LG3dAULsP6h6nSXCKyOOi6/nQOC.GDlDKV0c3IIIR40J1YYXC6', 1, '2019-03-06 12:08:44', '2019-04-17 06:21:34'),
(3, 'Bereke', 'Konyrbayev', 'naiman@gmail.com', '$2y$10$881WCiAjk30GW3poMr6x2.RdBNuWsCkVyQyDeccKZRkR5lgqDOJFS', 0, '2019-04-10 12:55:13', '2019-04-10 06:55:13'),
(5, 'test', 'test', 'test', '$2y$10$qeaAJAi..ogZi.wqaIUPju14xEY6ZwGwp0SktHRFf9d.SZmxOau62', 0, '2019-04-10 13:13:51', '2019-04-10 07:13:51'),
(6, 'Bereke', 'Konyrbayev', 'naiman@gmail.com', '$2y$10$yiQRpyElw8MtFuD3Lj4w3.NBEHcgK5LgwjGXmtjEZ7b2m9J.MbgAW', 0, '2019-04-17 12:32:58', '2019-04-17 06:32:58'),
(7, 'admin', 'admin', 'admin', '$2y$10$9QG7N/.APTXMFMdsPdEHluptqLA7H/lF/f2XHVULo/i9wIIXulvZW', 2, '2019-04-17 12:33:50', '2019-04-17 06:33:50'),
(8, 'qwe', 'qwe', 'qwe', '$2y$10$Jv1WdzznFEZBGc2TKZQr8uQJnVP0nGKeAYk.Jn4rP8MCgSAmMxA1.', 1, '2019-04-17 12:47:35', '2019-04-17 06:47:35'),
(10, 'Hernandez', 'Javier', 'chica@mail.ru', '$2y$10$LNHxvvmZ3SQHcmJ8wXmOEuM8mjrcwctGiFj.3FNfUTToFv/qpv37O', 1, '2019-04-17 12:48:17', '2019-04-17 06:48:17'),
(11, 'Leo', 'Messy', 'leo10@gmail.com', '$2y$10$5ojsK0wZpDm9McxCAWym/OAKj3x8CcH6iqqLLnqW/7h4vW6re9/Py', 1, '2019-04-17 12:50:56', '2019-04-17 06:50:56'),
(13, 'Cristiano', 'Ronaldo', 'cr7@mail.ru', '$2y$10$ECK9lFDTZ55UoZIGKxgedORN85q/d4p1/F2zma.DF9hiisSZgYAzm', 1, '2019-04-24 11:03:55', '2019-04-24 05:03:55'),
(15, 'Ð¡Ð°Ð±Ð¸Ñ‚', 'Ð Ð°Ñ…Ð¸Ð¼', 'sabit@mail.ru', '$2y$10$aSrMMPs7qFpzls1Drpj9ueZl0hQhonjh2pKXB9XOD2gR21y.8ZmpO', 1, '2019-04-27 11:25:32', '2019-04-27 05:25:32'),
(17, 'Golovkin', 'Genady', 'ggg@gmail.com', '$2y$10$zLYyXchAPCn9TXNGLFfS4uyxKRSOp3sEP6Li.Is3TNU7zsgiprpW.', 1, '2019-04-27 11:37:44', '2019-04-27 05:37:44'),
(18, '', '', '', '$2y$10$0MOLzYfgZHftq/reJoIlbus1Rm4EWLU43PHvjd6YIPel1yuW.EYKC', 1, '2019-04-27 13:21:15', '2019-04-27 07:21:15'),
(19, 'Roberto', 'Firmino', 'firmi@firm.com', '$2y$10$.s.7P51r8ee3ZFS6tUPaVuBHSvO81FCGo2V3oE8wrWyhEF77DESYC', 1, '2019-04-27 13:21:16', '2019-04-27 07:21:16'),
(20, 'Jonny', 'Fontein', 'jon@jom.com', '$2y$10$VOWSzEEmTlD55UjprMaMl.lMzneMIkeqJ0krkorydFlXeblh4cLwK', 1, '2019-04-27 13:22:20', '2019-04-27 07:22:20');

-- --------------------------------------------------------

--
-- Структура таблицы `user_type`
--

CREATE TABLE `user_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `user_type`
--

INSERT INTO `user_type` (`id`, `name`) VALUES
(1, 'Спорт'),
(2, 'Диета'),
(3, 'Беременная'),
(4, 'Больной'),
(5, 'Ежедневный');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `time`
--
ALTER TABLE `time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
