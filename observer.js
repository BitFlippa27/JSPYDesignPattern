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

    addPerson(person){
      this.state.push(person);
      this.notify(this.state);
    }
    getState(){
      return this.state;
    }
  }


  class PersonOutput extends Observer{
    
    update(state){
      console.log("Person " + state[state.length -1].name +" Hinzugefügt");
    }
  }


  class PersonCount extends Observer{
    
    update(state){
      console.log("Anzahl der Personen: " + state.length)
      }
  }
  class PersonList extends Observer{

    update(state){
      console.log("Liste der Personen: ");
      for(let person of state)
        console.log(person.name)
    }
  }

const state = new State();
const personOutput = new PersonOutput();
const personCount = new PersonCount();
const personList = new PersonList();

state.addObserver(personOutput);
state.addObserver(personCount);
state.addObserver(personList);
state.addPerson({name: "Alvin"});
state.addPerson({name: "Simon"});
state.removeObserver(personCount);
state.addPerson({name: "Theodore"});



