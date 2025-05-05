from Py6S import *
import pandas as pd
import numpy as np
import altair as alt

import sys

class SixSHandler():
    s = SixS()
    waveProfile = None

    def __init__(self):
        pass

    @classmethod
    def placeholder(self):
        wavelengths, results = SixSHelpers.Wavelengths.run_vnir(self.s, output_name="apparent_radiance")
        df = {"Wavelength (μm)": wavelengths, "Pixel Radiance (W/m^2)":results}
        chart = alt.Chart(pd.DataFrame(data=df)).mark_line().encode(
            x="Wavelength (μm)",
            y="Pixel Radiance (W/m^2)"
        ).properties(
            width="container",
            height="container"
        ).interactive()
        return chart.to_json(indent=None)
    
    def setAtmosProfile(self, jsonData):
        if jsonData['atmoProfile'] == 'latDate':
            if jsonData['atmoLat'] != '' and jsonData['atmoDate'] != '':
                self.s.atmos_profile = AtmosProfile.FromLatitudeAndDate(float(jsonData['atmoLat']), jsonData['atmoDate'])
        elif jsonData['atmoProfile'] == 'predefined':
                self.s.atmos_profile = AtmosProfile.PredefinedType(int(jsonData['atmoProfilePredefined']))       
        elif jsonData['atmoProfile'] == 'waterOzone':
            if jsonData['atmoWater'] != '' and jsonData['atmoOzone'] != '':
                self.s.atmos_profile = AtmosProfile.UserWaterAndOzone(float(jsonData['atmoWater']), float(jsonData['atmoOzone']))
        elif jsonData['atmoProfile'] == 'radiosonde':
            if jsonData['atmoWater'] != '' and jsonData['atmoOzone'] != '':
                self.s.atmos_profile = AtmosProfile.RadiosondeProfile()

    def setWaveProfile(self, jsonData):
        if jsonData['waveProfile'] == 'singleVal':
            if jsonData['singleWave'] != '':
                self.waveProfile = [float(jsonData['singleWave'])]
                self.s.wavelength = Wavelength(float(jsonData['singleWave']))
        elif jsonData['waveProfile'] == 'range':
            if jsonData['minWave'] != '' and jsonData['maxWave'] != '':
                self.waveProfile = np.arange(float(jsonData['minWave']),  float(jsonData['maxWave']), 0.025)
                self.s.wavelength = Wavelength(float(jsonData['minWave']),  float(jsonData['maxWave']))
        elif jsonData['waveProfile'] == 'rangeFilter':
            if jsonData['minWave'] != '' and jsonData['maxWave'] != '' and jsonData['waveFilter'] != '':
                self.waveProfile = np.arange(float(jsonData['minWave']),  float(jsonData['maxWave']), 0.025)
                self.s.wavelength = Wavelength(float(jsonData['minWave']),  float(jsonData['maxWave']),  jsonData['waveFilter'].split(', '))
        elif jsonData['waveProfile'] == 'predefined':
            if jsonData['waveProfilePredefined'] != '':
                self.waveProfile = [getattr(PredefinedWavelengths, jsonData['waveProfilePredefined'])]
                self.s.wavelength = Wavelength(getattr(PredefinedWavelengths, jsonData['waveProfilePredefined']))
    
    def graph(self):
        wavelengths, results = SixSHelpers.Wavelengths.run_wavelengths(self.s, self.waveProfile, output_name='apparent_radiance')
        #wavelengths = map(Wavelengths.to_centre_wavelengths, wavelengths)
        #if sys.version_info[0] >= 3:
        #    wavelengths = list(wavelengths)

        df = {"Wavelength (μm)": wavelengths, "Pixel Radiance (W/m^2)":results}
        chart = alt.Chart(pd.DataFrame(data=df)).mark_line().encode(
            x="Wavelength (μm)",
            y="Pixel Radiance (W/m^2)"
        ).properties(
            width="container",
            height="container"
        ).interactive()
        return chart.to_json(indent=None)
    
    def raw(self):
        self.s.run()

        return self.s.outputs.fulltext