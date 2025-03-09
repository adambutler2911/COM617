from Py6S import *

class SixSHandler():
    s = SixS()

    def __init__(self):
        pass

    @classmethod
    def placeholder(self):
        wavelengths, results = SixSHelpers.Wavelengths.run_vnir(self.s, output_name="pixel_radiance")
        SixSHelpers.Wavelengths.plot_wavelengths(wavelengths, results, "Pixel Radiance")