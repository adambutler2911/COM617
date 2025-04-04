from fastapi import FastAPI
import uvicorn

from handler import SixSHandler

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == "__main__":
    SixSHandler.placeholder()
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")