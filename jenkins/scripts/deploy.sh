#!/bin/bash
pkill -f jar || true
nohup java -jar backend/target/demo-1.0.jar &