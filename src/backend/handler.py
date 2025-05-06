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

    def setWaveProfile_Raw(self, jsonData):
        if jsonData['waveProfile'] == 'singleVal':
            if jsonData['singleWave'] != '':
                self.s.wavelength = Wavelength(float(jsonData['singleWave']))
        elif jsonData['waveProfile'] == 'range':
            if jsonData['minWave'] != '' and jsonData['maxWave'] != '':
                self.s.wavelength = Wavelength(float(jsonData['minWave']),  float(jsonData['maxWave']))
        elif jsonData['waveProfile'] == 'rangeFilter':
            if jsonData['minWave'] != '' and jsonData['maxWave'] != '' and jsonData['waveFilter'] != '':
                self.s.wavelength = Wavelength(float(jsonData['minWave']),  float(jsonData['maxWave']),  jsonData['waveFilter'].split(', '))
        elif jsonData['waveProfile'] == 'predefined':
            if jsonData['waveProfilePredefined'] != '':
                self.s.wavelength = Wavelength(getattr(PredefinedWavelengths, jsonData['waveProfilePredefined']))

    def setWaveProfile_Graph(self, jsonData):
        if jsonData['waveProfile'] == 'singleVal':
            if jsonData['singleWave'] != '':
                self.waveProfile = [float(jsonData['singleWave'])]
            else:
                self.waveProfile = 'FULL'
        elif jsonData['waveProfile'] == 'range':
            if jsonData['minWave'] != '' and jsonData['maxWave'] != '':
                self.waveProfile = np.arange(float(jsonData['minWave']),  float(jsonData['maxWave']), 0.005)
            else:
                self.waveProfile = 'FULL'
        elif jsonData['waveProfile'] == 'rangeFilter':
            if jsonData['minWave'] != '' and jsonData['maxWave'] != '' and jsonData['waveFilter'] != '':
                self.waveProfile = np.arange(float(jsonData['minWave']),  float(jsonData['maxWave']), 0.005)
            else:
                self.waveProfile = 'FULL'
        elif jsonData['waveProfile'] == 'predefined':
            if jsonData['waveProfilePredefined'] != '':
                self.waveProfile = jsonData['waveProfilePredefined']
            else:
                self.waveProfile = 'FULL'

    def setAerosolProfile(self, jsonData):
        if jsonData['aeroProfile'] == 'predefined':
            if jsonData['aeroProfilePredefined'] != '':
                self.s.aero_profile = AeroProfile.PredefinedType(getattr(AeroProfile, jsonData['waveProfilePredefined']))
        elif jsonData['aeroProfile'] == 'custom':
            if jsonData['minRad'] != '' and jsonData['maxRad'] != '':
                self.s.aero_profile = np.arange(float(jsonData['minWave']),  float(jsonData['maxWave']), 0.005)
        elif jsonData['aeroProfile'] == 'multimodal':
            if jsonData['minRad'] != '' and jsonData['maxRad'] != '':
                self.s.aeroProfile = np.arange(float(jsonData['minWave']),  float(jsonData['maxWave']), 0.005)
        elif jsonData['waveProfile'] == 'modifiedGamma':
            if jsonData['waveProfilePredefined'] != '':
                self.s.aero_profile = jsonData['waveProfilePredefined']
        elif jsonData['waveProfile'] == 'jungePower':
            if jsonData['waveProfilePredefined'] != '':
                self.s.aero_profile = jsonData['waveProfilePredefined']
    
    def graph(self):
        if isinstance(self.waveProfile, str):
            if self.waveProfile == "LANDSAT_OLI":
                wavelengths, results = SixSHelpers.Wavelengths.run_landsat_oli(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "S2A_MSI":
                wavelengths, results = SixSHelpers.Wavelengths.run_s2a_msi(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "S3A_OLCI":
                wavelengths, results = SixSHelpers.Wavelengths.run_s3a_olci(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "S3A_SLSTR":
                wavelengths, results = SixSHelpers.Wavelengths.run_s3a_slstr(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "S2B_MSI":
                wavelengths, results = SixSHelpers.Wavelengths.run_s2b_msi(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "S3B_OLCI":
                wavelengths, results = SixSHelpers.Wavelengths.run_s3b_olci(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "S3B_SLSTR":
                wavelengths, results = SixSHelpers.Wavelengths.run_s3b_slstr(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "ACCURATE_MODIS_TERRA":
                wavelengths, results = SixSHelpers.Wavelengths.run_terra(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "ACCURATE_MODIS_AQUA":
                wavelengths, results = SixSHelpers.Wavelengths.run_aqua(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "PROBAV_1":
                wavelengths, results = SixSHelpers.Wavelengths.run_probav_1(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "PROBAV_2":
                wavelengths, results = SixSHelpers.Wavelengths.run_probav_2(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "PROBAV_3":
                wavelengths, results = SixSHelpers.Wavelengths.run_probav_3(self.s, output_name='apparent_radiance')
            elif self.waveProfile == "FULL":
                wavelengths, results = SixSHelpers.Wavelengths.run_whole_range(self.s, output_name='apparent_radiance')
        else:
            wavelengths, results = SixSHelpers.Wavelengths.run_wavelengths(self.s, self.waveProfile, output_name='apparent_radiance')

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