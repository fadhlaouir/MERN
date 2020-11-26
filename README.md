# Description

> This is a project based course where we build an extensive, in-depth backend API for DevCamper, a bootcamp directory app. We will start from scratch and end up with a professional deployed API with documentation. We will dive deep into Node, Express and MongoDB. Here is some of what you will learn in this course and projec..
```

*  HTTP Essentials
*  Postman Client
*  RESTful APIs
*  Express Framework
*  Routing & Controller Methods
*  MongoDB Atlas & Compass
*  Mongoose ODM
*  Advanced Query (Pagination, filter, etc)
*  Models & Relationships
*  Middleware (Express & Mongoose)
*  MongoDB Geospatial Index / GeoJSON
*  Geocoding
*  Custom Error Handling
*  User Roles & Permissions
*  Aggregation
*  Photo Upload
*  Authentication With JWT & Cookies
*  Emailing Password Reset Tokens
*  Custom Database Seeder Using JSON Files
*  Password & Token Hashing
*  Security: NoSQL Injection, XSS, etc
*  Creating Documentation
*  Deployment With PM2, NGINX, SSL

```


## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```


