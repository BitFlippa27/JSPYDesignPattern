class Subject{  //Subject
    constructor(name){
      this.observers = [];
      this.name = name;
    }

    addObserver(fn){
    this.observers.push(fn); 
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
  update(){}
}


class State extends Subject{
  constructor(){
    super();
    this.state = [];
  }

  addUser(user){
    //this.state = Object.assign(this.state, user);
    this.state.push(user);
    this.notify(this.state);
  }
  getState(){
    return this.state;
  }
}


class UserOutput extends Observer{
  
  update(state){
    console.log("User " + state[state.length -1].name +" Hinzugefügt");
  }
}


class UserCount extends Observer{
  
  update(state){
    for(let i = 0; i<state.length; i++){
      var count = i;
      count ++;
    }
    
    return console.log("Anzahl der User " + count);
    }
}


const state = new State();
const userOutput = new UserOutput();
const userCount = new UserCount();

state.addObserver(userOutput);
state.addObserver(userCount);
state.addUser({name: "Hans"});
state.addUser({name: "Franz"});



