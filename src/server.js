import express from "express";
import "dotenv/config";

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 2829;


  app.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
  })
}

bootstrap()