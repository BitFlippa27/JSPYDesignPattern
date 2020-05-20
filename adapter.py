class Smartphone:
    def __init__(self):
        self.max_input_volt = 5

    def charge(self, input_volt):
        print(input_volt, self.max_input_volt)
        if input_volt > self.max_input_volt:
            print("Eingangsspannung: ",input_volt, "Volt!!!  Explosion!")
        else:
            print("Eingangsspannung: ", input_volt, "Volt Smartphone lädt...")


class DESocket:
    def __init__(self):
        self.output_volt = 230


class USSocket:
    def __init__(self):
        self.output_volt = 120


class Adapter:
    def __init__(self, socket, smartphone): 
        self.input_volt = socket.output_volt

        if(self.input_volt == 120):
            print("Amerikanische Steckdose erkannt: Übersetzung von 120V in Eingangsspannung des Smartphones")
            self.output_volt = smartphone.max_input_volt
            smartphone.charge(self.output_volt)
        else:
            print("Deutsche Steckdose erkannt: Übersetzung von 230V in Eingangsspannung des Smartphones")
            self.output_volt = smartphone.max_input_volt
            smartphone.charge(self.output_volt)
    

smartphone = Smartphone()
de_socket = DESocket()
us_socket = USSocket()
de_adapter = Adapter(de_socket, smartphone )
us_adapter = Adapter(us_socket, smartphone)
#smartphone.charge(euAdapter.output_volt)
#smartphone.charge(usAdapter.output_volt)


