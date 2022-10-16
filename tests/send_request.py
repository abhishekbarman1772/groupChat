import requests
apiDomain = "http://localhost:7000/api/V1/"

def login(body):
     return requests.post(
          apiDomain + "auth/login", 
          data = body)

def create_group(token,email):
     return requests.post(
          apiDomain + "/group", 
          data = {"name":'Group', "email": email}, 
          headers={'Authorization': 'bearer ' + token})
    

def send_message(token, groupId):
     return requests.post(
          apiDomain + "/message/" + groupId, 
          data = {"message":'Hey everyone!!!'}, 
          headers={'Authorization': 'bearer ' + token})

def like_message(token, messageId):
     return requests.patch(
          apiDomain + "/message/" + messageId, 
          data = {"like": True}, 
          headers={'Authorization': 'bearer ' + token})

def delete_group(token, groupId):
     return requests.delete(
          apiDomain + "/group/" + groupId, 
          headers={'Authorization': 'bearer ' + token})
