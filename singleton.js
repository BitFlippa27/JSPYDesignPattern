class DB {
  constructor(ip, dbName ){
    if(DB.singletonInstanz  == null){   //DB{} Klasse -> Funktion -> Objekt
      this.ip = ip;
      this.dbName = dbName;
      DB.singletonInstanz = this;  
      console.log(this)            // this  =  aktuelle Instanz(Objekt DB{})
      console.log("Server: ", this.dbName, " with ip address: " , this.ip, " connected!" );  // DB.ip
      DB.x = 27;
      return DB.singletonInstanz              // expliziter Rückgabewert, globale Variable, erst erzeugte Instanz
    }
    else{
      console.log("Weitere Instanziierung nicht möglich. Singleton Klasse!");
      // Rückgabewert des Konstruktors ist immer die Referenz auf die erste und erzeugte Instanz
      return DB.singletonInstanz;
    }
  }
  static connect(){
    console.log(this.ip);
      
  }
 }


class Test{
  constructor(){
    console.log("works" + DB.x)
  }
}
//Object.freeze(db);           //optional je nach Use Case
//DB.connect();       
//DB.singletonInstanz = "22"; 

const db = new DB("52.0.14.116" , "NASA");
console.log(db);  
console.log(DB.singletonInstanz)  
const db2 = new DB("127.0.0.1" , "loopback");
console.log(db2);                
console.log(Object.is(db,db2))
const test = new Test();



