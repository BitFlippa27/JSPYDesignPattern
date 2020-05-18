class Subject:

    def __init__(self):
        self.observers = []
        
    def add_observer(self, observer):
        self.observers.append(observer)

    
    def remove_observer(self, observer):
        self.observers.remove(observer)

       
    def notify(self, data): 
        if(len(self.observers) > 0):
            for observer in self.observers:
                observer.update(data)
        else:
            print("Keine Observer registriert")

       
class Observer:

    def update():
        pass

        
class State(Subject):
    def __init__(self):
        super().__init__()
        self.state = []
    
    def add_person(self, person):
        self.state.append(person)
        self.notify(self.state)
    
    def get_state():
        return self.state


class PersonOutput(Observer):

    def update(self, state):
        print("Person ", state[-1]["name"], " Hinzugefügt")
        print(self)


class PersonCount(Observer):

    def update(self, state):
       return print("Anzahl der Personen: ", len(state))

class PersonList(Observer):
    def update(self, state):
        print("Liste der Personen: ")
        for person in state:
            print(person["name"])


state = State()
person_output = PersonOutput()
person_count  = PersonCount()
person_list = PersonList()

state.add_observer(person_output)
state.add_observer(person_count)
state.add_observer(person_list)
state.add_person({"name" : "Alvin"})
state.add_person({"name" : "Simon"})

