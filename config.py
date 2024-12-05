import mysql.connector

def get_db_conn():
    return mysql.connector.connect(
            host='127.0.0.1',
            port= 3306,
            database= 'time_travellers_quest',
            user='root',
            password= 'root',
            autocommit=True,
            collation = 'utf8mb4_unicode_ci'
        )