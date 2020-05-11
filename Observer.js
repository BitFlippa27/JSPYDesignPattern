class Subject{  //Subject
    constructor(name){
        this.observers = [];
        this.name = name;
    }

    addObserver(fn){
    this.observers.push(fn); 
    //console.log("Funktion" + fn + "hinzugefügt")

    }

    removeObserver(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn)
            return item;
        });
      
    }

    notify(data){
      if (this.observers.length > 0) {
        this.observers.forEach(observer => observer.update(data));
        
      }
    }
}

class Observer{
  update(){

  }
}

class ConcreteObserver extends Observer{
  
  update(state){
    this.output(state);
  }

  output(state){
    console.log(state +"Hinzugefügt");
  }
}



class ConcreteSubject extends Subject{
  constructor(){
    super();
    this.state = {};
  }

  update(data){
    this.state = Object.assign(this.state, data);
    this.notify(this.state);
    //console.log(this.state);
   
  }

  getState(){
    return this.state;
  }
}


var users =[
  {
    id: 1,
    name: "Jennifer"
  },
  {
    id: 2,
    name: "Jane"
  },
  {
    id: 3,
    name: "John"
  }
];





const state = new ConcreteSubject();
const render = new ConcreteObserver();



state.update({users});
//console.log({user});
state.addObserver(render);
render.output(state.getState());
//console.log(state.getState())
console.log(state);
state.update();
console.log(state);
