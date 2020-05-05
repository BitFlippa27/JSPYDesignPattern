class Smartphone:
    max_input_volt = 5

    @classmethod
    def charge(cls, input_volt):
        if input_volt > cls.max_input_volt:
            print("Eingangsspannung: ",input_volt, "Volt!!!  Explosion!")
        else:
            print("Eingangsspannung: ", input_volt, "Volt Smartphone lädt...")


class EuSocket:
    output_volt = 230


class USSocket:
    output_volt = 120


class EUAdapter:
    input_volt = EuSocket.output_volt
    output_volt = Smartphone.max_input_volt



smartphone = Smartphone()
smartphone.charge(EuSocket.output_volt)
smartphone.charge(EUAdapter.output_volt)