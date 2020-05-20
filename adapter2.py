class Smartphone:
    max_input_volt = 5

    @classmethod
    def charge(cls, input_volt):
        if input_volt > Smartphone.max_input_volt:
            print("Eingangsspannung: ",input_volt, "Volt!!!  Explosion!")
        else:
            print("Eingangsspannung: ", input_volt, "Volt Smartphone lädt...")


class EUSocket:
    output_volt = 230


class USSocket:
    output_volt = 120


class EUAdapter:
    input_volt = EUSocket.output_volt
    output_volt = Smartphone.max_input_volt



smartphone = Smartphone()
smartphone.charge(EUSocket.output_volt)
smartphone.charge(EUAdapter.output_volt)