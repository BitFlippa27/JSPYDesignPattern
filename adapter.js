class Smartphone{
    constructor(){
      this.maxInputVolt = 5;
    }
  
    charge(convertedVolt){
      if(convertedVolt == this.maxInputVolt){
        console.log("Eingangsspannung: ", convertedVolt ," Volt, Smartphone lädt...");
      }
      else{
        console.log("Falsche Eingangsspannung. Smartphone wird nicht geladen.");
        
      }
      
      
    }
}
  
class DESocket{
  constructor(){
    this.outputVolt = 230
  }
}
  
class USSocket{
  constructor(){
      this.outputVolt = 120
  }
}

class DEAdapter{
  constructor(deSocket, smartphone){
    this.smartphone = smartphone;
    this.deSocket = deSocket;
    
    
  }

  convert(){
    this.inputVolt = this.deSocket.outputVolt;
    if(this.inputVolt == 230)
    {
      this.convertedVolt = this.smartphone.maxInputVolt;
      this.smartphone.charge(this.convertedVolt);
    }
    else{
      console.log("Keine deutsche Steckdose")
    }
  }
}

class USAdapter{
  constructor(usSocket, smartphone){
    this.smartphone = smartphone;
    this.usSocket = usSocket;
  }

  convert(){
    this.inputVolt = this.usSocket.outputVolt;
    if(this.inputVolt == 120)
    {
      this.convertedVolt = this.smartphone.maxInputVolt;
      this.smartphone.charge(this.convertedVolt);
    }else{
      console.log("Keine amerikanische Steckdose")
    }
   
  }
}
  
  
class UniAdapter extends DEAdapter{
  constructor(socket, smartphone){
      super(socket, smartphone);
      this.inputVolt = socket.outputVolt;
      if(this.inputVolt == 230){
        console.log("Deutsche Steckdose erkannt: Übersetzung von 230V in Eingangsspannung des Smartphones");
        this.convert();
      }
      else{
          console.log("Amerikanische Steckdose erkannt: Übersetzung von 120V in Eingangsspannung des Smartphones");
          this.convert();
      }
    }
    convert(){
      this.convertedVolt = this.smartphone.maxInputVolt;
      this.smartphone.charge(this.convertedVolt);
    }
}
  
const smartphone = new Smartphone();
const deSocket = new DESocket();
const usSocket = new USSocket();

//const deAdapter = new DEAdapter(deSocket, smartphone);
//deAdapter.convert();
let uniAdapter  = new UniAdapter(usSocket,smartphone);






  
