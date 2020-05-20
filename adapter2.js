class Smartphone{
    constructor(){
      this.maxInputVolt = 5;
    }
  
    charge(inputVolt){
      console.log(inputVolt)
      if(inputVolt > this.maxInputVolt){
        console.log("Eingangsspannung: " + inputVolt + "Volt!!! Explosion!");
      }
      else{
        console.log("Eingangsspannung: " + inputVolt + " Volt, Smartphone lädt");
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
  
  class Adapter{
    constructor(socket, smartphone  ){
        this.inputVolt = socket.outputVolt;

        if(this.inputVolt == 120){
            console.log("Amerikanische Steckdose erkannt: Übersetzung von 120V in Eingangsspannung des Smartphones");
            this.outputVolt = smartphone.maxInputVolt;
            smartphone.charge(this.outputVolt);
        }
        else{
            console.log("Deutsche Steckdose erkannt: Übersetzung von 230V in Eingangsspannung des Smartphones");
            this.outputVolt = smartphone.maxInputVolt;
            smartphone.charge(this.outputVolt);
        }
       
    }
  }
  
  let smartphone = new Smartphone();
  let deSocket = new DESocket();
  let usSocket = new USSocket();
  let deAdapter = new Adapter(deSocket, smartphone);
  let usAdapter = new Adapter(usSocket, smartphone);



  