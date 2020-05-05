class Smartphone{
  constructor(){
    Smartphone.maxInputVolt = 5;
  }

  charge(inputVolt){
    console.log(inputVolt)
    if(inputVolt > Smartphone.maxInputVolt){
      console.log("Eingangsspannung: " + inputVolt + "Volt!!! Explosion!");
    }
    else{
      console.log("Eingangsspannung: " + inputVolt + " Volt, Smartphone lädt");
    }
  }
}

class EUSocket{
  constructor(){
    EUSocket.outputVolt = 230
  }
}

class USSocket{
  constructor(){
    USSocket.outputVolt = 120
  }
}

class EUAdapter{
  constructor(){
    EUAdapter.inputVolt = EUSocket.outputVolt;
    EUAdapter.outputVolt = Smartphone.maxInputVolt;
    
    
  }
}

let smartphone = new Smartphone();
let euadapter = new EUAdapter();
let euSocket = new EUSocket();
let usSocket = new USSocket();


//smartphone.charge(EUAdapter.outputVolt);
smartphone.charge(EUSocket.outputVolt);
smartphone.charge(USSocket.outputVolt);

