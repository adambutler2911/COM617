from Py6S import *
import pandas as pd
import numpy as np
import altair as alt

import sys

class SixSHandler():
    s = SixS()
    waveProfile = None

    def __init__(self):
        self.target_alt_pres = None
        self.sensor_alt_pres = None
        self.sensor_altitude = None
        self.aot = None
        self.water = None
        self.ozone = None
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
        elif jsonData['atmoProfile'] == 'predefined':
            if jsonData['atmoProfilePredefined'] != '':
                self.s.atmos_profile = jsonData['atmoProfilePredefined']     
        elif jsonData['atmoProfile'] == 'waterOzone':
            if jsonData['atmoWater'] != '' and jsonData['atmoOzone'] != '':
                self.s.atmos_profile = AtmosProfile.UserWaterAndOzone(float(jsonData['atmoWater']), float(jsonData['atmoOzone']))

    def setAeroProfile(self, jsonData):
        if jsonData['aeroProfile'] == 'predefined':
                self.s.aero_profile = AeroProfile.PredefinedType(int(jsonData['aeroProfilePredefined']))
        elif jsonData['aeroProfile'] == 'userDefined':
            dustNumber = 0
            waterNumber = 0
            oceanicNumber = 0
            sootNumber = 0
            if jsonData['dust'] != '':
                dustNumber = float(jsonData['dust'])
            if jsonData['water'] != '':
                waterNumber = float(jsonData['water'])
            if jsonData['oceanic'] != '':
                oceanicNumber = float(jsonData['oceanic'])
            if jsonData['soot'] != '':
                sootNumber = float(jsonData['soot'])
            self.s.aero_profile = AeroProfile.User(dust=dustNumber,water=waterNumber,oceanic=oceanicNumber,soot=sootNumber)
        elif jsonData['aeroProfile'] == 'multimodal':
            if jsonData['minRad'] != '' and jsonData['maxRad'] != '':
                self.s.aero_profile = AeroProfile.MultimodalLogNormalDistribution(float(jsonData['minRad'],float(jsonData['maxRad'])))
        elif jsonData['aeroProfile'] == 'modifiedGamma':
            if jsonData['minRad'] != '' and jsonData['maxRad'] != '':
                self.s.aero_profile = AeroProfile.ModifiedGammaDistribution(float(jsonData['minRad'],float(jsonData['maxRad'])))
        elif jsonData['aeroProfile'] == 'jungePower':
            if jsonData['minRad'] != '' and jsonData['maxRad'] != '':
                self.s.aero_profile = AeroProfile.JungePowerLawDistribution(float(jsonData['minRad'],float(jsonData['maxRad'])))

    def setAtmosCorrections(self, jsonData):
        if jsonData['corrProfile'] == 'brdfRad':
            if jsonData['radiance'] != '':
                self.s.atmos_corr = AtmosCorr.AtmosCorrBRDFFromRadiance(float(jsonData['radiance']))
        elif jsonData['corrProfile'] == 'brdfRef':
            if jsonData['reflectance'] != '':
                self.s.atmos_corr = AtmosCorr.AtmosCorrBRDFFromReflectance(float(jsonData['reflectance']))
        elif jsonData['corrProfile'] == 'lamRad':
            if jsonData['radiance'] != '':
                self.s.atmos_corr = AtmosCorr.AtmosCorrLambertianFromRadiance(float(jsonData['radiance']))
        elif jsonData['corrProfile'] == 'lamRef':
            if jsonData['reflectance'] != '':
                self.s.atmos_corr = AtmosCorr.AtmosCorrLambertianFromRadiance(float(jsonData['reflectance']))
        elif jsonData['corrProfile'] == 'noCorr':
            self.s.atmos_corr = AtmosCorr.NoAtmosCorr()

    def setAltitudeProfiles(self, jsonData):
        if jsonData['altProfile'] == 'seaLevel':
            self.target_alt_pres=0
        elif jsonData['altProfile'] == 'customAltitude':
            if jsonData['altitude'] != '':
                self.target_alt_pres = -1 * float(jsonData['altitude'])
        elif jsonData['altProfile'] == 'customPressure':
            if jsonData['pressure'] != '':
                self.target_alt_pres = float(jsonData['pressure'])
        elif jsonData['altProfile'] == 'sensorSeaLevel':
            self.sensor_altitude = None
            self.sensor_alt_pres = 0
        elif jsonData['altProfile'] == 'sensorSatelliteLevel':
            self.sensor_altitude = None
            self.sensor_alt_pres = -1000
        elif jsonData['altProfile'] == 'sensorCustomAltitude':
            if jsonData['altitude'] != '':
                self.sensor_altitude = -1 * float(jsonData['altitude'])
                self.aot = -1
                self.water = -1
                self.ozone = -1

    def setGroundReflectance(self, jsonData):
        if jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'lambertian':
                self.s.ground_reflectance = GroundReflectance.HomogeneousLambertian(0.634)
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'walthall':
                if jsonData['albedo'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousWalthall(2,3,5,float(jsonData['albedo']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'hapke':
                if jsonData['albedo'] != '' and jsonData['assymetry'] != '' and jsonData['ampHotspot'] != '' and jsonData['widHotspot'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousHapke(float(jsonData['albedo']),float(jsonData['assymetry']),float(jsonData['ampHotspot']),float(jsonData['widHotspot']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'roujean':
                if jsonData['albedo'] != '' and jsonData['geometric1'] != '' and jsonData['geometric2'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousRoujean(float(jsonData['albedo']),float(jsonData['geometric1']),float(jsonData['geometric2']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'minnaert':
                if jsonData['surfaceAlbedo'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousMinnaert(2,float(jsonData['albedo']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'modis':
                if jsonData['lamWeight'] != '' and jsonData['rossWeight'] != '' and jsonData['liWeight'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousMODISBRDF(float(jsonData['lamWeight']),float(jsonData['rossWeight']),float(jsonData['liWeight']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'ocean':
                if jsonData['windSpeed'] != '' and jsonData['azimuth'] != '' and jsonData['salinity'] != '' and jsonData['pigment'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousOcean(float(jsonData['windSpeed']),float(jsonData['azimuth']),float(jsonData['salinity']),float(jsonData['pigment']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'rahman':
                if jsonData['intensity'] != '' and jsonData['asymmetry'] != '' and jsonData['structural'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousRahman(float(jsonData['intensity']),float(jsonData['asymmetry']),float(jsonData['structural']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'iaquinta':
                if jsonData['leafArea'] != '' and jsonData['hotspotParameter'] != '' and jsonData['leafReflectance'] != '' and jsonData['leafTransmittance'] != '' and jsonData['soilAlbedo'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousIaquintaPinty(jsonData['leafDistribution'],jsonData['hotspotSetting'],float(jsonData['leafArea']),float(jsonData['hotspotParameter']),float(jsonData['leafReflectance']),float(jsonData['leafTransmittance']),float(jsonData['soilAlbedo']))
        elif jsonData['refProfile'] == 'homogeneous':
            if jsonData['refProfileHomo'] == 'kuusk':
                if jsonData['leafArea'] != '' and jsonData['ladEps'] != '' and jsonData['ladThm'] != '' and jsonData['leafRelative'] != '' and jsonData['chlorophyll'] != '' and jsonData['leafThickness'] != '' and jsonData['leafLayers'] != '' and jsonData['leafWax'] != '' and jsonData['soilWeight'] != '':
                    self.s.ground_reflectance = GroundReflectance.HomogeneousKuuskMultispectralCR(float(jsonData['leafArea']),float(jsonData['ladEps']),float(jsonData['ladThm']),float(jsonData['leafRelative']),float(jsonData['chlorophyll']),float(jsonData['leafThickness']),float(jsonData['leafLayers']),float(jsonData['leafWax']),float(jsonData['soilWeight']))
        elif jsonData['refProfile'] == 'heterogeneous':
            if jsonData['refProfileHomo'] == 'lambertian':
                if jsonData['radius'] != '':
                    self.s.ground_reflectance = GroundReflectance.HeterogeneousLambertian(float(jsonData['radius']),0.5,0.5)

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
        line_chart = alt.Chart(pd.DataFrame(data=df)).mark_line().encode(
            x="Wavelength (μm)",
            y="Pixel Radiance (W/m^2)",
        ).properties(
            width="container",
            height="container"
        )

        hover = alt.selection_point(on='pointerover', empty=False)
        point_chart = alt.Chart(pd.DataFrame(data=df)).mark_point().encode(
            x="Wavelength (μm)",
            y="Pixel Radiance (W/m^2)",
            tooltip=["Wavelength (μm)","Pixel Radiance (W/m^2)"],
            opacity=alt.when(hover).then(alt.value(1.0)).otherwise(alt.value(0.0)),
            size=alt.value(80)
        ).properties(
            width="container",
            height="container"
        ).add_params(
            hover
        )

        chart = alt.layer(
            line_chart,
            point_chart
        ).interactive()

        return chart.to_json(indent=None)
    
    def raw(self):
        self.s.run()

        return self.s.outputs.fulltext