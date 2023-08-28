from  flask import Flask, render_template, request, jsonify
from pymongo import MongoClient 
from bson.objectid import ObjectId
from flask_cors import CORS 

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
db=client['devices']
CORS(app)

# Create the 'sensors' and 'gateways' collections
sensors_collection = db['sensors']
gateways_collection = db['gateways']

@app.route('/')
def index():
     return render_template('index.html')

#devices/gateways
@app.route('/gateways' ,methods=['POST','GET'])
def data():
     
     if request.method == 'POST' :
        body= request.json  
        gatewayName = body['gatewayName']
        macAddress = body['macAddress']
        gatewayAddress = body['gatewayAddress']
        cropType = body['cropType']
        farmingType = body['farmingType']
        farmingArea = body['farmingArea']
        climateType = body['climateType']
        sensors = body['sensors']



        db['gateways'].insert_one({
             "gatewayName":gatewayName,
             "macAddress":macAddress,
             "gatewayAddress":gatewayAddress,
             "cropType":cropType,
             "farmingType":farmingType,
             "farmingArea":farmingArea,
             "climateType":climateType,
             "sensors":sensors


        })

        return jsonify ({
             'status':'Data is posted to MongoDB',
             'gatewayName':gatewayName,
             'macAddress':macAddress,
             'gatewayAddress':gatewayAddress,
             'cropType':cropType,
             'farmingType':farmingType,
             'farmingArea':farmingArea,
             'climateType':climateType,
             'sensors':sensors

         })
     
     #show all the gateways
     if request.method == 'GET' :
          allData = db['gateways'].find()
          dataJson = []
          for data in allData:
               id=data['_id']
               gatewayName=data['gatewayName']
               macAddress = data['macAddress']
               gatewayAddress = data['gatewayAddress']
               cropType = data['cropType']
               farmingType = data['farmingType']
               farmingArea = data['farmingArea']
               climateType = data['climateType']
               sensors = data['sensors']



               dataDict={
                    "id":str(id),
                    "gatewayName":gatewayName,
                     "macAddress":macAddress,
                     "gatewayAddress":gatewayAddress,
                     "cropType":cropType,
                     "farmingType":farmingType,
                     "farmingArea":farmingArea,
                     "climateType":climateType,
                     "sensors":sensors

               }
               dataJson.append(dataDict)
               print(dataJson)
          return jsonify(dataJson)
     


          #GET a specific data by id

@app.route('/gateways/<string:id>', methods=['GET'])
def get_gateway(id):
               data = db['gateways'].find_one({'_id':ObjectId(id)})
               id = data['_id']
               gatewayName = data['gatewayName']
               macAddress = data['macAddress']
               gatewayAddress = data['gatewayAddress']
               cropType = data['cropType']
               farmingType = data['farmingType']
               farmingArea = data['farmingArea']
               climateType = data['climateType']
               sensors = data['sensors']

               dataDict = {
                    "id":str(id),
                    "gatewayName":gatewayName,
                     "macAddress":macAddress,
                     "gatewayAddress":gatewayAddress,
                     "cropType":cropType,
                     "farmingType":farmingType,
                     "farmingArea":farmingArea,
                     "climateType":climateType,
                     "sensors":sensors

               }
               print (dataDict) 
               return jsonify(dataDict)
          
          #DELETE a data

@app.route('/gateways/<string:id>', methods=['DELETE'])
def delete_gateway(id):
               db['gateways'].delete_many({'_id': ObjectId(id)})
               return jsonify({
                    'status':'Data id:' + id + 'is deleted '
               })
          
 #UPDATE a data 

@app.route('/gateways/<string:id>', methods=['PUT'])
def update_gateway(id):
         
          
     
               body = request.json 
               gatewayName = body['gatewayName']
               macAddress = body['macAddress']
               gatewayAddress = body['gatewayAddress']
               cropType = body['cropType']
               farmingType = body['farmingType']
               farmingArea = body['farmingArea']
               climateType = body['climateType']
               sensors = body['sensors']

               db['gateways'].update_one(
                    {'_id':ObjectId(id)},
                     {
                         "$set":{
                     "gatewayName":gatewayName,
                     "macAddress":macAddress,
                     "gatewayAddress":gatewayAddress,
                     "cropType":cropType,
                     "farmingType":farmingType,
                     "farmingArea":farmingArea,
                     "climateType":climateType,
                     "sensors":sensors,

                    }}
               )

 
     


if __name__=='__main__' :
     app.run(debug=True)