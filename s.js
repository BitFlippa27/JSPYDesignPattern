class DB {
    constructor(ip, dbName ){
        this.ip = ip;
        this.dbName = dbName;
        console.log(this)            // this  =  aktuelle Instanz(Objekt DB{})
        console.log("Server: " + this.dbName + " with ip address: " + this.ip + " connected!" );  // DB.ip
        DB.x = 27;
        this.singletonInstanz = DB.createInstance();               // expliziter Rückgabewert, globale Variable, erst erzeugte Instanz

        return this.singletonInstanz;
      }
    
    instanceHolder(){
        let singleton;
    }
    static createInstance(){
        if(this.singleton == null){
            singleton = new DB();
            
            return singleton;
        }
    }
}
  
  


  const db = new DB("52.0.14.116" , "NASA");
 


  