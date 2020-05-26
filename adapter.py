class Smartphone:
    def __init__(self):
        self.max_input_volt = 5

    def charge(self, converted_volt):
        if(converted_volt == self.max_input_volt):
            print("Eingangsspannung: ", converted_volt, "Volt, Smartphone lädt...")
        else:
            print("Inkorrekte Eingangsspannung. Smartphone wird nicht geladen.")

class DESocket:
    def __init__(self):
        self.output_volt = 230


class USSocket:
    def __init__(self):
        self.output_volt = 120

class DEAdapter:
    def __init__(self, de_socket, smartphone):
        self.smartphone = smartphone
        self.de_socket = de_socket
    
    def convert(self):
        self.input_volt = self.de_socket.output_volt
        if(self.input_volt == 230):
            self.converted_volt = self.smartphone.max_input_volt
            self.smartphone.charge(self.converted_volt)
        else:
            print("Spannung nicht erkannt. Dies ist ein Adapter für ein amerikanisches Gerät")
        
        
class USAdapter:
    def __init__(self, us_socket, smartphone):
        self.smartphone = smartphone
        self.us_socket = us_socket
    
    def convert(self):
        self.input_volt = self.us_socket.output_volt
        if(self.input_volt == 120):
            self.converted_volt = self.smartphone.max_input_volt
            self.smartphone.charge(self.converted_volt)
        else:
            print("Spannung nicht erkannt. Dies ist ein Adapter für ein deutsches Gerät")
                
    
class UniAdapter(DEAdapter):
    def __init__(self, socket, smartphone): 
        super().__init__(socket, smartphone)
        self.input_volt = socket.output_volt
        
        if(self.input_volt == 120):
            print("Amerikanische Steckdose erkannt: Übersetzung von 120V in Eingangsspannung des Smartphones")
            self.convert()
        else:
            print("Deutsche Steckdose erkannt: Übersetzung von 230V in Eingangsspannung des Smartphones")
            self.convert()
    
    def convert(self):
        self.converted_volt = self.smartphone.max_input_volt
        self.smartphone.charge(self.converted_volt)

smartphone = Smartphone()
de_socket = DESocket()
us_socket = USSocket()

#de_adapter = DEAdapter(de_socket, smartphone)
#us_adapter = USAdapter(de_socket, smartphone)

#de_adapter.convert()

uni_adapter = UniAdapter(us_socket, smartphone)





