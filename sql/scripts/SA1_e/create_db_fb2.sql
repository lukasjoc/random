# $Id: create_db_fb2.sql 1057 2013-03-09 14:23:36Z michael $
#
# create db FB2, user test - kein PW  (MySQL 5.5.28)

CONNECT mysql;

DROP DATABASE IF EXISTS FB2;
CREATE DATABASE FB2 CHARACTER SET utf8;

DELETE FROM user WHERE user='test';
INSERT INTO user SET Host='localhost',
                     User='test',
                     Password='';

DELETE FROM db WHERE Db='FB2';
INSERT INTO db SET Host='localhost',
                   Db='FB2',
                   User='test',
                   Select_priv='Y',
                   Insert_priv='Y',
                   Update_priv='Y',
                   Delete_priv='Y',
                   Create_priv='Y',
                   Drop_priv='Y',
                   Grant_priv='Y',
                   References_priv='Y',
                   Index_priv='Y',
                   Alter_priv='Y',
                   Create_tmp_table_priv='Y',
                   Lock_tables_priv='Y',
                   Create_view_priv='Y',
                   Show_view_priv='Y',
                   Create_routine_priv='Y',
                   Alter_routine_priv='Y',
                   Execute_priv='Y',
                   Event_priv='Y',
                   Trigger_priv='Y';
 
FLUSH PRIVILEGES;

   
