    class Smartphone:
        def __init__(self):
            self.max_input_volt = 5

        def charge(self, input_volt):
            print("Eingangsspannung: ", input_volt, "Volt, Smartphone lädt...")


    class DESocket:
        def __init__(self):
            self.output_volt = 230


    class USSocket:
        def __init__(self):
            self.output_volt = 120

    class DEAdapter:
        def __init__(self, de_socket, smartphone):
            self.input_volt = us_socket.output_volt
        
        def convert(self):
            print("Deutsche Steckdose erkannt: Übersetzung von 230V in Eingangsspannung des Smartphones")
            self.output_volt = smartphone.max_input_volt
            return self.output_volt
            
            
    class USAdapter:
        def __init__(self, us_socket, smartphone):
            self.input_volt = us_socket.output_volt

        def convert(self):
            print("Amerikanische Steckdose erkannt: Übersetzung von 120V in Eingangsspannung des Smartphones")
            self.output_volt = smartphone.max_input_volt
            return self.output_volt
            
        
    class Adapter:
        def __init__(self, socket, smartphone): 
            self.input_volt = socket.output_volt
            print("Deutsche Steckdose erkannt: Übersetzung von 230V in Eingangsspannung des Smartphones")
            self.output_volt = smartphone
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
    us_adapter = USAdapter(de_socket, smartphone)
    de_adapter = DEAdapter(de_socket, smartphone)
    correct_voltage_us = us_adapter.convert()
    correct_voltage_de  = de_adapter.convert()

    smartphone.charge(correct_voltage_us)
    smartphone.charge(correct_voltage_de)

    #uni_adapter = new Adapter(socket, smartphone)





