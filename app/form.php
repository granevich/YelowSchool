<?
//Проверка отправилось ли наше поля name и не пустые ли они
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){
 //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'granevich@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail


}
if((isset($_POST['name-modal'])&&$_POST['name-modal']!="")&&(isset($_POST['phone-modal'])&&$_POST['phone-modal']!="")){
 //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'granevich@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name-modal'].'</p>
                        <p>Телефон: '.$_POST['phone-modal'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail


}




if((isset($_POST['name-modal-english'])&&$_POST['name-modal-english']!="")&&(isset($_POST['phone-modal-english'])&&$_POST['phone-modal-english']!="")){
    //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'granevich@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок. Английский'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name-modal-english'].'</p>
                        <p>Телефон: '.$_POST['phone-modal-english'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
//          echo("<script type='text/javascript'>");
//        echo("history.go(-1);");
//        echo("swal('Спасибо!', 'Мы свяжемся с вами в ближайшее время', 'success');   </script>");

}
if((isset($_POST['name-modal-polish'])&&$_POST['name-modal-polish']!="")&&(isset($_POST['phone-modal-polish'])&&$_POST['phone-modal-polish']!="")){
    //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'granevich@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок. Польський'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name-modal-polish'].'</p>
                        <p>Телефон: '.$_POST['phone-modal-polish'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
//          echo("<script type='text/javascript'>");
//        echo("history.go(-1);");
//        echo("swal('Спасибо!', 'Мы свяжемся с вами в ближайшее время', 'success');   </script>");

}
if((isset($_POST['name-modal-chinese'])&&$_POST['name-modal-chinese']!="")&&(isset($_POST['phone-modal-chinese'])&&$_POST['phone-modal-chinese']!="")){
    //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'granevich@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок. Китайский'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name-modal-chinese'].'</p>
                        <p>Телефон: '.$_POST['phone-modal-chinese'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
//          echo("<script type='text/javascript'>");
//        echo("history.go(-1);");
//        echo("swal('Спасибо!', 'Мы свяжемся с вами в ближайшее время', 'success');   </script>");

}
if((isset($_POST['name-modal-business'])&&$_POST['name-modal-business']!="")&&(isset($_POST['phone-modal-business'])&&$_POST['phone-modal-business']!="")){
    //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'granevich@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок. Бизнес английский'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name-modal-business'].'</p>
                        <p>Телефон: '.$_POST['phone-modal-business'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail


}


?>