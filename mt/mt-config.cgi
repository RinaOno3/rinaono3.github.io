## Movable Type Configuration File
##
## This file defines system-wide
## settings for Movable Type. In 
## total, there are over a hundred 
## options, but only those 
## critical for everyone are listed 
## below.
##
## Information on all others can be 
## found at:
##  https://www.movabletype.jp/documentation/config

#======== REQUIRED SETTINGS ==========

CGIPath        /mt/
StaticWebPath  /mt/mt-static/
StaticFilePath /var/www/html/mt/mt-static

#======== DATABASE SETTINGS ==========

ObjectDriver DBI::mysql
Database mt_db
DBUser mt_user
DBPassword mt_2025
DBHost localhost

#======== MAIL SETTINGS ==========
MailTransfer sendmail
SendMailPath /usr/sbin/sendmail


