class Subject{  //Subject
    constructor(){
      this.observers = [];
      }

    addObserver(observer){
    this.observers.push(observer); 
    }

    removeObserver(observer){
      this.observers = this.observers.filter(function(item){
        if(item !== observer)
        return item;
      });
    }
    
    notify(data){
      if (this.observers.length > 0){
        for(let observer of this.observers){
          observer.update(data);
        }
      }else{
        console.log("Keine Observer registriert")
      }
    /*
    for(let i = 0;i < this.observers.length;i++){
      this.observers[i].update(data);
    }
    if (this.observers.length > 0) {
          this.observers.forEach(function(observer){
          return observer.update(data)});
  */
      
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
state.removeObserver(userCount);
state.addUser({name: "Monika"});



