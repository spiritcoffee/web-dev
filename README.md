# ProtecSure — Cybersecurity Project Suite

This repository contains the source code for **ProtecSure**, a comprehensive cybersecurity project designed to demonstrate AI-powered threat detection, secure web browsing, and system integration.

## Project Overview
ProtecSure is developed as a final-year demonstration of a multi-platform security suite. It features:
- **AI-Powered Malware Detection** (Simulation)
- **Real-time Web Protection** via Browser Extensions
- **Multi-Platform Support** (Windows, macOS, Mobile)
- **Full-Stack Integration** with Java 21, Tomcat 10, and MySQL

## Tech Stack
- **Frontend**: React 19, Vite 8, React Router 7
- **Styling**: CSS Modules (Vanilla CSS)
- **Backend**: Java 21, Tomcat 10
- **Database**: MySQL Server

## Project Setup Guide

### 1. Frontend Development
To run the web interface locally:
```bash
cd web-dev
npm install
npm run dev
```

### 2. Full-Stack Deployment (Cloud)
To host the Java/Tomcat/MySQL stack on a server (e.g., AWS/Azure):

#### Automated Setup Script
Run this script on an Ubuntu instance to install all components:
```bash
#!/bin/bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y openjdk-21-jdk mysql-server tomcat10 nginx
# Configure Nginx as a reverse proxy for Tomcat (Port 80 -> Port 8080)
```

#### Nginx Configuration
Create `/etc/nginx/sites-available/protecsure`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

#### MySQL Database Setup
```sql
CREATE DATABASE protecsure_db;
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'YourStrongPassword';
GRANT ALL PRIVILEGES ON protecsure_db.* TO 'admin'@'localhost';
```

## Documentation
- **Home**: Project overview and registration demonstration.
- **Plans**: Simulation of tiered subscription models.
- **Download**: Access to cross-platform installer simulations.
- **Privacy**: Project-level data handling and security protocols.

---
© 2025 ProtecSure Project · Final Year Documentation
