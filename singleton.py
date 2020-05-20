class DB:
    singleton_instanz = None
    #def __new__(): erster Schritt bei der Instanziierung, Erzeugung der Instanz(Objekt)
    def __new__(cls, ip, db_name):     #statische Methode
    #Falls es keine Instanz dieser klasse gibt erzeuge eine und gib diese zurück
        if DB.singleton_instanz == None:
            DB.singleton_instanz = super().__new__(DB)  #hier wird die Instanz erzeugt
            cls.ip = ip
            cls.db_name = db_name
            DB.x = 27
            print("Server: ", db_name , " with ip adress: " , ip ," connected!" )
            #print(cls)
            #Referenz auf erstes und einziges erzeugtes Objekt  
            return DB.singleton_instanz
        else:
            print("Weitere Instanziierung nicht möglich. Singleton Klasse!!")
            return DB.singleton_instanz
    

    #def _init__(): impliziter zweiter Schritt bei der Instanziierung, Initialisierung des Objekts 
    @classmethod
    def test(cls):
        print(ip)


db1 = DB("52.0.14.116", "NASA")
print(DB.singleton_instanz)
'''print(db1)
print(id(db1))
db2 = DB("127.0.0.1","loopback")
print(db2)
print(id(db2))
print(db1 is db2)
'''









