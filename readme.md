# Probstat - built onLaravel PHP Framework

## Installation instructions [Apache and PHP]

- Install XAMPP with PHP 5.5
- Set DocumentRoot "D:\applications\prob-stat\public"
- Set <Directory "D:\applications\prob-stat-path">
- Edit php.ini, set the ff: value
- curl.cainfo="C:\xampp\php\cacert.pem"  **file is attached on project as well**
- date.timezone = Asia/Manila

## SendMail Config/Setup [php.ini]
[mail function]
; For Win32 only.
; http://php.net/smtp
SMTP=smtp.gmail.com
; http://php.net/smtp-port
smtp_port=587

; For Win32 only.
; http://php.net/sendmail-from
sendmail_from = probationary.status@gmail.com

; For Unix only.  You may supply arguments as well (default: "sendmail -t -i").
; http://php.net/sendmail-path
sendmail_path = "\"C:\xampp\sendmail\sendmail.exe\" -t"

## Send Mail Config/Setup [sendmail.ini]
; configuration for fake sendmail

; if this file doesn't exist, sendmail.exe will look for the settings in
; the registry, under HKLM\Software\Sendmail

[sendmail]

; you must change mail.mydomain.com to your smtp server,
; or to IIS's "pickup" directory.  (generally C:\Inetpub\mailroot\Pickup)
; emails delivered via IIS's pickup directory cause sendmail to
; run quicker, but you won't get error messages back to the calling
; application.

smtp_server=smtp.gmail.com

; smtp port (normally 25)

smtp_port=587

; SMTPS (SSL) support
;   auto = use SSL for port 465, otherwise try to use TLS
;   ssl  = alway use SSL
;   tls  = always use TLS
;   none = never try to use SSL

smtp_ssl=auto

; the default domain for this server will be read from the registry
; this will be appended to email addresses when one isn't provided
; if you want to override the value in the registry, uncomment and modify

;default_domain=mydomain.com

; log smtp errors to error.log (defaults to same directory as sendmail.exe)
; uncomment to enable logging

error_logfile=error.log

; create debug log as debug.log (defaults to same directory as sendmail.exe)
; uncomment to enable debugging

;debug_logfile=debug.log

; if your smtp server requires authentication, modify the following two lines

auth_username=probationary.status@gmail.com
auth_password=probstatapp

; if your smtp server uses pop3 before smtp authentication, modify the 
; following three lines.  do not enable unless it is required.

pop3_server=
pop3_username=
pop3_password=

; force the sender to always be the following email address
; this will only affect the "MAIL FROM" command, it won't modify 
; the "From: " header of the message content

force_sender=probationary.status@gmail.com

; force the sender to always be the following email address
; this will only affect the "RCTP TO" command, it won't modify 
; the "To: " header of the message content

force_recipient=

; sendmail will use your hostname and your default_domain in the ehlo/helo
; smtp greeting.  you can manually set the ehlo/helo name if required

hostname=



## Processing Queues
- In a terminal, type in  `php artisan queue:work`, to trigger and process queues in the background
