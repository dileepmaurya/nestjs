
## databse env details
  DB_HOST=localhost
  DB_PORT=3306
  DB_USERNAME=XXXXX
  DB_PASSWORD=XXXXX
  DB_NAME=MyStore
  DB_LOGGING=true

## To setup typeorm models follow instructions
   https://github.com/dileepmaurya/typeorm/blob/master/README.md#add-database-details-in-env-file

## Start the Nestjs app
  1. Setup the model
  2. run `npm i`
  3. run `num run start:dev`
  4. default run on 3000 port

## API details

1. Get All categories
`curl --location 'http://localhost:3000/categories'`

2.Get one category
`curl --location 'http://localhost:3000/categories/22427479-c2ee-48e2-8146-518e2f8aaba0'`

3. Create category
`curl --location 'http://localhost:3000/categories/' \
--header 'Content-Type: application/json' \
--data '{
    "name": "leather",
    "description": "leather Desc",
    "isActive": true
}'`

--------------------------------------------------------------------------------------
1. Get all products
`curl --location 'http://localhost:3000/products'`

2. Get one product
`curl --location 'http://localhost:3000/products/1e7b4d3b-0c23-45d9-9cb6-cfb96ebcac69'`

3. Create product
`curl --location 'http://localhost:3000/products/' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Shoes",
    "description": "Shoes",
    "price": 550,
    "quantity": 1,
    "category": "08fb8f3a-d63f-4c32-8ef8-73e52e62935c"
}'`
