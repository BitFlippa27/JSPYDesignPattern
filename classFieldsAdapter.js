class Smartphone{
    static maxInputVolt = 5;
  
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
    static outputVolt = 230
  }
  
  class USSocket{
    static outputVolt = 120
  }
  
  class EUAdapter{
    static inputVolt = EUSocket.outputVolt;
    static outputVolt = Smartphone.maxInputVolt;
  }
  
  let smartphone = new Smartphone();

  
  smartphone.charge(EUAdapter.outputVolt);
  smartphone.charge(EUSocket.outputVolt);
  smartphone.charge(USSocket.outputVolt);
  
  
