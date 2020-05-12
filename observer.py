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
    
    def add_user(self, user):
        self.state.append(user)
        self.notify(self.state)
    
    def remove_user(self, user):
        self.state.remove(user)
        self.notify(self.state)
    
    def get_state():
        return self.state


class UserOutput(Observer):

    def update(self, state):
        print("User ", state[-1], " Hinzugefügt")


class UserCount(Observer):

    def update(self, state):
       return print("Anzahl der User", len(state))





state = State()
userOutput = UserOutput()
userCount  = UserCount()

#state.add_observer(userCount)
state.add_user("Hans")
state.add_user("Franz")
state.remove_user("Franz")