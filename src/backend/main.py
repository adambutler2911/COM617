from fastapi import FastAPI, Form, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import altair as alt
import uvicorn

from handler import SixSHandler

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/graph")
async def root(request: Request):
    data = await request.form()
    data = jsonable_encoder(data)

    newSim = SixSHandler()
    newSim.setAtmosProfile(data)
    newSim.setAeroProfile(data)
    newSim.setAtmosCorrections(data)
    newSim.setAltitudeProfiles(data)
    newSim.setGroundReflectance(data)
    newSim.setWaveProfile_Graph(data)

    graph_json = newSim.graph()
    graph_json = jsonable_encoder(graph_json)
    return JSONResponse(content=graph_json)

@app.post("/raw")
async def root(request: Request):
    data = await request.form()
    data = jsonable_encoder(data)

    newSim = SixSHandler()
    newSim.setAtmosProfile(data)
    newSim.setAeroProfile(data)
    newSim.setAtmosCorrections(data)
    newSim.setAltitudeProfiles(data)
    newSim.setGroundReflectance(data)
    newSim.setWaveProfile_Raw(data)

    return newSim.raw()

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")