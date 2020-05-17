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
      
      notify(state){
        if (this.observers.length > 0){
          for(let observer of this.observers){
            observer.update(state);
          }
        }else{
          console.log("Keine Observer registriert")
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
      console.log("Person " + state[state.length -1].name +" Hinzugefügt");
    }
  }


  class UserCount extends Observer{
    
    update(state){
      console.log("Anzahl der Personen: " + state.length)
      }
  }
  class UserList extends Observer{

    update(state){
      console.log("Liste der Personen: ");
      for(let user of state)
        console.log(user.name)
    }
  }

const state = new State();
const userOutput = new UserOutput();
const userCount = new UserCount();
const userList = new UserList();

state.addObserver(userOutput);
state.addObserver(userCount);
state.addObserver(userList);
state.addUser({name: "Alvin"});
state.addUser({name: "Simon"});
state.removeObserver(userCount);
state.addUser({name: "Theodore"});



