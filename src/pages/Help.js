import React from 'react';
import Markdown from 'react-markdown';

const helpdocs = `
# Obsługa bazy danych i e-mail w React

PO PIERWSZE pamiętaj, że React jest tylko od strony przeglądarki. By łączyć się z serwerwerm i robić tego typu optrację potrzebujesz zawnętrznego pliku Node.js. WIĘC NAJPIERW ZRÓB SOBIE TAKI PILK I NIE PRÓBUJ ZNOWU WSZYTSKIEGO WRZUCAĆ DO REACTA

METODY NA PRZESYŁ WIDAMOŚCI EMAIL
---------------------------------

# Użycie SMTP

**SMTP (ang. Simple Mail Transfer Protocol)** jest to protokół przesyłania wiadomości, który wykorzystuje się do wymiany e‑maili pomiędzy serwerami pocztowymi za pośrednictwem programów pocztowych. Jako serwer SMTP możemy wykorzystać dowolną pocztę instrentową (pamietając o odpowiedniej konfiguracji konta, by protokoły wo wysułu i odpiobru działy) lub możemy użyć czegoś co imituje nam taki serwer jak np. Mailtrap.

# Zalety:

*   Łatwośći w konfiguracji.
*   Prostość w obsłudze (istnieje dużo poradników też,jako że jest jedna zż popularnijeszych metod).

# Wady:

*   Przez swoją populraność stały się bardzo podatne na najróżniejsze cyber ataki np. DDoS
*   Niemożliwość w weryfikacji nadawcy.
*   Nie jest się wstanie zapewnić 100% bezpieczeństwa przed niebezpiecznymi wiadmościami.
*   Czas wysłania wiamości jest dłużysz niż w przypadki API.
*   Trzba włożyć dużo pracy w utrzymacie i bezpieczeństwo serwera.

# Użycie transakcyjnego interfejsu API poczty e-mail

**Interfejs API** jest hostowanych na zewnętrznych stronach takich jak Amazon SES, Postmark, SparkPost, SendGrid, Mailgun i Mailchimp Transactional. Nie trzeba samodzielnie zarządzać serwerami poczty e-mail i ich wymaganiami. Interfejs osługuje składanie, wysyłanie i dostarczanie wiadmości.

# Zalety:

*   Łatwości w obsłudze.
*   Możliwość monitorowania przesyłu i odbioru wiadomości.
*   Duża przepustowości wysyłu.
*   Duża ilość dostępnych funkcjonalności.
*   Dla dodatkowego bezpieczeństwa można wykorzytsywać klucze API

# Wady:

*   Duże koszta. Strony z API są płatne.
*   Mniejsza kontrolna niż w SMTP. Polega się na zwnętrznej firmie.
*   Ograniczony czas działania, funkcjiolnalnośći w zależnośći od zakupionej wresji.
*   Problemu z obsługą wielokanałowej usługi powiadomień. Trzeba do tego osobnej konfiguracji.

# Użycie wielokanałowej usługi powiadamiania

Wielokanałowe usługi powiadomień umożliwiają dotarcie do użytkowników wieloma różnymi kanałami.Możńa ustawić własnego dostawcę na dany kanał na przykład w przypadku poczty e-mail może to być własny serwer SMTP lub hostowany transakcyjny interfejs API poczty e-mail. Takie usługi pełni aplikacja na przykład Courier.

# Zalety:

*   Dużo dodaktowych funkcjonalności.
*   Łatwości w urzyciu.
*   Można wysyłać wiadomości przez poczte e-mail, SMS, aplikacje push lub czaty, takie jak Slack i WhatsApp.
*   Łatwo dodać więcej kanałów i zmienić dostawcę usług e-mail.

# Wady:

*   Mniejsza kontrolna niż w SMTP. Polega się na zwnętrznej firmie.

CO ZROBIĆ WYSYŁ EMAILA??
------------------------

BĘDĘ TU UŻYWAĆ SPOSOBU SMTP, ponieważ nie potrzebujemy dużej przetustowości i ogromnej ilość funkcjonalności.

Pierwsze co to przygotuj sobie mały projket node.js, który potem będzie połączony z react'em.  
Dalej w katalugo z pilkami node.js zainstaluj moduł Nodemailer za pomocą polecania w konsoli:

\`npm install nodemailer\`

Dalej dla środowiska testowego stworzymy sobie przestrzeń roboczą w Mailtrap. Storzymy tam konto i potem na przestrzeni roboczej trzeba wybrać, że chcemy używać Nodemailera (jak na obrazku ponieżej)

![Zdjęcie panelu z Mailtrap](mailtrap.png)

Zdjęcie z strony:[www.courier.com/blog/how-to-send-emails-with-node-js/](https://www.courier.com/blog/how-to-send-emails-with-node-js/)

Zaś w swoim pliku powinienieś dać ten fagment codu:

    const nodemailer = require('nodemailer'); //oczywiście potem w transporterze można ustawić własną skrzynkę pocztową, by to na nią przychodziły potem wiadomośći   
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: "nazwa(przy wybraniu w Mailtrap Nodemailera, powień ci się pokazać ten fragment kodu gdzie masz swoją nazwę i hasło do konta)",
            pass: "hasło"
        }
    })
    message = {
        from: "from-example@email.com",
        to: "to-example@email.com",
        subject: "Subject",
        text: "Jeśli udało się przesłać i na MailTrapie pojawi się wiadmość.To w miejsca tekstu staraj się wstawić tekst wiamości pobrany z aplikacji w reactcie "
    }
    transporter.sendMail(message, ** function ** (err, info) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(info);
                }


Jeśli coś nie będzie działać jeśli chodzi o samaą wysyłkę emaila to radzę poczytać dokumentację: [nodemailer.com](https://nodemailer.com/about/)

POŁĄCZENIE Z BAZĄ DANYCH
------------------------

Należy stworzyć nowy projket w node.js, który potem podłączy się pod naszą aplikację w reactcie. Po stworzeniu projektu należy w terminalu zainstalować pakiet SQLite3:

\`npm install sqlite3\`

Następie w pliku index.js należy dać kod połaczenia się z bazą danych

    const mysql = require('mysql');
    let link = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Student123!',
        database: 'zse_rep-tool'
    });
    link.connect(function(err) {
        if (!!err) {
            console.log(err);
        } else {
            console.log('Connect');
        }
    });

Następie podtrzebujemy polecania, dzięki którym będziemy mogli zapisywać zgłoszenia ucznów i pobrać klasy, które trzeba dać do rozwijanej listy w formularzu

    function get() {
        link.query("SELECT \`id\`,\`yos\`,\`name\` FROM rt_units", (err, rows, flds) => {
            if (!!err) {
                console.log(err);
            } else {
                console.log("Liczba wierszy: " + rows.length);
                console.log("Pole 'id': " + rows[0].id);
                console.log("Pole 'yos': " + rows[0].yos);
                console.log("Pole 'name': " + rows[0].name);
                console.log(rows);
                return rows;
            }
        });
    }
    get(); //jeśli dodanie się powiedzie zaimportuj wi miejsca danych wartości w formularza
    function put() {
        let data = {
            id_author: '0',
            unit: 'Unit',
            surname: 'Surname',
            name: 'Name',
            email: 'Email',
            title: 'Title',
            content: 'Content'
        };
        link.query("INSERT INTO rt_submissions SET ?", data, (err) => {
            console.log(err);
        });
    }
    put();`
const Help = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className='markdown'>
        <Markdown children={helpdocs} />
        </div>
    </div>
  );
};
  
export default Help;