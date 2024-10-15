from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"success":"Welcome to the Sassy Style server."}