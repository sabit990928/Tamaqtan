-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 13 2019 г., 08:30
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
-- Структура таблицы `day`
--

CREATE TABLE `day` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `day`
--

INSERT INTO `day` (`id`, `name`) VALUES
(1, 'Понедельник'),
(2, 'Вторник'),
(3, 'Среда'),
(4, 'Четверг'),
(5, 'Пятница'),
(6, 'Суббота'),
(7, 'Воскресенье');

-- --------------------------------------------------------

--
-- Структура таблицы `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img_address` varchar(255) NOT NULL,
  `recept` varchar(10000) NOT NULL,
  `time_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `food`
--

INSERT INTO `food` (`id`, `name`, `img_address`, `recept`, `time_id`, `type_id`, `user_type_id`) VALUES
(9, 'Бешбармак', 'https://www.gastronom.ru/binfiles/images/20180128/b4df1508.jpg', 'Ет, казы, нан, пияз', 3, 2, 5),
(11, 'Треска с картофелем и луком', 'https://the-challenger.ru/wp-content/uploads/2017/10/shutterstock_292699091-800x533.jpg', 'Дно и борта формы для запекания смажьте оливковым маслом. Луковицу нарежьте тонкими кольцами и равномерно разложите их на дно формы. Нарежьте филе трески кусками по 50 граммов. Посыпьте каждый смесью соли и сухих трав и выложите в форму на лук. Картофель нарежьте тонкими кружочками и выложите их на рыбу.  Яйца взбейте вилкой, добавьте соль и влейте сливки. Продолжайте взбивать до получения однородной смеси. Вылейте полученную смесь в форму, равномерно заполняя весь объём. Поставьте форму в разогретую духовку и запекайте до тех пор, пока верхний слой картошки не зарумянится.', 2, 2, 1),
(12, 'Стейки из оленины', 'https://the-challenger.ru/wp-content/uploads/2017/10/shutterstock_204684253-800x530.jpg', 'Натрите куски мяса смесью специй и оставьте на некоторое время. Пока мясо маринуется, смешайте в миске растительное масло, вино, горчицу, чеснок и уксус. Добавьте мясо и хорошо перемешайте. Накройте плёнкой и поставьте в холодильник на час. Разогрейте гриль или мангал. Выложите мясо на решётку и жарьте по несколько минут с каждой стороны — до нужной вам степени прожарки.', 2, 2, 1),
(13, 'Сэндвич с зелёным сыром и тунцом', 'https://the-challenger.ru/wp-content/uploads/2017/10/Avocado-Grilled-Cheese-4-800x532.jpg', 'Тунец вместе с соком выложите в миску и разомните руками или вилкой. Посыпьте розовым маврикийским перцем (он такой же ароматный, как чёрный, но менее жгучий), добавьте каперсы и перемешайте. Добавьте тёртый зелёный сыр и снова перемешайте. Разогрейте сковороду на среднем огне и слегка подсушите хлеб с обеих сторон. Затем смажьте все куски с одной стороны сливочным маслом, выложите тунцово-сырную смесь, соедините половины сэндвичей — и снова отправьте на сковородку. Там они должны провести пару минут под крышкой, чтобы сыр расплавился и схватил рыбную массу. Готовые сэндвичи разрежьте по диагонали и украсьте кружками огурца.', 1, 2, 1),
(14, 'Вареники с картошкой', 'https://the-challenger.ru/wp-content/uploads/2017/10/shutterstock_247873906-800x533.jpg', 'Отварите картофель и разомните его толкушкой, чтобы остались небольшие комочки: так как начинка очень простая, ей обязательно нужна неоднородная текстура. Дайте картофелю остыть и смешайте его со 120 граммами сливочного масла и пассерованным репчатым луком. Поперчите, посолите и хорошо всё перемешайте. Тесто раскатайте скалкой до толщины одного миллиметра и кулинарным кольцом диаметром 4,5 сантиметра (или обычным стаканом) вырежьте из него кружки. Выложите на каждый по чайной ложке начинки, сверните пополам и защипните края в виде косички. В большую кастрюлю налейте пять литров воды, добавьте соль, лавровый лист, раздавленные зубчики чеснока, чёрный перец горошком и веточки укропа целиком. Когда вода закипит, опустите вареники в кастрюлю и варите 5—6 минут. Ломтики бекона поджарьте на оливковом масле до золотистой хрустящей корочки с обеих сторон и выложите на салфетку, чтобы избавиться от лишнего масла. Лук шалот нарежьте тонкими кольцами, немного обваляйте их в муке и обжарьте около 5 минут на сковороде с ложкой оливкового и 15 граммами сливочного масла до хрустящей золотистой корочки. Выложите на салфетку и посолите. Подавайте вареники с ломтиками бекона и хрустящими луковыми кольцами.', 2, 3, 1),
(15, 'Фахитас с курицей', 'https://the-challenger.ru/wp-content/uploads/2017/10/shutterstock_263734409-800x549.jpg', 'Болгарский перец разрежьте пополам, очистите от семечек и тонко нарежьте. Лук нарежьте тонкими полукольцами, а курицу — полосками (так, чтобы по размеру они напоминали полоски перца). В миске смешайте перец, лук и курицу с паприкой и зирой. Выжмите сок половины лайма, сбрызните оливковым маслом, поперчите и как следует всё перемешайте. Замаринуйте в течение 5—10 минут. Тем временем тонко нарежьте половину перца чили. Нарубите кусочками половину помидоров черри и две трети пучка кинзы. Перемешайте всё в отдельной миске, посолив и поперчив по вкусу. Выдавите сок одного лайма. Разогрейте сковороду гриль на сильном огне. Обжарьте курицу с овощами до золотистого цвета (6—8 минут). Важно постоянно переворачивать содержимое сковороды, иначе всё тут же подгорит. Приготовьте гуакамоле: раздавите оставшиеся помидоры черри на доске, тонко нарежьте вторую половину перца чили и кинзу (не только листочки, но и стебли). Разделите авокадо пополам, выдавите мякоть на доску к помидорам, зелени и черри, нарубите. Посолите и поперчите при необходимости. Разогрейте тортильи в духовке при 60 градусах в течение 5 минут. Выжмите сок из оставшейся половины лайма на курицу с овощами. Натрите чеддер на тёрке. Выложите в тортилью курицу с овощами, гуакамоле, сальсу и сыр.', 2, 2, 1),
(16, 'Лазанья', 'https://the-challenger.ru/wp-content/uploads/2017/10/shutterstock_373596733-800x533.jpg', 'Приготовьте соус бешамель. Положите в сотейник сливочное масло, добавьте 2 ложки растительного и растопите. Постепенно добавляйте муку и размешивайте так, чтобы не оставалось комочков. Когда вся мука будет вмешана, влейте молоко. Убавьте огонь и томите до консистенции нежирной сметаны.На сковороде раскалите оливковое масло. Добавьте мясной фарш (лучше взять из телятины и свинины) и обжарьте его до полуготовности. Влейте соус болоньезе, посолите и поперчите по вкусу. Разогрейте духовку до 180 градусов. Смажьте форму сливочным маслом. На дно вылейте немного соуса бешамель (совсем чуть-чуть, только чтобы покрыть дно). Сверху выложите пласты лазаньи (не варёные). На них — получившийся фарш, потом тёртый сыр и в самом конце соус бешамель. Соуса нужно выкладывать столько, сколько необходимо, на ваш взгляд, чтобы лазанья получилась сочной. Поверх соуса выложите сухие листы лазаньи. Повторите. Последний слой листов промажьте соусом бешамель и сверху щедро посыпьте сыром. Дайте постоять минут 7—10, после чего поставьте в духовку и запекайте в течение 30 минут.', 3, 2, 1),
(17, 'Куриные крылышки', 'https://the-challenger.ru/wp-content/uploads/2017/10/shutterstock_415946815-800x533.jpg', 'Разогрейте духовку до 180 градусов. Вымойте и обсушите крылья салфеткой. Разрубите каждое крыло на три части: для блюда нужны только две мясистые. Крылья посолите и поперчите по вкусу, выложите на решётку, смазанную растительным маслом. Под решётку поставьте глубокий противень, выстеленный фольгой: жир будет вытапливаться и собираться именно там. Готовьте крылья таким образом 30 минут, по 15 минут с каждой стороны. В это время приготовьте соус. Нагрейте в сотейнике оливковое масло и обжарьте пропущенный через пресс чеснок. Добавьте уксус, соевый соус, апельсиновый сок, мёд, имбирь и перец. Всё хорошо перемешайте, убавьте огонь и варите 10—12 минут — до загустения. Смажьте крылья соусом и готовьте 5—7 минут, увеличив температуру до 200 градусов. Переверните, смажьте с другой стороны и запекайте ещё 5 минут — до готовности.', 2, 2, 1),
(18, 'Белково-углеводный смузи', 'https://img.tvoi-povarenok.ru/2014/11/zavtrak-sportsmena3.jpg', 'Смешиваем в стакане для погружного блендера: 100 г нежирного творога, 2 – 3 ст.л. обычных овсяных хлопьев, 1 стакан 2,5%кефира или простокваши, банан, персик или ½ яблока, 2 – 3 сушеных финика. Все измельчаем до однородности. Настоящий коктейль для чемпионов готов!', 1, 4, 1),
(19, 'Зеленый салат', 'https://img.tvoi-povarenok.ru/2014/11/zavtrak-sportsmena4.jpg', 'Добавленные в зеленый салат грецкие орехи придадут не только питательности, но и улучшат его вкус.Для его приготовления берем листья руколы, цикория, салата айсберг, пекинской капусты, рвем их руками или режем ножом, добавляем ½ авокадо, 30 г рубленных грецких орехов, заправляем смесью лимонного сока, горчицы и оливкового масла или обычным растительным маслом, солим.На все про все уйдет максимум 5 минут!', 1, 5, 1),
(20, 'Кукурузно-пшенная каша с кунжутным семенем', 'https://img.tvoi-povarenok.ru/2014/11/zavtrak-sportsmena6.jpg', 'В небольшую кастрюльку насыпаем оба вида крупы и наливаем 2,5 ст. воды. Доводим до кипения, солим и варим на маленьком огне до готовности не менее 20 минут. Когда каша приготовится, закутываем или просто снимаем с огня и даем настояться. Затем, в кофемолке или блендере размалываем в муку кунжутные семена. Насыпаем их в кашу и перемешиваем. Маслом можно не заправлять, так как семена сами по себе жирные. Но можно приправить кашу соевым соусом и добавить 1/3 ч.л молотой паприки для пикантности.', 1, 6, 1),
(21, 'Сладкая кукурузно-пшенная каша с кунжутным семенем', 'https://img.tvoi-povarenok.ru/2014/11/zavtrak-sportsmena7.jpg', 'В небольшую кастрюльку насыпаем оба вида крупы и наливаем 2,5 ст. воды. Доводим до кипения, солим и варим на маленьком огне до готовности не менее 20 минут. Когда каша приготовится, закутываем или просто снимаем с огня и даем настояться. Затем, в кофемолке или блендере размалываем в муку кунжутные семена. Насыпаем их в кашу и перемешиваем. Маслом можно не заправлять, так как семена сами по себе жирные. Но можно приправить кашу соевым соусом и добавить 1/3 ч.л молотой паприки для пикантности.Для него берем 1 стакан молока 2,5% и полтора стакана воды. Доварив, добавляем банан – в нем много калия и пищевых волокон, грушу или яблоко. Сладим медом или джемом.', 1, 6, 1),
(22, 'Маковые сырники', 'https://img.tvoi-povarenok.ru/2014/11/zavtrak-sportsmena8.jpg', 'Творог в чаше блендера взбиваем с яйцом, сахаром, мукой и солью. В получившуюся массу вмешиваем маковые зернышки. Стол присыпаем мукой, скатываем тесто в «колбаску», нарезаем на ломтики толщиной 1 см и обжариваем каждый на сковороде с антипригарным покрытием с обеих сторон или запекаем в разогретой до 180 градусов духовке около 20 минут.', 1, 2, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `for_f` int(11) NOT NULL,
  `for_s` int(11) NOT NULL,
  `for_th` int(11) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `menu`
--

INSERT INTO `menu` (`id`, `for_f`, `for_s`, `for_th`, `type_id`) VALUES
(3, 18, 17, 9, 1),
(4, 21, 14, 11, 1),
(5, 13, 15, 16, 1),
(6, 22, 17, 15, 1),
(7, 21, 12, 9, 1),
(8, 19, 14, 16, 1),
(9, 13, 11, 9, 1);

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
-- Структура таблицы `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_profile` varchar(100) NOT NULL
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
(2, 'Жаренное'),
(3, 'Тушенное'),
(4, 'Напитки'),
(5, 'Салаты'),
(6, 'Каша');

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
(19, 'Roberto', 'Firmino', 'firmi@firm.com', '$2y$10$.s.7P51r8ee3ZFS6tUPaVuBHSvO81FCGo2V3oE8wrWyhEF77DESYC', 1, '2019-04-27 13:21:16', '2019-04-27 07:21:16'),
(20, 'Jonny', 'Fontein', 'jon@jom.com', '$2y$10$VOWSzEEmTlD55UjprMaMl.lMzneMIkeqJ0krkorydFlXeblh4cLwK', 1, '2019-04-27 13:22:20', '2019-04-27 07:22:20'),
(23, 'a', 'a', 'a@mail.ru', '$2y$10$UGfsM5BwDOShjwzNiZaKr..arEFSeb/PzOf7YROA8O70It9KxAnBS', 1, '2019-05-04 15:39:36', '2019-05-04 09:39:36'),
(24, '', '', '', '$2y$10$myufHJfYzaEdUwNG31ouM.bxcaVRb/Nt43RTIpXPrtnCuNDB.YNbK', 1, '2019-05-05 10:57:17', '2019-05-05 04:57:17'),
(25, '?????? ', '?????????', 'konyrbayev@gmail.com', '$2y$10$nit4Yzo/MMvasrawj6f67.yGlNtimNzG4z2mmJtY/XyxyPPWeYXY2', 1, '2019-05-05 10:57:17', '2019-05-05 04:57:17');

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

-- --------------------------------------------------------

--
-- Структура таблицы `week`
--

CREATE TABLE `week` (
  `id` int(11) NOT NULL,
  `mon` int(11) NOT NULL,
  `tw` int(11) NOT NULL,
  `wen` int(11) NOT NULL,
  `th` int(11) NOT NULL,
  `fr` int(11) NOT NULL,
  `sun` int(11) NOT NULL,
  `std` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `week`
--

INSERT INTO `week` (`id`, `mon`, `tw`, `wen`, `th`, `fr`, `sun`, `std`, `user_type_id`) VALUES
(1, 3, 4, 5, 6, 7, 8, 9, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `day`
--
ALTER TABLE `day`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tbl_users`
--
ALTER TABLE `tbl_users`
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
-- Индексы таблицы `week`
--
ALTER TABLE `week`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `day`
--
ALTER TABLE `day`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tbl_users`
--
ALTER TABLE `tbl_users`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `week`
--
ALTER TABLE `week`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
